import { theme } from "../theme"
export function StatusBar() {
    return (
        <box
            flexDirection="row"
            justifyContent="space-between"
            borderStyle="single"
            borderColor={theme.border}
            paddingLeft={1}
            paddingRight={1}    
        >
            <text fg={theme.success}>
                ■ SYSTEM ONLINE
            </text>

            <text fg={theme.muted}>
                V0.1.0 | ES: EXIT
            </text>

        </box>
    )
}