
type MenusProps = {
    menuName:string;
    menuPrice:string;
}

const Menus = ({menuName,menuPrice}:MenusProps)=> {
    return (
        <div className="bg-white text-black">
            <h1>{menuName}</h1>
            <h1>{menuPrice}</h1>
        </div>
    )
}


export default Menus;