import {FC, JSX } from "react";
import { useSideMenu } from "./SideMenuContext";
import {MenuItem} from "./MenuItem";
import {MenuGroup} from "./MenuGroup";
import {MenuItemComponentProps, MenuItemProps} from "./types";

interface NavigationPanelProps {
    header?: JSX.Element;
    className?: string;
    items: MenuItemProps[];
    itemsClassName?: string;
    onSelectHandler?: MenuItemComponentProps['onSelect'];
}

export const NavigationPanel: FC<NavigationPanelProps> = ({
    header,
    className,
    items,
    itemsClassName,
    onSelectHandler
}) => {
    const { isCollapsed, isMobile } = useSideMenu();

    if (isMobile) {
        return (
            <>
                {/* Горизонтальное меню для мобильных */}
                <nav
                    className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200"
                    aria-label="Мобильная навигация"
                >
                    <MenuGroup>
                        {items.map((item) => (
                            <MenuItem
                                key={item.id}
                                item={item}
                                level={0}
                                onSelect={onSelectHandler}
                                className={itemsClassName}

                            />
                        ))}
                    </MenuGroup>
                </nav>
            </>
        );
    }

    return (
        <nav
            aria-label="Навигация"
            className={`${className} ${isCollapsed && !isMobile ? 'w-20' : 'w-80'}
                ${isMobile ? 'fixed inset-y-0 left-0 z-50' : 'relative'}
            `}
        >
            {header}
            <MenuGroup>
                {items.map((item) => (
                    <MenuItem
                        key={item.id}
                        item={item}
                        level={0}
                        onSelect={onSelectHandler}
                        className={itemsClassName}
                    />
                ))}
            </MenuGroup>
        </nav>
    );
};