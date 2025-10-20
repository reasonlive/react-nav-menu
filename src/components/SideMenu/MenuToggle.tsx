// MenuToggle.tsx
import { FC, ReactNode } from 'react';
import { useSideMenu } from './SideMenuContext';

interface MenuToggleProps {
    /** Дочерние элементы (иконка) */
    children: ReactNode;
    /** Основные классы */
    className?: string;
}

export const MenuToggle: FC<MenuToggleProps> = ({
      children,
      className = ''
  }) => {
    const { toggleCollapsed, toggleMobile, isMobile } = useSideMenu();

    const handleClick = () => {
        if (isMobile) {
            toggleMobile();
        } else {
            toggleCollapsed();
        }
    };

    return (
        <button
            onClick={handleClick}
            className={className}
        >
            {children}
        </button>
    );
};