import { AdminNavbar } from "@/components/NavBar";

export default function Layout({children}:{children:React.ReactNode}) {
    return (
        <div className="flex flex-row">
            <AdminNavbar/>
            {children}
        </div>
    )
}