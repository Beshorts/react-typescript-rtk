import React from 'react';

interface Props {
    children: React.ReactNode,
}

const Menu = ({children}: Props) => {
    return(
        <div className="menu">
            <div className="menuItem">
                {children}
            </div>
        </div>
    )
};

export default Menu;