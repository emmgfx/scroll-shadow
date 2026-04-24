# @emmgfx/scroll-hint

Scroll edge indicators for React. Shows shadows and/or solid lines on the edges of a scrollable container to hint that there's more content — no scroll events, no polling, just [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).

## Installation

```bash
npm install @emmgfx/scroll-hint
```

## Usage

```jsx
import { ScrollHint } from "@emmgfx/scroll-hint";

<ScrollHint>
  {/* your scrollable content */}
</ScrollHint>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `direction` | `"vertical" \| "horizontal" \| "both"` | `"vertical"` | Which axes to observe and show indicators on |
| `shadowColor` | `string` | `"rgba(0, 0, 0, 0.15)"` | CSS color for the gradient shadow. Set to `""` to disable |
| `shadowSize` | `number` | `20` | Height/width of the shadow overlays in pixels |
| `lineColor` | `string` | `undefined` | CSS color for a solid line at the edge. Omit to disable |
| `lineSize` | `number` | `1` | Thickness of the solid line in pixels |

All standard `div` props are forwarded to the outer wrapper element.

## Examples

**Horizontal scroll:**
```jsx
<ScrollHint direction="horizontal">
  <div style={{ display: "flex" }}>
    {/* columns */}
  </div>
</ScrollHint>
```

**Both directions:**
```jsx
<ScrollHint direction="both" style={{ height: 300 }}>
  {/* 2D scrollable content */}
</ScrollHint>
```

**Solid line instead of shadow:**
```jsx
<ScrollHint shadowColor="" lineColor="rgba(0,0,0,0.1)">
  {/* content */}
</ScrollHint>
```

**Line + shadow combined:**
```jsx
<ScrollHint lineColor="rgba(0,0,0,0.1)">
  {/* content */}
</ScrollHint>
```

## Dark mode

`shadowColor` and `lineColor` accept any CSS value, including variables. Define a variable in your stylesheet and update it per color scheme:

```css
:root { --hint-shadow: rgba(0, 0, 0, 0.15); }
@media (prefers-color-scheme: dark) {
  :root { --hint-shadow: rgba(255, 255, 255, 0.1); }
}
```

```jsx
<ScrollHint shadowColor="var(--hint-shadow)">
  {/* content */}
</ScrollHint>
```

Works with any dark mode strategy — media query, class-based (`class="dark"`), or data attributes.

## Tailwind CSS

Define the variable inline using Tailwind's dark mode variant:

```jsx
<ScrollHint
  shadowColor="var(--hint-shadow)"
  className="[--hint-shadow:rgba(0,0,0,0.15)] dark:[--hint-shadow:rgba(255,255,255,0.1)]"
>
  {/* content */}
</ScrollHint>
```

## License

MIT © [Josep Viciana](https://www.viciana.me)
