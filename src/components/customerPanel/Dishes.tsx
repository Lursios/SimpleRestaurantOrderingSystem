import { DishesProps } from "@/interfaces/dishes-type";


const Dishes = ({dishes}:DishesProps)=> {
    return (
        <div className="flex flex-row gap-5 overflow-x-scroll p-1 ">
            {dishes.map((dish,index)=> (
                <div key={index} className="avatar"> 
                    <button className="flex flex-col bg-green-300 hover:bg-green-700 rounded-lg border-green-700 border-solid border-4 text-xl justify-center items-center w-fit p-5"> 
                        <div className="p-2 border-solid border-green-700 border-4 rounded-full">{dish.imgLoc}</div>
                        <h1>{dish.name}</h1>
                    </button>
                </div>

            ))}
        </div>
    )
}

export default Dishes;