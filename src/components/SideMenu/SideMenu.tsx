import { FC, useState, useEffect, useCallback } from 'react';
import { SideMenuContext } from './SideMenuContext';
import {MenuItemProps, SideMenuProps} from './types';

export const SideMenu: FC<SideMenuProps> = ({
      children,
      defaultCollapsed = false,
      onCollapseChange,
      mobileBreakpoint = 768,
  }) => {
    const [selectedItem, setSelectedItem] = useState<MenuItemProps | null>(null);
    const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Определение мобильного режима по размеру экрана
    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth <= mobileBreakpoint;
            setIsMobile(mobile);

            // Автоматически сворачиваем меню при переходе в мобильный режим
            if (mobile && !isCollapsed) {
                setIsCollapsed(true);
                onCollapseChange?.(true);
            }

            // Автоматически закрываем мобильное меню при изменении размера
            if (mobile && isMobileOpen) {
                setIsMobileOpen(false);
            }
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, [mobileBreakpoint, isMobileOpen, isCollapsed, onCollapseChange]);

    const handleSetSelectedItem = useCallback((item: MenuItemProps | null) => {
        setSelectedItem(item);

        if (isMobile) {
            setIsMobileOpen(false);
        }
    }, [isMobile]);

    const toggleCollapsed = useCallback(() => {
        if (isMobile) {
            setIsMobileOpen(prev => !prev);
        } else {
            const newCollapsed = !isCollapsed;
            setIsCollapsed(newCollapsed);
            onCollapseChange?.(newCollapsed);
        }
    }, [isCollapsed, isMobile, onCollapseChange]);

    const toggleMobile = useCallback(() => {
        setIsMobileOpen(prev => !prev);
    }, []);

    const contextValue = {
        selectedItem,
        setSelectedItem: handleSetSelectedItem,
        isCollapsed: isMobile ? true : isCollapsed,
        toggleCollapsed,
        isMobileOpen,
        toggleMobile,
        isMobile,
    };

    return (
        <SideMenuContext.Provider value={contextValue}>
            {children}
        </SideMenuContext.Provider>
    );
};