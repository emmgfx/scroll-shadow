# @emmgfx/scroll-shadow

Scroll shadow indicators for React. Shows shadows on the edges of a scrollable container to hint that there's more content — no scroll events, no polling, just [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).

## Installation

```bash
npm install @emmgfx/scroll-shadow
```

## Usage

```jsx
import { ScrollShadow } from "@emmgfx/scroll-shadow";

<ScrollShadow style={{ height: 300 }}>
  {/* your scrollable content */}
</ScrollShadow>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `direction` | `"vertical" \| "horizontal" \| "both"` | `"vertical"` | Which axes to observe and show shadows on |
| `shadowColor` | `string` | `"rgba(0, 0, 0, 0.15)"` | CSS color for the gradient shadow. Set to `""` to disable |
| `shadowSize` | `number` | `20` | Height/width of the shadow overlays in pixels |
| `lineColor` | `string` | `undefined` | CSS color for a solid line at the edge. Omit to disable |
| `lineSize` | `number` | `1` | Thickness of the solid line in pixels |

All standard `div` props are forwarded to the outer wrapper element.

## Examples

**Horizontal scroll:**
```jsx
<ScrollShadow direction="horizontal">
  <div style={{ display: "flex" }}>
    {/* columns */}
  </div>
</ScrollShadow>
```

**Both directions:**
```jsx
<ScrollShadow direction="both" style={{ height: 300 }}>
  {/* 2D scrollable content */}
</ScrollShadow>
```

**Custom shadow:**
```jsx
<ScrollShadow shadowColor="rgba(99, 102, 241, 0.3)" shadowSize={48}>
  {/* content */}
</ScrollShadow>
```

## License

MIT © [Josep Viciana](https://www.viciana.me)
