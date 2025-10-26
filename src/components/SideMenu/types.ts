import {ReactNode} from "react";

export interface SideMenuProps {
    children: ReactNode;
    activeItemId?: string;
    onItemClick?: (itemId: string) => void;
    className?: string;
    collapsed?: boolean;
    onCollapseChange?: (collapsed: boolean) => void;
    renderToggleButton?: (props: ToggleButtonProps) => ReactNode;
}

export interface MenuItemProps {
    id: string;
    label: string;
    disabled?: boolean;
    children?: ReactNode;
    icon?: ReactNode;
    className?: string;
}

export interface ToggleButtonProps {
    collapsed: boolean;
    onToggle: () => void;
}

export interface SideMenuContextType {
    activeItemId?: string;
    onItemClick: (itemId: string) => void;
    collapsed: boolean;
}

export interface RenderItemProps {
    item: Omit<MenuItemProps, 'children'>;
    isActive: boolean;
    isExpanded: boolean;
    hasChildren: boolean;
    level: number;
    onItemClick: () => void;
    onToggleExpand: () => void;
    collapsed: boolean;
}