import { Plus } from "lucide-react"
import { Button } from "../ui/button"
import { Card } from "../ui/card"
import { nanoid } from 'nanoid'
import { DialogDemo } from "./DialogDemo"

const data = [
    {
        category: "Deserts",
        types: [
            {
                image: "/assets/food1.png",
                foodName: "Choco",
                price: "$1.2",
                ingredients: "Choco & strawberry",
                id: nanoid()
            },
            {
                image: "/assets/food1.png",
                foodName: "Fish",
                price: "$1.2",
                ingredients: "Milk & ice-cream",
                id: nanoid()
            },
        ]
    },
    {
        category: "Sea food",
        types: [
            {
                image: "/assets/food1.png",
                foodName: "Orange",
                price: "$1.2",
                ingredients: "Oat & orange",
                id: nanoid()
            },
            {
                image: "/assets/food1.png",
                foodName: "Burger",
                price: "$1.2",
                ingredients: "Banana & choco",
                id: nanoid()
            },
        ]
    },

]
type Food = {
    category: string,
    types: Types
}

type Types = {
    image: string;
    foodName: string;
    price: string;
    ingredients: string;
    id: string
}[]

const Info = ({ types }: { types: Types }) => {
    return (
        <div className="grid grid-cols-3">
            {
                types.map((type) => {
                    return (
                        <Card className="w-100 h-85 p-4">
                            <div className="relative">
                                <img src={`${type.image}`} className="h-52 w-90 object-cover rounded-xl" />
                                <DialogDemo image={type.image} foodName={type.foodName} price={type.price} ingredients={type.ingredients}/>
                                {/* <Button variant="outline" size="icon" className="mb-6 rounded-full absolute inset-y-40 right-5">
                                    <Plus size={16} color="#cf3030" />
                                </Button> */}
                            </div>
                            <div className="mb-2 pr-2">
                                <div className="flex justify-between">
                                    <h3 className="text-red-500 text-2xl font-semibold">{type.foodName}</h3>
                                    <p className="text-lg font-semibold">{type.price}</p>
                                </div>
                                <p className="font-normal text-sm">{type.ingredients}</p>
                            </div>
                        </Card>
                    )
                })
            }
        </div>
    )
}

const Menu = ({ category }: { category: Food }) => {
    console.log(category.category, "category")
    return (
        <div>
            <div className="mx-22 pt-20">
                <h1 className="font-semibold text-3xl mb-14 text-white">{category.category}</h1>
                <Info types={category.types}></Info>
            </div>

        </div>
    )
}
export const Try = () => {
    const categories = [];
    for (let i = 0; i < data.length; i++) {
        categories.push(<Menu key={data[i].category} category={data[i]}></Menu>)
    }
    return (
        <div>
            {categories}
        </div>
    )
}

{/* <div className="grid grid-cols-3">
    <Card className="w-100 h-85 p-4">
        <div className="relative">
            <img src="/assets/food1.png" className="h-52 w-90 object-cover rounded-xl" />
            <Button variant="outline" size="icon" className="mb-6 rounded-full absolute inset-y-40 right-5">
                <Plus size={16} color="#cf3030" />
            </Button>
        </div>
        <div className="mb-2 pr-2">
            <div className="flex justify-between">
                <h3 className="text-red-500 text-2xl font-semibold">Finger food</h3>
                <p className="text-lg font-semibold">$12,3</p>
            </div>
            <p className="font-normal text-sm">Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar</p>
        </div>
    </Card>
</div> */}