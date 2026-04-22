import { Code } from "bright";

Code.theme = "material-palenight";

export function CodeBlock({ children }: { children: string }) {
  return (
    <Code
      lang="jsx"
      lineNumbers
      className="m-0! rounded-none! text-[13px] leading-relaxed text-left"
      style={{ fontFamily: "ui-monospace, Consolas, monospace" }}
    >
      {children}
    </Code>
  );
}
