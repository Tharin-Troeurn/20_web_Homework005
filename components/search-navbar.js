"use client"

import { usePathname } from "next/navigation"

export default function SearchNavbar(){
    const pathname = usePathname();
    console.log("pathname : ", pathname)

    return (
        <>
            <form action={pathname} className="relative">
                <input
                    className="appearance-none border-2 pl-10 border-gray-300  transition-colors rounded-3xl w-full py-3 px-5 text-gray-800 leading-tight focus:outline-none  focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Search anything you want to"
                    name="search"
                />
                
                <div className="absolute left-0 inset-y-0 flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-3 text-gray-400 hover:text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>
            </form>
        </>
    )
}