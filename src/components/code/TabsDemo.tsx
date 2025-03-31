import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Minus, Plus } from "lucide-react"

export function TabsDemo() {
  return (
   <div className="bg-neutral-700 border rounded-2xl border-black p-8">
     <Tabs defaultValue="account" className="w-[471px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Cart</TabsTrigger>
        <TabsTrigger value="password">Order</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>My cart</CardTitle>
            <CardDescription>
              <div className="flex gap-5">
                <img src="/assets/food1.png" className="w-[124px] h-[120px] mt-3 rounded-2xl" />
                <div>
                  <div>
                    <h1>Sunshine Stackers</h1>
                    <p>Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.</p>
                  </div>
                  <div>
                    <div className="flex justify-around gap-20">
                      <div className="flex gap-3 items-center">
                        <Button className="bg-white text-black rounded-full w-11 h-11"><Minus /></Button>
                        <h3>1</h3>
                        <Button className="bg-white text-black rounded-full w-11 h-11"><Plus /></Button>
                      </div>
                      <p className="font-semibold text-2xl">$122</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">

          </CardContent>
          <CardFooter >
            <Button className="w-full rounded-full bg-white text-red-500 border-red-500">Add food</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Order history</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
    <div className="bg-white w-[471px] h-[276px] rounded-2xl mt-4">
      <h1>Payment info</h1>
     <p>Items<span>-</span></p>
     <p>Shipping<span>-</span></p>
    </div>
   </div>
  )
}

