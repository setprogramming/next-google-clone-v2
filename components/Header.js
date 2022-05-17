import Avatar from "./Avatar";
import { ViewGridIcon } from "@heroicons/react/solid"


export default function Header() {
  return (
    <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* left */}
        <div className="flex space-x-4 items-center">
            <p className="link">About</p>
            <p className="link">Store</p>
        </div>

        {/* right */}
        <div className="flex space-x-4 items-center">
            <p className="link">Gmail</p>
            <p className="link">Images</p>

            {/* Icon */}
            <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

            {/* Avatar */}
            <Avatar url="https://cdn-thumbs.imagevenue.com/76/8e/0b/ME14U642_t.jpg" />
        </div>
    </header>
  )
}
