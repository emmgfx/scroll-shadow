"use client";

import { ScrollShadow } from "@emmgfx/scroll-shadow";

const items = Array.from({ length: 30 }, (_, i) => `Item ${i + 1}`);
const cols = Array.from({ length: 20 }, (_, i) => `Col ${i + 1}`);

function ListItem({ children }: { children: string }) {
  return (
    <div className="px-5 py-2 border-b border-(--color-border) last:border-0 text-sm text-(--color-body)">
      {children}
    </div>
  );
}

export function VerticalDemo() {
  return (
    <ScrollShadow style={{ width: "100%", height: "100%" }}>
      {items.map((item) => <ListItem key={item}>{item}</ListItem>)}
    </ScrollShadow>
  );
}

export function HorizontalDemo() {
  return (
    <ScrollShadow direction="horizontal" style={{ width: "100%", height: "100%" }}>
      <div className="flex gap-4 p-4" style={{ height: 240 }}>
        {cols.map((_, i) => (
          <div key={i} className="flex-none flex flex-col overflow-hidden rounded-lg" style={{ width: 140 }}>
            <div
              className="flex-1"
              style={{
                background: `oklch(from var(--color-accent) calc(l + ${(i % 5) * 0.03}) calc(c * 0.9) calc(h + ${i * 22}))`,
                opacity: 0.7,
              }}
            />
            <div className="p-3 flex flex-col gap-1.5" style={{ background: `oklch(from var(--color-accent) calc(l - 0.22 + ${(i % 5) * 0.03}) calc(c * 0.5) calc(h + ${i * 22}))` }}>
              <div className="h-2.5 rounded" style={{ width: "80%", background: `oklch(from var(--color-accent) calc(l + ${(i % 5) * 0.03}) calc(c * 0.9) calc(h + ${i * 22}))` }} />
              <div className="h-2 rounded" style={{ width: "55%", background: `oklch(from var(--color-accent) calc(l + ${(i % 5) * 0.03}) calc(c * 0.9) calc(h + ${i * 22}))` }} />
            </div>
          </div>
        ))}
      </div>
    </ScrollShadow>
  );
}

export function BothDemo() {
  return (
    <ScrollShadow direction="both" style={{ width: "100%", height: "100%" }}>
      <div
        className="grid"
        style={{ gridTemplateColumns: `repeat(${cols.length}, 90px)` }}
      >
        {items.flatMap((item) =>
          cols.map((col) => (
            <div
              key={`${item}-${col}`}
              className="px-2.5 py-1.5 border-r border-b border-(--color-border) whitespace-nowrap text-xs text-(--color-body)"
            >
              {item}/{col}
            </div>
          ))
        )}
      </div>
    </ScrollShadow>
  );
}

export function CustomDemo() {
  return (
    <ScrollShadow shadowColor="rgba(170, 59, 255, 0.3)" shadowSize={48} style={{ width: "100%", height: "100%" }}>
      {items.map((item) => <ListItem key={item}>{item}</ListItem>)}
    </ScrollShadow>
  );
}
