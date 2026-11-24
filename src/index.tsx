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
          SYS-Makers-Elysium
        </text>

        <text fg="#ff0000">
          SYSTEM DIAGNOSTICS INTERFACE
        </text>

        <text attributes={TextAttributes.DIM}>
          VERSION 0.1.0
        </text>

      </box>
      <box flexDirection="row" gap={1} flexGrow={1}>
        <box 
        borderStyle="single"
        borderColor="#00ff00"
        flexGrow={1}
        padding={1}  
      >
        <text fg="#ff0000">01 // CPU</text>
        <text attributes={TextAttributes.DIM}>CPU Usage: --%</text>
      </box>

      <box
        borderStyle="single"
        borderColor="#00ff00"
        flexGrow={1}
        padding={1}  
      >
        <text fg="#ff0000">02 // MEMORY</text>
        <text attributes={TextAttributes.DIM}>RAM Usage: --%</text>
      </box>
    </box>
    <box flexDirection="row" gap={1} flexGrow={1}>
      <box borderStyle="single" borderColor="#00ff00" flexGrow={1} padding={1}>
        <text fg="#0000ff">03 // STORAGE</text>
        <text attributes={TextAttributes.DIM}>STORAGE Usage: --%</text>
      </box>
      <box borderStyle="single" borderColor="#00ff00" flexGrow={1} padding={1}>
        <text fg="#0000ff">04 // NETWORK</text>
        <text attributes={TextAttributes.DIM}>NETWORK Usage: --%</text>
      </box>
    </box>
    </box>
  );
}

const renderer = await createCliRenderer();
createRoot(renderer).render(<App />);
