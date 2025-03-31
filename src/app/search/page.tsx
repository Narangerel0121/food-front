import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronLeft } from "lucide-react"

export const Search = () => {
    return (
        <div className="grid grid-cols-3 relative w-screen h-screen">
      <div className="col-span-1 mt-80 mx-auto">
        <Button variant="outline" size="icon" className="mb-6">
          <ChevronLeft />
        </Button>
        <div className="gap-1 mb-6">
          <h1 className="font-semibold text-2xl">Create your account</h1>
          <p className="font-normal text-base text-gray-500">Sign up to explore your favorite dishes</p>
        </div>
        <Input type="email" placeholder="Enter your email address" className="focus:outline-none" />
        <br></br>
        <Button className="mb-6 w-full">Let's go</Button>
        <div className="flex gap-2 items-center">
          <p className="text-gray-500">Already have an account?</p>
          <Button variant="link" className="text-blue-500 text-base">Log in</Button>
        </div>
      </div>
      <img className="col-span-2 absolute h-19/20 inset-y-0 right-0 m-auto mx-10" src="/assets/profile.svg" />
    </div>
    )
}