import { useContext, createContext } from 'react';
import { SideMenuContextType } from './types';

export const SideMenuContext = createContext<SideMenuContextType | undefined>(undefined);

export const useSideMenu = (): SideMenuContextType => {
    const context = useContext(SideMenuContext);
    if (!context) {
        throw new Error('useSideMenu must be used within a SideMenuProvider');
    }

    return context;
};