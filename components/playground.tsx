"use client";

import { useState } from "react";

import { GlassCard, PageHeader, SectionHead } from "@/components/ui";
import type { PlaygroundFact, PlaygroundFavorite } from "@/lib/types";

export function PlaygroundPageContent({
  facts,
  favorites
}: {
  facts: PlaygroundFact[];
  favorites: PlaygroundFavorite[];
}) {
  const [revealed, setRevealed] = useState<string[]>([]);
  const [notes, setNotes] = useState([
    {
      message: "Such a beautiful portfolio. The attention to detail is so impressive.",
      from: "a kind visitor"
    },
    {
      message: "Love the soft aesthetic mixed with serious technical work.",
      from: "a dear friend"
    },
    {
      message: "One of the nicest portfolio sites I've seen.",
      from: "fellow builder"
    }
  ]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function toggleFact(id: string) {
    setRevealed((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  }

  function addNote() {
    if (!message.trim()) return;
    setNotes((current) => [
      { message: message.trim(), from: name.trim() || "anonymous" },
      ...current
    ]);
    setName("");
    setMessage("");
  }

  return (
    <main className="page-shell">
      <PageHeader
        eyebrow="The fun zone"
        title={<>Shaneen&apos;s <em>playground</em></>}
        subtitle="A lighter corner of the site for fun facts, current favourites, and a tiny guestbook."
      />

      <section className="grid gap-4 lg:grid-cols-3">
        <GlassCard className="bg-gradient-to-br from-dusty/20 to-white/55 p-7">
          <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">
            Small joy
          </div>
          <div className="mb-3 font-serif text-3xl text-rust">Playful by default</div>
          <p className="text-sm font-light leading-7 text-muted">
            I still want this page to feel alive in Next, but a little cleaner than the original mini-game-heavy version.
          </p>
        </GlassCard>

        <GlassCard className="p-7">
          <h2 className="mb-1 font-serif text-2xl text-ink">Fun facts</h2>
          <p className="mb-5 text-sm font-light text-muted">Tap to reveal each one.</p>
          <div className="space-y-3">
            {facts.map((fact) => {
              const isRevealed = revealed.includes(fact.id);
              return (
                <button
                  key={fact.id}
                  type="button"
                  onClick={() => toggleFact(fact.id)}
                  className="w-full rounded-2xl border border-white/85 bg-white/70 p-4 text-left transition hover:bg-white"
                >
                  <div className="flex gap-3">
                    <div className="font-serif text-2xl text-dusty">{fact.id}</div>
                    <div>
                      <div
                        className={`text-sm leading-6 text-ink transition ${
                          isRevealed ? "blur-0" : "blur-[4px]"
                        }`}
                      >
                        {fact.text}
                      </div>
                      <div className="mt-1 text-xs text-rust">
                        {isRevealed ? "tap to hide" : "tap to reveal"}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </GlassCard>

        <GlassCard className="p-7">
          <h2 className="mb-1 font-serif text-2xl text-ink">Currently loving</h2>
          <p className="mb-5 text-sm font-light text-muted">Current rotations and obsessions.</p>
          <div className="space-y-3">
            {favorites.map((favorite) => (
              <div
                key={favorite.name}
                className="flex items-center gap-3 border-b border-ink/6 pb-3 last:border-b-0"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/60 text-lg">
                  {favorite.icon}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-ink">{favorite.name}</div>
                  <div className="text-xs text-muted">{favorite.type}</div>
                </div>
                <div className="pill border-rust/20 bg-rust/10 text-rust">{favorite.tag}</div>
              </div>
            ))}
          </div>
        </GlassCard>
      </section>

      <section className="mt-12">
        <SectionHead title="Guestbook" />
        <div className="grid gap-4 lg:grid-cols-3">
          {notes.map((note, index) => (
            <GlassCard key={`${note.from}-${index}`} className="p-6">
              <p className="mb-4 text-sm font-light italic leading-7 text-ink">
                &quot;{note.message}&quot;
              </p>
              <div className="text-xs font-semibold text-muted">- {note.from}</div>
            </GlassCard>
          ))}
        </div>
        <GlassCard className="mt-5 p-4">
          <div className="flex flex-col gap-3 md:flex-row">
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Your name"
              className="rounded-2xl border border-white/85 bg-white/70 px-4 py-3 text-sm outline-none transition focus:bg-white"
            />
            <input
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Leave a little note"
              className="min-w-0 flex-1 rounded-2xl border border-white/85 bg-white/70 px-4 py-3 text-sm outline-none transition focus:bg-white"
            />
            <button
              type="button"
              onClick={addNote}
              className="rounded-2xl bg-rust px-5 py-3 text-sm font-medium text-white transition hover:bg-ink"
            >
              Send
            </button>
          </div>
        </GlassCard>
      </section>
    </main>
  );
}
