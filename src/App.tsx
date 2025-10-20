import { FC, ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import {
    SideMenu,
    NavigationPanel,
    useSideMenu,
    MenuHeader,
    ToggleIcon
} from './components/SideMenu';

import {
    HomeIcon,
    UsersIcon,
    Cog6ToothIcon,
    ChartBarIcon,
    DocumentIcon
} from '@heroicons/react/24/outline';

import {
    toggleButtonClasses,
    menuHeaderClasses,
    menuItemsClasses,
    navigationPanelClasses
} from "./tailwind";
import {MenuItemProps} from "./components/SideMenu/types";


// Данные для навигационной панели
const menuItems: MenuItemProps[] = [
    {
        id: 'home',
        icon: HomeIcon,
        label: 'Главная',
        path: '/',
        color: 'text-blue-600',
        iconSize: 'w-5 h-5',
    },
    {
        id: 'analytics',
        icon: ChartBarIcon,
        label: 'Аналитика',
        path: '/analytics',
        color: 'text-green-600',
        iconSize: 'w-5 h-5',
        children: [
            {
                id: 'indicators',
                label: 'Основные метрики',
                path: '/analytics/indicators',
                color: 'text-green-600'
            },
            {
                id: 'statistics',
                label: 'Статистика',
                path: '/analytics/statistics',
                color: 'text-green-600'
            }
        ]
    },
    {
        id: 'users',
        icon: UsersIcon,
        label: 'Пользователи',
        path: '/users',
        color: 'text-purple-600',
        iconSize: 'w-5 h-5'
    },
    {
        id: 'documents',
        icon: DocumentIcon,
        label: 'Документы',
        path: '/documents',
        color: 'text-orange-600',
        iconSize: 'w-5 h-5'
    },
    {
        id: 'settings',
        icon: Cog6ToothIcon,
        label: 'Настройки',
        path: '/settings',
        color: 'text-gray-600',
        iconSize: 'w-5 h-5'
    }
];


// Компонент страницы (не зависит от контекста)
const Page: FC<{ title: string; children?: ReactNode }> = ({
       title,
       children
   }) => (
    <div className="p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200">{title}</h1>
        <div className="text-gray-600 leading-relaxed">
            {children}
        </div>
    </div>
);

// Компонент для отображения контента
const ContentArea: FC<{ children: ReactNode }> = ({ children }) => {
    const { isMobile, isMobileOpen, toggleMobile } = useSideMenu();

    return (
        <div
            className={`
                flex-1
                min-h-screen
                bg-gradient-to-br
                from-gray-50
                to-blue-50
                transition-all
                duration-300
                overflow-auto
                ${isMobile && isMobileOpen ? 'opacity-30 pointer-events-none' : ''}
            `}
            onClick={() => isMobile && isMobileOpen && toggleMobile()}
        >
            <div className={`max-w-7xl mx-auto ${isMobile ? 'mt-10' : ''}`}>
                {children}
            </div>
        </div>
    );
};

// Главный компонент навигации - создает контекст
const NavigationMenu: FC = () => {
    const navigate = useNavigate();
    // Обработчик нажатия на элемент панели
    const handleItemSelect = (item: MenuItemProps) => {
        if (item && item.path) {
            navigate(item.path);
        }
    };

    return (
        <SideMenu
            defaultCollapsed={false}
            mobileBreakpoint={768}
        >
            <div className="flex min-h-screen bg-white">
                {/* Основной элемент навигационного меню */}
                <NavigationPanel
                    className={navigationPanelClasses}
                    items={menuItems}
                    itemsClassName={menuItemsClasses}
                    onSelectHandler={handleItemSelect}
                    header={<MenuHeader
                        title={'Навигация'}
                        className={menuHeaderClasses}
                        buttonIcon={<ToggleIcon/>}
                        buttonClassName={toggleButtonClasses}
                    />}
                />

                {/* Основной контент */}
                <ContentArea>
                    <Routes>
                        <Route path="/" element={
                            <Page title="Главная панель управления">
                                <div className="space-y-6">
                                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                                        <p className="text-lg text-gray-700 mb-4">Добро пожаловать в систему управления!</p>
                                        <p className="text-gray-600">Здесь вы можете управлять всеми аспектами вашего приложения.</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                                            <div className="flex items-center space-x-3 mb-3">
                                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                                    <HomeIcon className="w-6 h-6 text-blue-600" />
                                                </div>
                                                <h3 className="font-semibold text-gray-800">Быстрый старт</h3>
                                            </div>
                                            <p className="text-sm text-gray-600">Начните работу с основных функций системы</p>
                                        </div>

                                        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                                            <div className="flex items-center space-x-3 mb-3">
                                                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                                    <ChartBarIcon className="w-6 h-6 text-green-600" />
                                                </div>
                                                <h3 className="font-semibold text-gray-800">Аналитика</h3>
                                            </div>
                                            <p className="text-sm text-gray-600">Просматривайте статистику и отчеты</p>
                                        </div>

                                        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                                            <div className="flex items-center space-x-3 mb-3">
                                                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                                    <UsersIcon className="w-6 h-6 text-purple-600" />
                                                </div>
                                                <h3 className="font-semibold text-gray-800">Пользователи</h3>
                                            </div>
                                            <p className="text-sm text-gray-600">Управление пользователями и правами доступа</p>
                                        </div>
                                    </div>
                                </div>
                            </Page>
                        } />
                        <Route path="/analytics" element={
                            <Page title="Аналитика и отчеты">
                                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                                    <p className="text-gray-700 mb-4">Здесь отображаются аналитические данные и метрики вашего приложения.</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                                            <h4 className="font-semibold text-blue-800 mb-2">Основные метрики</h4>
                                            <p className="text-sm text-blue-600">Графики и диаграммы производительности</p>
                                        </div>
                                        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                                            <h4 className="font-semibold text-green-800 mb-2">Статистика</h4>
                                            <p className="text-sm text-green-600">Ключевые показатели эффективности</p>
                                        </div>
                                    </div>
                                </div>
                            </Page>
                        } />
                        <Route path="/analytics/indicators" element={
                            <Page title="Основные метрики">
                                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                                    <h4 className="font-semibold text-blue-800 mb-2">Основные метрики</h4>
                                    <p className="text-sm text-blue-600">Графики и диаграммы производительности</p>
                                </div>
                            </Page>
                        }/>

                        <Route path="/analytics/statistics" element={
                            <Page title="Статистика">
                                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                                    <h4 className="font-semibold text-green-800 mb-2">Статистика</h4>
                                    <p className="text-sm text-green-600">Ключевые показатели эффективности</p>
                                </div>
                            </Page>
                        }/>


                        <Route path="/users" element={
                            <Page title="Управление пользователями">
                                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                                    <p className="text-gray-700">Управление пользователями системы, ролями и правами доступа.</p>
                                </div>
                            </Page>
                        } />
                        <Route path="/documents" element={
                            <Page title="Документы и файлы">
                                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                                    <p className="text-gray-700">Документы и файлы организации. Система управления документами.</p>
                                </div>
                            </Page>
                        } />
                        <Route path="/settings" element={
                            <Page title="Настройки системы">
                                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                                    <p className="text-gray-700">Настройки системы и параметры конфигурации приложения.</p>
                                </div>
                            </Page>
                        } />
                    </Routes>
                </ContentArea>
            </div>
        </SideMenu>
    );
};

// Главный компонент приложения
const App: FC = () => {
    return (
        <Router>
            <NavigationMenu />
        </Router>
    );
};

export default App;