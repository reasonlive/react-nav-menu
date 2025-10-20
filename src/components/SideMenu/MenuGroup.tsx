import { ReactNode, FC } from 'react';
import { useSideMenu } from './SideMenuContext';

interface MenuGroupProps {
    /** Заголовок группы */
    title?: string;
    /** Дочерние элементы */
    children: ReactNode;
    /** Классы */
    className?: string;
}

export const MenuGroup: FC<MenuGroupProps> = ({ title, children , className}) => {
    const { isMobile} = useSideMenu();
    let defaultClasses = `flex-1 overflow-y-auto py-4`;

    if (isMobile) {
        defaultClasses = `flex items-center justify-between p-2`;
    }

    return (
        <div aria-label={title} className={className ?? defaultClasses}>
            {children}
        </div>
    );
};