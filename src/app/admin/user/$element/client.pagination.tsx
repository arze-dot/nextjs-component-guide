'use client'
import { useRouter } from "next/navigation";

const CE_Pagination = ({ page }: { page?: string | string[] }) => {
    const route = useRouter();

    const onPrev = () => {
        route.push('/admin/user?page=' + (parseInt(page ? page.toString() : '0') - 1))
    }

    const onNext = () => {
        route.push('/admin/user?page=' + (parseInt(page ? page.toString() : '0') + 1))
    }


    return (
        <div className="flex flex-row gap-3 mt-3 items-center justify-center">
            <button className="bg-blue-500 p-2 px-6 rounded-md" onClick={() => onPrev()}>
                Prev
            </button>
            {page}
            <button className="bg-blue-500 p-2 px-6 rounded-md" onClick={() => onNext()}>
                Next
            </button>
        </div>
    )
}

export default CE_Pagination;