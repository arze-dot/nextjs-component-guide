'use server'

import CE_Pagination from "./$element/client.pagination";
import SE_Table from "./$element/server.table";

export default async function UserManagement({ searchParams }: {
    searchParams?: { [key: string]: string | string[] | undefined };
}) {

    return (
        <div className="p-5 w-full ">
            Admin User Management
            <SE_Table page={searchParams?.page} />
            <CE_Pagination page={searchParams?.page} />
        </div>
    )
}