import {createContext} from 'react';
import {SideMenuContextType} from "./types";

export const SideMenuContext = createContext<SideMenuContextType | undefined>(undefined);