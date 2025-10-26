import {useCallback, useContext, useState} from 'react';
import { SideMenuContext } from './SideMenuContext';

export const useSideMenu = () => {
    const context = useContext(SideMenuContext);
    if (context === undefined) {
        throw new Error('useSideMenu must be used within a SideMenu');
    }
    return context;
};

export const useSideMenuState = () => {
    const [activeItemId, setActiveItemId] = useState<string>();
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapse = useCallback(() => {
        setCollapsed(prev => !prev);
    }, []);

    return {
        activeItemId,
        setActiveItemId,
        collapsed,
        toggleCollapse,
    };
};