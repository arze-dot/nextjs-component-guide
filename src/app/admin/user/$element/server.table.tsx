'use server'

const SE_Table = async ({ page }: { page?: string | string[] }) => {
    return (
        <div className="w-full h-full p-5 border-2 rounded-md">
            Table {page ? page : 0}
        </div>
    )
}

export default SE_Table;