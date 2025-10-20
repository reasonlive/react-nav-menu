import { FC } from 'react';
import { useSideMenu } from './SideMenuContext';
import { MenuItemComponentProps } from './types';

export const MenuItem: FC<MenuItemComponentProps> = ({
     item,
     level = 0,
     onSelect,
     className = ''
 }) => {
    const { selectedItem, setSelectedItem, isCollapsed, isMobile } = useSideMenu();
    const isSelected = selectedItem === item;

    const handleClick = (e: any) => {
        setSelectedItem(item);
        // Вызываем кастомный обработчик если он передан
        if (onSelect) {
            onSelect(item);
        }
    };

    // Вычисляем отступ для вложенных элементов
    const paddingLeft: string = isCollapsed ? ' px-3' : ` px-${Math.min(3 + level * 2, 8)}`;
    // меняем цвет выбранного элемента
    const selectedStyle: string = isSelected ? ' bg-blue-50 text-blue-700' : ' text-gray-700 hover:bg-gray-100';
    const labelClass = 'flex-1 truncate transition-colors duration-200';

    return (
        <div role="none">
            <button
                role="menuitem"
                aria-haspopup={!!item.children?.length}
                aria-expanded={isSelected && !!item.children?.length}
                onClick={handleClick}
                className={`${className}${paddingLeft}${selectedStyle}`}
                title={isCollapsed ? item.label : undefined}
            >
                <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'space-x-3'}`}>
                    {item.icon && (
                        <item.icon className={`
                        flex-shrink-0 transition-colors duration-200
                        ${item.iconSize}
                        ${item.color}
                        ${isSelected ? 'text-blue-600' : 'text-gray-500'}`}/>
                    )}

                    {!isCollapsed  && (<span className={labelClass}>{item.label}</span>)}
                    {isCollapsed && level > 0 && (<span className={labelClass}>{item.label}</span>)}
                </div>
            </button>

            {/* Рендерим дочерние элементы */}
            {item.children?.length && isSelected && !isCollapsed && (
                <ul role="menu" aria-label={item.label}>
                    {item.children.map((child) => (
                        <li key={child.id}>
                            <MenuItem
                                key={child.id}
                                item={child}
                                level={1}
                                onSelect={onSelect}
                                className={className + ' text-right'}
                            />
                        </li>
                    ))}
                </ul>
            )}

            {/* Рендерим дочерние элементы при закрытом меню*/}
            {item.children?.length && isSelected && isCollapsed && (
                <div className={`fixed left-20 ${isMobile ? 'top-4 left-40' : 'top-40'} z-50 ml-2 mt-2`}>
                    {/* Стрелка-указатель */}
                    <div
                        className="absolute
                        -left-2
                        top-4
                        w-4
                        h-4
                        bg-white
                        border-l
                        border-t
                        border-gray-200
                        transform
                        rotate-45"
                    ></div>

                    {/* Контейнер подменю */}
                    <div
                        className="bg-white
                        rounded-lg
                        shadow-xl
                        border
                        border-gray-200
                        min-w-48
                        py-2
                        backdrop-blur-sm"
                    >

                        {/* Список дочерних элементов */}
                        <ul role="menu">
                            {item.children.map((child) => (
                                <li key={child.id}>
                                    <MenuItem
                                        key={child.id}
                                        item={child}
                                        level={1}
                                        onSelect={onSelect}
                                        className={className}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};