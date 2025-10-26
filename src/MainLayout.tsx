import { FC, ReactNode, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SideMenu, MenuItem, useSideMenuState, ToggleButtonProps } from './components/SideMenu';
import {
    HomeIcon,
    UsersIcon,
    Cog6ToothIcon,
    ChartBarIcon,
    DocumentIcon
} from '@heroicons/react/24/outline';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import {menuItemClasses, toggleButtonClasses} from "./tailwind";

// Стилизованное использование
const StyledSideMenu: FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { activeItemId, setActiveItemId, collapsed, toggleCollapse } = useSideMenuState();

    // Маппинг путей
    const routeMap: { [key: string]: string } = {
        '/': 'dashboard',
        '/analytics': 'analytics',
        '/analytics/indicators': 'analytics-indicators',
        '/analytics/statistics': 'analytics-statistics',
        '/users': 'users',
        '/documents': 'documents',
        '/settings': 'settings',
    };

    // Обработчик клика по пункту меню
    const handleItemClick = (itemId: string) => {
        setActiveItemId(itemId);

        // Находим путь по ID
        const path = Object.entries(routeMap).find(([path, id]) => id === itemId)?.[0];
        if (path) {
            navigate(path);
        }
    };

    // Синхронизация активного пункта меню с текущим путем
    useEffect(() => {
        const activeId = routeMap[location.pathname];
        if (activeId && activeId !== activeItemId) {
            setActiveItemId(activeId);
        }
    }, [location.pathname]);

    const customToggleButton = ({ collapsed, onToggle }: ToggleButtonProps) => (
        <button
            onClick={onToggle}
            aria-label={collapsed ? 'Развернуть меню' : 'Свернуть меню'}
            className={toggleButtonClasses}
        >
            {collapsed ? (
                <ChevronRightIcon className="w-4 h-4" />
            ) : (
                <>
                    <ChevronLeftIcon className="w-4 h-4 mr-2" />
                    <span className="text-sm">Свернуть</span>
                </>
            )}
        </button>
    );

    // Функция для создания иконки
    const createIcon = (IconComponent: FC<{ className?: string }>) => (
        <IconComponent className={`${collapsed ? 'w-7 h-7' : 'w-4 h-4'}`} />
    );

    // Функция для определения активен ли родительский элемент аналитики
    const isAnalyticsActive = activeItemId === 'analytics' ||
        activeItemId === 'analytics-indicators' ||
        activeItemId === 'analytics-statistics';

    return (
        <div className={`bg-white border-r border-gray-200 transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'} flex flex-col h-full`}>
            {/* Шапка меню */}
            <div className="p-4 border-b border-gray-200 flex-shrink-0">
                <h1 className={`text-xl font-bold text-gray-800 ${collapsed ? 'hidden' : 'block'}`}>
                    Система управления
                </h1>
                {collapsed && (
                    <div className="flex justify-center">
                        <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                            <span className="text-white text-sm font-bold">S</span>
                        </div>
                    </div>
                )}
            </div>

            {/* Основное меню с прокруткой */}
            <div className="flex-1 overflow-y-auto">
                <SideMenu
                    activeItemId={activeItemId}
                    onItemClick={handleItemClick}
                    collapsed={collapsed}
                    onCollapseChange={toggleCollapse}
                    className="p-1 space-y-1"
                >
                    {/* Главная панель */}
                    <MenuItem
                        id="dashboard"
                        label="Главная панель"
                        icon={createIcon(HomeIcon)}
                        className={menuItemClasses(activeItemId === 'dashboard', collapsed)}
                    />

                    {/* Аналитика и отчеты - родительский элемент с вложенными */}
                    <MenuItem
                        id="analytics"
                        label="Аналитика и отчеты"
                        icon={createIcon(ChartBarIcon)}
                        className={menuItemClasses(isAnalyticsActive, collapsed)}
                    >
                        <MenuItem
                            id="analytics-indicators"
                            label="Основные метрики"
                            className={menuItemClasses(activeItemId === 'analytics-indicators', collapsed)}
                        />
                        <MenuItem
                            id="analytics-statistics"
                            label="Статистика"
                            className={menuItemClasses(activeItemId === 'analytics-statistics', collapsed)}
                        />
                    </MenuItem>

                    {/* Пользователи */}
                    <MenuItem
                        id="users"
                        label="Пользователи"
                        icon={createIcon(UsersIcon)}
                        className={menuItemClasses(activeItemId === 'users', collapsed)}
                    />

                    {/* Документы */}
                    <MenuItem
                        id="documents"
                        label="Документы"
                        icon={createIcon(DocumentIcon)}
                        className={menuItemClasses(activeItemId === 'documents', collapsed)}
                    />

                    {/* Настройки */}
                    <MenuItem
                        id="settings"
                        label="Настройки"
                        icon={createIcon(Cog6ToothIcon)}
                        className={menuItemClasses(activeItemId === 'settings', collapsed)}
                    />
                </SideMenu>
            </div>

            {/* Фиксированная кнопка сворачивания внизу */}
            <div className="p-4 border-t border-gray-200 flex-shrink-0">
                {customToggleButton({ collapsed, onToggle: toggleCollapse })}
            </div>
        </div>
    );
};

export const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className="flex h-screen bg-gray-50">
            {/* Боковое меню */}
            <StyledSideMenu />

            {/* Основной контент */}
            <div className="flex-1 overflow-auto">
                {children}
            </div>
        </div>
    );
};