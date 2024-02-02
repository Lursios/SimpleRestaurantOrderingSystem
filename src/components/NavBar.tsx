import Link from "next/link"
import Button from "./Button"
import { deleteMenus,deleteOrders } from "../../service/dbService"
import { redirect } from "next/navigation";
import { MdTableRestaurant, MdMenuBook } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { FaFileInvoiceDollar } from "react-icons/fa6";


// async function reset() {
//     "use server"
//     const resultMenus = await deleteMenus();
//     const resultOrder = await deleteOrders();
//     console.log("Deleted All Menus & Orders")
//     redirect("/menu")
// }

// export default function NavBar() {
//     return (
//     <div className="navbar center bg-base-100">
//         <div className="flex justify-evenly w-full">
//             <Link className="btn btn-ghost normal-case text-xl" href="/menu"><h3>Menu</h3></Link>
//             <Link className="btn btn-ghost normal-case text-xl" href="/order"><h3>Orders</h3></Link>
//             <Link className="btn btn-ghost normal-case text-xl" href="/dapur"><h3>Kitchen</h3></Link>
//             <Link className="btn btn-ghost normal-case text-xl" href="/kasir"><h3>Cashier</h3></Link>            
//         </div>
//         <div className="flex-none w-24">
//             <Button
//             name = {"reset"}
//             handleClick={reset}
//             />
//         </div>
//     </div>
//     )
// }



const CustomerNavbar = ()=> {
    return (
        <div className="flex flex-row items-center justify-center w-full bg-green-500 gap-20">
            <h1>Logo Menu</h1>
            <Link href={"/adminPanel"}>CabeIjoGroupLogo</Link>
            <h1>SearchLogo</h1>
        </div>
    )
}



const AdminNavbar = ()=>{

    const logoSize = "1.5rem"

    const links = [
        {href:"/adminPanel/tables", logo:<MdTableRestaurant size={logoSize}/>,label:"Tables"},
        {href:"/adminPanel/menus", logo:<MdMenuBook size={logoSize}/>, label:"Menus"},
        {href:"/adminPanel/orders",logo:<FaFileInvoiceDollar size={logoSize}/>,label:"Orders"},
        {href:"/adminPanel/admins",logo:<GrUserAdmin size={logoSize}/>, label:"Admins"},
    ]
    return (
        <div className="flex flex-col gap-7 items-center bg-green-400 h-screen p-2 pt-4 rounded-xl">
            <Link href={"/"} className="text-3xl">D</Link>
           {links.map((link,index)=> (
            <Link className="hover:bg-green-700 p-4 rounded-xl" key={`${link.label}-${index}`} href={link.href}>{link.logo}</Link>
           ))}
        </div>
    )
}


export {AdminNavbar,CustomerNavbar}