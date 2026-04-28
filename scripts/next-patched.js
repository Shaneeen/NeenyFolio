require("./fs-patch");

const preload = require.resolve("./fs-patch");
const preloadForNodeOptions = preload.replace(/\\/g, "/");
const existingNodeOptions = process.env.NODE_OPTIONS?.trim();
const preloadFlag = `--require=${preloadForNodeOptions}`;
process.env.NODE_OPTIONS = existingNodeOptions
  ? `${preloadFlag} ${existingNodeOptions}`
  : preloadFlag;

process.argv = [process.argv[0], require.resolve("next/dist/bin/next"), ...process.argv.slice(2)];
require("next/dist/bin/next");
