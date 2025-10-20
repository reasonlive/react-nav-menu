import { FC, ReactNode } from "react";
import { useSideMenu } from "./SideMenuContext";
import { MenuToggle } from "./MenuToggle";

export interface MenuHeaderProps {
    title: string;
    className?: string;
    buttonIcon?: ReactNode;
    buttonClassName?: string;
}

export const MenuHeader: FC<MenuHeaderProps> = ({
    title,
    className,
    buttonIcon,
    buttonClassName
}) => {
    const { isCollapsed } = useSideMenu();

    return (
        <div className={className}>
            {!isCollapsed && (
                <h2 className="text-xl font-bold text-white tracking-tight">{title}</h2>
            )}
            {buttonIcon ? (<MenuToggle className={buttonClassName}>{buttonIcon}</MenuToggle>) : ''}
        </div>
    );
};