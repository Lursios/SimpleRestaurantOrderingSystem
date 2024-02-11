import Dishes from "@/components/customerPanel/Dishes";
import Menus from "@/components/customerPanel/Menus";
import { LuSoup } from "react-icons/lu";
import { PiIceCreamLight } from "react-icons/pi";
// import Order from "./OrderButton";
// import { fetchOrders,fetchMenus,fetchOrder} from "../../../service/dbService";
// import OrderSection from "./OrderSection";
// import TableSection from "./TableSection";

// async function getOrders() {
//     const orders = await fetchOrders();
//     console.log(orders);
// };

// export async function getOrderId() {
    
//     // Later for performance optimziation generate 5 number random then query based on that and return the null indexes so we query the database once and return 5 or more result for each call
//     // var arr = [];  
//     // while(arr.length < 5){
//     //     var r = Math.floor(Math.random() * 100) + 1;
//     //     if(arr.indexOf(r) === -1) arr.push(r);
//     // }
//     let notUnique = true ;
//     let id:String = "" ;

//     while (notUnique) {
//         id = (Math.floor(Math.random()*99999) + 1).toString(); 
//         const result = await fetchOrder(id);
//         if (result === "Not Found") {
//             notUnique = false;
//         } 
//     }
//     return id;
// }


// async function createOrder() {
//     "use server"
//     console.log("order has been created");
// }

// async function getValues() {
//     "use server"
//     console.log("from server values")
//     return "this works too"
// }


// export default async function OrderApp() {
//     const Menus = await fetchMenus();
//     return ( 
//         <OrderSection
//         Menus={Menus}
//         />
//     )
// }


const Order = ()=> {

  const dishesIconSize = "3rem"
  const fetchedMenus = [
    {name:"Bakmi",price:"12k"},
    {name:"Bakmi",price:"15k"},
    {name:"Bakmi",price:"Yes"},
    {name:"Bakmi",price:"Yes"},
    {name:"Bakmi",price:"Yes"},
  ]

  const fetchedDishes = [
    {name:"Soup",imgLoc: <LuSoup size={dishesIconSize}/>},
    {name:"Main Dish",imgLoc: <LuSoup size={dishesIconSize}/>},
    {name:"Dessert",imgLoc: <PiIceCreamLight size={dishesIconSize}/>},
    {name:"Drinks",imgLoc: <LuSoup size={dishesIconSize}/>},
    {name:"Snacks",imgLoc: <LuSoup size={dishesIconSize}/>}
  ]

  return (
    <div className="flex flex-col gap-20 mt-4 w-full">
      <Dishes
        dishes = {fetchedDishes}
      />
      <div className="grid grid-cols-3 w-full text-center">
        {fetchedMenus.map((menu,index)=> (
          <Menus
            key={`${index}-${menu.name}`}
            menuName = {menu.name}
            menuPrice = {menu.price}
          />
        ))}
      </div>
      <div>
        this is for the floating payment
      </div>
    </div>

  )
}

export default Order;