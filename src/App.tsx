import { FC, ReactNode } from 'react';

import {
    HomeIcon,
    UsersIcon,
    ChartBarIcon,
    DocumentIcon
} from '@heroicons/react/24/outline';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './MainLayout';

// Компонент Page для обертки контента
const Page: FC<{ title: string; children: ReactNode }> = ({ title, children }) => (
    <div className="p-6 space-y-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{title}</h1>
            {children}
        </div>
    </div>
);

const App: FC = () => {
    return (
        <Router>
            <MainLayout>
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

                    {/* Аналитика - родительская страница */}
                    <Route path="/analytics" element={
                        <Page title="Аналитика и отчеты">
                            <div className="space-y-6">
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

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                                        <h3 className="font-semibold text-gray-800 mb-4">Обзор аналитики</h3>
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-600">Всего посещений</span>
                                                <span className="font-semibold text-blue-600">45,678</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-600">Уникальные пользователи</span>
                                                <span className="font-semibold text-green-600">23,456</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-600">Среднее время на сайте</span>
                                                <span className="font-semibold text-purple-600">5:23</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                                        <h3 className="font-semibold text-gray-800 mb-4">Быстрый доступ</h3>
                                        <div className="space-y-2">
                                            <button className="w-full text-left p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                                                <span className="font-medium text-blue-700">Основные метрики</span>
                                                <p className="text-sm text-blue-600 mt-1">Детальная аналитика производительности</p>
                                            </button>
                                            <button className="w-full text-left p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
                                                <span className="font-medium text-green-700">Статистика</span>
                                                <p className="text-sm text-green-600 mt-1">Ключевые показатели эффективности</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Page>
                    } />

                    {/* Вложенные страницы аналитики */}
                    <Route path="/analytics/indicators" element={
                        <Page title="Основные метрики">
                            <div className="space-y-6">
                                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                                    <h4 className="font-semibold text-blue-800 mb-2 text-lg">Основные метрики</h4>
                                    <p className="text-blue-600">Графики и диаграммы производительности</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                                        <h5 className="font-semibold text-gray-800 mb-2">Посещения</h5>
                                        <p className="text-2xl font-bold text-blue-600">1,234</p>
                                        <p className="text-sm text-green-600 mt-1">+12% за неделю</p>
                                    </div>
                                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                                        <h5 className="font-semibold text-gray-800 mb-2">Конверсия</h5>
                                        <p className="text-2xl font-bold text-green-600">24.5%</p>
                                        <p className="text-sm text-green-600 mt-1">+2.1% за месяц</p>
                                    </div>
                                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                                        <h5 className="font-semibold text-gray-800 mb-2">Доход</h5>
                                        <p className="text-2xl font-bold text-purple-600">$12,345</p>
                                        <p className="text-sm text-green-600 mt-1">+8% за месяц</p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                                    <h5 className="font-semibold text-gray-800 mb-4">Динамика метрик</h5>
                                    <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center">
                                        <p className="text-gray-500">График динамики основных метрик</p>
                                    </div>
                                </div>
                            </div>
                        </Page>
                    }/>

                    <Route path="/analytics/statistics" element={
                        <Page title="Статистика">
                            <div className="space-y-6">
                                <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                                    <h4 className="font-semibold text-green-800 mb-2 text-lg">Статистика</h4>
                                    <p className="text-green-600">Ключевые показатели эффективности</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white rounded-lg p-6 border border-gray-200">
                                        <h5 className="font-semibold text-gray-800 mb-4">Тенденции</h5>
                                        <div className="space-y-3">
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Рост пользователей</span>
                                                <span className="font-semibold text-green-600">+15%</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Время на сайте</span>
                                                <span className="font-semibold text-blue-600">+8%</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Глубина просмотра</span>
                                                <span className="font-semibold text-purple-600">+12%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-lg p-6 border border-gray-200">
                                        <h5 className="font-semibold text-gray-800 mb-4">Активность</h5>
                                        <div className="space-y-3">
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Новые сессии</span>
                                                <span className="font-semibold text-purple-600">892</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Отказы</span>
                                                <span className="font-semibold text-red-600">12%</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Возвраты</span>
                                                <span className="font-semibold text-green-600">45%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                                    <h5 className="font-semibold text-gray-800 mb-4">Статистика по устройствам</h5>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                                            <p className="text-2xl font-bold text-blue-600">62%</p>
                                            <p className="text-sm text-gray-600 mt-1">Мобильные</p>
                                        </div>
                                        <div className="text-center p-4 bg-green-50 rounded-lg">
                                            <p className="text-2xl font-bold text-green-600">28%</p>
                                            <p className="text-sm text-gray-600 mt-1">Десктоп</p>
                                        </div>
                                        <div className="text-center p-4 bg-purple-50 rounded-lg">
                                            <p className="text-2xl font-bold text-purple-600">10%</p>
                                            <p className="text-sm text-gray-600 mt-1">Планшеты</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Page>
                    }/>

                    {/* Пользователи */}
                    <Route path="/users" element={
                        <Page title="Управление пользователями">
                            <div className="space-y-6">
                                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                                    <p className="text-gray-700 mb-4">Управление пользователями системы, ролями и правами доступа.</p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                                            <h4 className="font-semibold text-blue-800 mb-2">Всего пользователей</h4>
                                            <p className="text-2xl font-bold text-blue-600">1,247</p>
                                        </div>
                                        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                                            <h4 className="font-semibold text-green-800 mb-2">Активных</h4>
                                            <p className="text-2xl font-bold text-green-600">892</p>
                                        </div>
                                        <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                                            <h4 className="font-semibold text-purple-800 mb-2">Новых за месяц</h4>
                                            <p className="text-2xl font-bold text-purple-600">45</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                                    <h3 className="font-semibold text-gray-800 mb-4">Последние действия</h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                            <span className="text-gray-700">Новый пользователь зарегистрирован</span>
                                            <span className="text-sm text-gray-500">2 минуты назад</span>
                                        </div>
                                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                            <span className="text-gray-700">Обновлены права доступа</span>
                                            <span className="text-sm text-gray-500">1 час назад</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Page>
                    } />

                    {/* Документы */}
                    <Route path="/documents" element={
                        <Page title="Документы и файлы">
                            <div className="space-y-6">
                                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                                    <p className="text-gray-700 mb-4">Документы и файлы организации. Система управления документами.</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                                            <h4 className="font-semibold text-blue-800 mb-2">Всего документов</h4>
                                            <p className="text-2xl font-bold text-blue-600">2,456</p>
                                        </div>
                                        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                                            <h4 className="font-semibold text-green-800 mb-2">Загружено за месяц</h4>
                                            <p className="text-2xl font-bold text-green-600">127</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                                    <h3 className="font-semibold text-gray-800 mb-4">Недавние документы</h3>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                                            <div className="flex items-center space-x-3">
                                                <DocumentIcon className="w-5 h-5 text-gray-400" />
                                                <span className="text-gray-700">Отчет за Q4 2025.pdf</span>
                                            </div>
                                            <span className="text-sm text-gray-500">2 дня назад</span>
                                        </div>
                                        <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                                            <div className="flex items-center space-x-3">
                                                <DocumentIcon className="w-5 h-5 text-gray-400" />
                                                <span className="text-gray-700">Презентация компании.pptx</span>
                                            </div>
                                            <span className="text-sm text-gray-500">1 неделю назад</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Page>
                    } />

                    {/* Настройки */}
                    <Route path="/settings" element={
                        <Page title="Настройки системы">
                            <div className="space-y-6">
                                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                                    <p className="text-gray-700 mb-4">Настройки системы и параметры конфигурации приложения.</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                                            <h4 className="font-semibold text-blue-800 mb-2">Общие настройки</h4>
                                            <p className="text-sm text-blue-600">Основные параметры системы</p>
                                        </div>
                                        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                                            <h4 className="font-semibold text-green-800 mb-2">Безопасность</h4>
                                            <p className="text-sm text-green-600">Настройки безопасности и доступа</p>
                                        </div>
                                        <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                                            <h4 className="font-semibold text-purple-800 mb-2">Уведомления</h4>
                                            <p className="text-sm text-purple-600">Настройки оповещений</p>
                                        </div>
                                        <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                                            <h4 className="font-semibold text-orange-800 mb-2">Интеграции</h4>
                                            <p className="text-sm text-orange-600">Внешние сервисы и API</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                                    <h3 className="font-semibold text-gray-800 mb-4">Системная информация</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="p-3 bg-gray-50 rounded-lg">
                                            <span className="text-gray-600">Версия системы</span>
                                            <p className="font-medium text-gray-800">v1.0.0</p>
                                        </div>
                                        <div className="p-3 bg-gray-50 rounded-lg">
                                            <span className="text-gray-600">Последнее обновление</span>
                                            <p className="font-medium text-gray-800">26.10.2025</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Page>
                    } />
                </Routes>
            </MainLayout>
        </Router>
    );
};

export default App;