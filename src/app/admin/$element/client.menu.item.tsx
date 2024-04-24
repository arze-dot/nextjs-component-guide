'use client'

import { ReactNode } from "react";

type MenuItemProps = {
    children: ReactNode
}

const CE_MenuItem = ({ children }: MenuItemProps) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default CE_MenuItem;