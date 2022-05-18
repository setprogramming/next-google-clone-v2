import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid"
import Image from "next/image"
import { useRouter } from "next/router"
import { useRef } from "react"
import Avatar from "./Avatar"
import SearchHeaderOptions from "./SearchHeaderOptions"

export default function SearchHeader() {
    const router = useRouter()
    const searchInputRef = useRef(null)

    const search = e => {
        e.preventDefault()
        const term = searchInputRef.current.value

        if(!term) return

        router.push(`/search?term=${term}`)
    }
    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <Image
                    src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                    height={40}
                    width={120}
                    className="cursor-pointer"
                    onClick={() => router.push('/')}
                />
                <form className="flex px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center flex-grow">
                    <input ref={searchInputRef} className="flex-grow w-full focus:outline-none" type="text" />
                    <XIcon className="h-7 text-gray-500 sm:mr-3 cursor-pointer transition duration-100 transform hover:scale-110"
                        onClick={() => (searchInputRef.current.value = "")}
                    />
                    <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
                    <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
                    <button hidden type="submit" onClick={search}>Search</button>
                </form>
                <Avatar className="ml-auto" url="https://cdn-thumbs.imagevenue.com/76/8e/0b/ME14U642_t.jpg" />
            </div>
            
            <SearchHeaderOptions />
        </header>
    )
}
