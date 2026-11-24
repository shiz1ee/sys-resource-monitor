import { createCliRenderer, TextAttributes } from "@opentui/core";
import { createRoot } from "@opentui/react";

function App() {
  return (
    <box
      flexGrow={1}
      flexDirection="column"
      borderStyle="single"
      borderColor="#00c133"
      padding={1}  
    >
      <box 
        flexDirection="column"
        borderStyle="double"
        borderColor="#00c133"
        padding={1}  
      >
        <text fg="#ff0000" attributes={TextAttributes.BOLD}>
          SYSTEM MONITOR
        </text>

        <text fg="#ff0000">
          SYSTEM DIAGNOSTICS INTERFACE
        </text>

        <text attributes={TextAttributes.DIM}>
          VERSION 0.1.0
        </text>

      </box>
    </box>
  );
}

const renderer = await createCliRenderer();
createRoot(renderer).render(<App />);
