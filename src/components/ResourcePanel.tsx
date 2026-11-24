import type { ReactNode } from "react";
import { theme } from "../theme";


type ResourcePanelProps = {
    title: string;
    color: string;
    children: ReactNode;
};

export function ResourcePanel({
    title,
    color,
    children,
}: ResourcePanelProps) {
    return (
        <box
            borderStyle="single"
            borderColor={theme.border}
            flexGrow={1}
            padding={1}
            flexDirection="column"    
        >
            <text fg={color}>{title}</text>
            {children}
        </box>
    );
}