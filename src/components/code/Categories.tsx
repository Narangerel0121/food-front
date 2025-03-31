import { nanoid } from "nanoid"

const categories = [
    "Salads",
    "Pizzas",
    "Lunch Favorites",
    "Main dishes",
    "Side Dish",
    "Brunch",
    "Desserts",
    "Breakfast"
]

export const Categories = () => {
    return (
        <div key={nanoid()}>
            {categories.map((category) => {
                return(
                    <div>{category}</div>
                )
            })}
        </div>
    )
}