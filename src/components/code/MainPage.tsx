import { Plus } from "lucide-react"
import { Button } from "../ui/button"
import { Card } from "../ui/card"

const Categories = [
    {
        categoryName: "Deserts",
        foods: [
            {
                foodImage: "/assets/food1.png",
                foodName: "Choco",
                foodPrice: "$1.2",
                foodIgredients: "Choco & strawberry",
            },
            {
                foodImage: "/assets/food1.png",
                foodName: "Fish",
                foodPrice: "$1.2",
                foodIgredients: "Milk & ice-cream",
            },
        ]
    },
    {
        categoryName: "Sea food",
        foods: [
            {
                foodImage: "/assets/food1.png",
                foodName: "Orange",
                foodPrice: "$1.2",
                foodIgredients: "Oat & orange",
            },
            {
                foodImage: "/assets/food1.png",
                foodName: "Burger",
                foodPrice: "$1.2",
                foodIgredients: "Banana & choco",
            },
        ]
    },

]

export const MainPage = () => {

    return (
        <div className="mx-22 pt-20">
            <h1 className="font-semibold text-3xl mb-14 text-white">Appetizers</h1>
            <div className="grid grid-cols-3">
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
            </div>
        </div>
    )
}