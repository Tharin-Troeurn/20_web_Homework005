
"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SelectCategory({ bookCategory, cartoonCategory }) {
    const pathname = usePathname()
    // console.log("bookCategoryjjj : ", bookCategory)
    // console.log("cartoonCategorykk : ", cartoonCategory)
    return (
        <>
            <div className={`${pathname === "/" ? "hidden" : "flex"}`}>
                <div className={`group relative cursor-pointer py-1
                    
                    `}>
                    <div className="flex items-center justify-between space-x-5 bg-[#F5F7F8] px-4 rounded-xl">
                        <Link
                            href={"/"}
                            className="menu-hover my-2 py-1 text-base font-medium text-[#B9B9B9] lg:mx-4"

                        >
                            Select a category
                        </Link>
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </span>
                    </div>
                    <div className="invisible absolute z-50 flex w-full flex-col bg-white py-1 px-4 text-gray-800 shadow-xl group-hover:visible rounded-lg">
                        {
                            pathname === "/book-categories" ?
                                bookCategory.payload.map((item) => (
                                    <Link key={item.id} href={"/"} className="my-1 text-sm block border-b border-gray-100  text-gray-500 hover:text-black">
                                        {item.book_cate_name}
                                    </Link>
                                ))
                                :
                                cartoonCategory.payload.map((item) => (
                                    <Link key={item.id} href={"/"} className="my-1 text-sm block border-b border-gray-100  text-gray-500 hover:text-black">
                                        {item.cartoon_genre}
                                    </Link>
                                ))
                        }
                    </div>
                </div>
            </div>

        </>
    )
}