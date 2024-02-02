import { CustomerNavbar } from "@/components/NavBar"

export default function Layout({children}:{children:React.ReactNode}) {
    return (
        <div className="flex flex-col items-center justify-center min-w-screen">
            <div className="flex flex-col items-center max-w-lg w-full h-screen">
                <CustomerNavbar/>
                {children}
            </div>

        </div>
    )
}