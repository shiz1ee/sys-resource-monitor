import type { ReactNode } from "react";

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
            borderColor="#00ff00"
            flexGrow={1}
            padding={1}
            flexDirection="column"    
        >
            <text fg={color}>{title}</text>
            {children}
        </box>
    )
}