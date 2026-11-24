import { createCliRenderer, TextAttributes } from "@opentui/core";
import { createRoot } from "@opentui/react";
import { ResourcePanel } from "./components/ResourcePanel";

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
        <ResourcePanel title="01 // CPU" color="#ff0000">
          <text attributes={TextAttributes.DIM}>
            CPU Usage: --%
          </text>
        </ResourcePanel>
        <ResourcePanel title="02 // MEMORY" color="#ff0000">
          <text attributes={TextAttributes.DIM}>
            MEMORY Usage: --%
          </text>
        </ResourcePanel>
    </box>
    <box flexDirection="row" gap={1} flexGrow={1}>
      <ResourcePanel title="03 // STORAGE" color="#0000ff">
          <text attributes={TextAttributes.DIM}>
            STORAGE Usage: --%
          </text>
        </ResourcePanel>
      <ResourcePanel title="04 // NETWORK" color="#0000ff">
          <text attributes={TextAttributes.DIM}>
            NETWORK Usage: --%
          </text>
        </ResourcePanel>
    </box>
    </box>
  );
}

const renderer = await createCliRenderer();
createRoot(renderer).render(<App />);
