const fs = require("fs");
const path = require("path");
const childProcess = require("child_process");

function isIgnorableReadlinkError(error) {
  return error && (error.code === "EISDIR" || error.code === "EINVAL" || error.code === "UNKNOWN");
}

function isNextTypesPath(targetPath) {
  return typeof targetPath === "string" && targetPath.endsWith(`${path.sep}.next${path.sep}types`);
}

function canTreatMkdirAsSuccess(targetPath, error) {
  return (
    error &&
    (error.code === "EPERM" || error.code === "EEXIST") &&
    isNextTypesPath(targetPath) &&
    fs.existsSync(targetPath) &&
    fs.statSync(targetPath).isDirectory()
  );
}

function ensureNextTypesDir(targetPath) {
  if (!isNextTypesPath(targetPath)) {
    return false;
  }

  try {
    childProcess.execFileSync(
      "powershell.exe",
      [
        "-NoProfile",
        "-Command",
        `New-Item -ItemType Directory -Path '${targetPath.replace(/'/g, "''")}' -Force | Out-Null`
      ],
      {
        stdio: "ignore"
      }
    );
  } catch {
    if (!(fs.existsSync(targetPath) && fs.statSync(targetPath).isDirectory())) {
      return false;
    }
  }

  return fs.existsSync(targetPath) && fs.statSync(targetPath).isDirectory();
}

const originalReadlinkSync = fs.readlinkSync.bind(fs);
fs.readlinkSync = function patchedReadlinkSync(pathLike, options) {
  try {
    return originalReadlinkSync(pathLike, options);
  } catch (error) {
    if (isIgnorableReadlinkError(error)) {
      return null;
    }
    throw error;
  }
};

const originalReadlink = fs.readlink.bind(fs);
fs.readlink = function patchedReadlink(pathLike, options, callback) {
  const hasOptions = typeof options !== "function";
  const cb = hasOptions ? callback : options;
  const finalOptions = hasOptions ? options : undefined;

  return originalReadlink(pathLike, finalOptions, (error, linkString) => {
    if (isIgnorableReadlinkError(error)) {
      cb?.(null, null);
      return;
    }
    cb?.(error, linkString);
  });
};

if (fs.promises?.readlink) {
  const originalPromisesReadlink = fs.promises.readlink.bind(fs.promises);
  fs.promises.readlink = async function patchedPromisesReadlink(pathLike, options) {
    try {
      return await originalPromisesReadlink(pathLike, options);
    } catch (error) {
      if (isIgnorableReadlinkError(error)) {
        return null;
      }
      throw error;
    }
  };
}

const originalMkdirSync = fs.mkdirSync.bind(fs);
fs.mkdirSync = function patchedMkdirSync(targetPath, options) {
  try {
    return originalMkdirSync(targetPath, options);
  } catch (error) {
    if (ensureNextTypesDir(targetPath)) {
      return targetPath;
    }
    if (canTreatMkdirAsSuccess(targetPath, error)) {
      return targetPath;
    }
    throw error;
  }
};

const originalMkdir = fs.mkdir.bind(fs);
fs.mkdir = function patchedMkdir(targetPath, options, callback) {
  const hasOptions = typeof options !== "function";
  const cb = hasOptions ? callback : options;
  const finalOptions = hasOptions ? options : undefined;

  return originalMkdir(targetPath, finalOptions, (error, createdPath) => {
    if (error && ensureNextTypesDir(targetPath)) {
      cb?.(null, targetPath);
      return;
    }
    if (canTreatMkdirAsSuccess(targetPath, error)) {
      cb?.(null, targetPath);
      return;
    }
    cb?.(error, createdPath);
  });
};

if (fs.promises?.mkdir) {
  const originalPromisesMkdir = fs.promises.mkdir.bind(fs.promises);
  fs.promises.mkdir = async function patchedPromisesMkdir(targetPath, options) {
    try {
      return await originalPromisesMkdir(targetPath, options);
    } catch (error) {
      if (ensureNextTypesDir(targetPath)) {
        return targetPath;
      }
      if (canTreatMkdirAsSuccess(targetPath, error)) {
        return targetPath;
      }
      throw error;
    }
  };
}
