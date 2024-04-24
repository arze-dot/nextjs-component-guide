'use server'

import CE_MenuItem from "./client.menu.item"

export default async function SE_Sidebar() {
    const menu = [
        'User Management',
        'Outlet',
        'Order'
    ]
    return (
        <div className="w-[300px] border-r shadow-sm ">
            <div className="w-full h-[70px] border-b shadow-sm flex items-center justify-center">
                LOGO
            </div>
            <div className="flex flex-col items-start justify-start gap-7 p-[30px]">
                {
                    menu.map((item: string, index: number) => {
                        return (
                            <CE_MenuItem>
                                {item}
                            </CE_MenuItem>
                        )
                    })
                }
            </div>
        </div>
    )
}