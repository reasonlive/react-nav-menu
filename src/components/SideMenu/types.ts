import {ComponentType, ReactNode} from "react";

export interface MenuItemProps {
    /** Уникальный идентификатор элемента меню */
    id: string;
    /** Иконка элемента меню (React компонент) */
    icon?: ComponentType<{ className?: string }>;
    /** Текст элемента меню */
    label: string;
    /** Путь для навигации */
    path: string;
    /** Цвет иконки */
    color: string;
    /** Размер иконки (классы Tailwind) */
    iconSize?: string;
    /** Дочерние элементы меню (для вложенных меню) */
    children?: MenuItemProps[];
    /** Дополнительные данные для кастомного использования */
    metadata?: Record<string, any>;
}

export interface MenuItemComponentProps {
    /** Элемент меню */
    item: MenuItemProps;
    /** Уровень вложенности */
    level?: number;
    /** Колбэк при выборе элемента */
    onSelect?: (item: MenuItemProps) => void;
    /** Дополнительные классы для контейнера */
    className?: string;
}

export interface SideMenuContextType {
    /** Текущий выбранный элемент меню */
    selectedItem: MenuItemProps | null;
    /** Функция для выбора элемента меню */
    setSelectedItem: (item: MenuItemProps | null) => void;
    /** Состояние свернутого меню */
    isCollapsed: boolean;
    /** Функция для переключения состояния свернутого меню */
    toggleCollapsed: () => void;
    /** Состояние мобильного меню */
    isMobileOpen: boolean;
    /** Функция для переключения мобильного меню */
    toggleMobile: () => void;
    /** Определяет мобильный режим */
    isMobile: boolean;
}

export interface SideMenuProps {
    /** Дочерние элементы меню */
    children: ReactNode;
    /** Начальное состояние свернутого меню */
    defaultCollapsed?: boolean;
    /** Колбэк при изменении состояния свернутого меню */
    onCollapseChange?: (collapsed: boolean) => void;
    /** Брейкпоинт для мобильной версии */
    mobileBreakpoint?: number;
}