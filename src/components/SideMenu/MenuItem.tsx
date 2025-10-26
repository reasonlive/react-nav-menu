import {FC, Children, MouseEvent, useState, useRef} from 'react';
import { MenuItemProps } from './types';
import { useSideMenu } from './hooks';

export const MenuItem: FC<MenuItemProps> = ({
    id,
    label,
    disabled = false,
    children,
    icon,
    className = ''
}) => {
    const { activeItemId, onItemClick, collapsed } = useSideMenu();
    const menuItemRef = useRef<HTMLLIElement>(null);

    const [isExpanded, setIsExpanded] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const hasChildren = Children.count(children) > 0;
    const isActive = activeItemId === id;

    const handleItemClick = () => {
        if (disabled) return;

        if (hasChildren) {
            if (!collapsed) {
                setIsExpanded(!isExpanded);
            }
            onItemClick(id);
        } else {
            onItemClick(id);
        }
    };

    const handleToggleExpand = (e: MouseEvent) => {
        e.stopPropagation();
        if (disabled) return;
        setIsExpanded(!isExpanded);
    };

    const handleMouseEnter = () => {
        if (collapsed) {
            setShowTooltip(true);
        }
    };

    const handleMouseLeave = () => {
        if (collapsed) {
            setShowTooltip(false);
        }
    };

    // Получаем позицию для тултипа
    const getTooltipPosition = () => {
        if (!menuItemRef.current) return { left: 0, top: 0 };

        const rect = menuItemRef.current.getBoundingClientRect();
        return {
            left: rect.right,
            top: rect.top
        };
    };

    return (
        <>
            <li
                ref={menuItemRef}
                role="none"
                className={className}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div
                    role="menuitem"
                    aria-current={isActive ? 'page' : undefined}
                    aria-expanded={hasChildren ? isExpanded : undefined}
                    aria-disabled={disabled}
                    tabIndex={disabled ? -1 : 0}
                    onClick={handleItemClick}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleItemClick();
                        }
                    }}
                    className="flex items-center justify-between w-full"
                >
                    <div className="flex items-center">
                        {icon}
                        {!collapsed && <span className="ml-2">{label}</span>}
                    </div>
                    {hasChildren && !collapsed && (
                        <button
                            onClick={handleToggleExpand}
                            disabled={disabled}
                        >
                        </button>
                    )}
                </div>
            </li>

            {/* Тултип для свернутого меню */}
            {collapsed && showTooltip && (
                <div
                    className="fixed z-50 bg-white border border-gray-200 rounded-lg shadow-lg"
                    style={getTooltipPosition()}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {!hasChildren ? (
                        // Простой тултип с названием для элементов без детей
                        <div className="px-4 py-2 text-sm font-medium text-gray-800 whitespace-nowrap">
                            {label}
                        </div>
                    ) : (
                        // Подменю с вложенными элементами
                        <div className="min-w-48">
                            <div className="font-medium text-gray-800 px-4 py-2 border-b border-gray-100">
                                {label}
                            </div>
                            <div className="py-1">
                                {Children.map(children, (child) => {
                                    if (!child) return null;

                                    const childElement = child as any;
                                    return (
                                        <div
                                            className={childElement.props.className}
                                            //className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer text-sm"
                                            onClick={() => {
                                                if (childElement.props && childElement.props.id) {
                                                    onItemClick(childElement.props.id);
                                                    setShowTooltip(false);
                                                }
                                            }}
                                        >
                                            {childElement.props.label}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Обычное отображение вложенных элементов в развернутом состоянии */}
            {!collapsed && hasChildren && isExpanded && (
                <div className="ml-4 border-l border-gray-200">
                    {children}
                </div>
            )}
        </>
    );
};