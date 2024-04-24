import CE_Header from "./$element/client.header"
import SE_Sidebar from "./$element/server.sidebar"

export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section className="w-screen h-screen bg-white text-black flex">
            {/* Include shared UI here e.g. a header or sidebar */}
            <SE_Sidebar />
            <div className="flex flex-col items-start justify-start flex-1">
                <CE_Header />
                {children}
            </div>
        </section>
    )
}