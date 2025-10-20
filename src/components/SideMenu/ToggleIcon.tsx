import { FC } from "react";
import { useSideMenu } from "./SideMenuContext";

export const ToggleIcon: FC = () => {
    const { isCollapsed } = useSideMenu();

    return (
        <svg className="w-5 h-5 text-gray-600 transition-transform duration-200 hover:scale-110"
             fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isCollapsed ? "M13 5l7 7-7 7M5 5l7 7-7 7" : "M11 19l-7-7 7-7M19 19l-7-7 7-7"}
            />
        </svg>
    );
};