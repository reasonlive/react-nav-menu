import { FC } from 'react';
import { SideMenuProps } from './types';
import { SideMenuContext } from './SideMenuContext';

export const SideMenu: FC<SideMenuProps> = ({
  children,
  activeItemId,
  onItemClick = () => {},
  className,
  collapsed = false,
  onCollapseChange,
  renderToggleButton,
}) => {
    const contextValue = {
        activeItemId,
        onItemClick,
        collapsed,
    };

    const toggleCollapse = () => {
        onCollapseChange?.(!collapsed);
    };

    return (
        <SideMenuContext.Provider value={contextValue}>
            <nav aria-label="Side navigation">
                <ul
                    role="menu"
                    aria-orientation="vertical"
                    className={className}
                >
                    {children}
                </ul>

                {renderToggleButton ? renderToggleButton({ collapsed, onToggle: toggleCollapse }) : ''}
            </nav>
        </SideMenuContext.Provider>
    );
};