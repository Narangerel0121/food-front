import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Button } from "../ui/button"
import { DialogFooter, DialogHeader } from "../ui/dialog"
import { Minus, Plus } from "lucide-react"

export function DialogDemo(props) {
    console.log(props, "dialog")
    return (
        <Dialog >
            <DialogTrigger asChild>
                <Button variant="outline" size="icon" className="mb-6 rounded-full absolute inset-y-40 right-5">
                    <Plus size={16} color="#cf3030" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <div className="flex gap-10">
                <div>
                    <img src={`${props.image}`} />
                </div>
                <DialogHeader>
                    <DialogTitle>{props.foodName}</DialogTitle>
                    <DialogDescription>
                       {props.ingredients}
                    </DialogDescription>
                    <div className="flex justify-around">
                        <div>
                            <p>total price</p>
                            <p>{props.price}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <Button className="rounded-full"><Minus /></Button>
                            <p>1</p>
                            <Button className="rounded-full"><Plus /></Button>
                        </div>
                    </div>
                </DialogHeader>
                </div>

                <DialogFooter>
                    <Button type="submit">Add to chart</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
