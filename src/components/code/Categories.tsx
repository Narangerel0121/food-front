import { BASE_URL } from "@/app/constants"
import { nanoid } from "nanoid"

export const Categories = async() => {
    const response = await fetch(`${BASE_URL}/with-foods`, {
        headers: {
            "Content-type": "application/json",
        },
    });
    const data = await response.json();
    console.log(data)
        return (
        <div key={nanoid()}>
           {data.map((d) => {
            return(
                <div>{d.categories}</div>
            )
           })}
        </div>
    )
}