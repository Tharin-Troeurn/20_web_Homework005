
"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SelectCategory({ bookCategory, cartoonCategory }) {
    const pathname = usePathname()
    // console.log("bookCategory: ", bookCategory)
    // console.log("cartoonCategory : ", cartoonCategory)
    const router = useRouter();
    const searchParams = useSearchParams();
    
    const handleCategoryChange = (categoryId) => {
        const params = new URLSearchParams(searchParams.toString());
        // console.log("params  : ", params)
        // params.set("genre", categoryId); // Update category in URL
        // router.push(`${pathname}?${params.toString()}`); 
        
    if (pathname === "/book-categories/search") {
        params.set("query", categoryId);
        router.push(`${pathname}?${params.toString()}`);
    } else {
        
        params.set("genre", categoryId);
        router.push(`${pathname}?${params.toString()}`);
    }
    };
    return (
        <>
            <div className={`${pathname === "/" ? "hidden" : "flex"}`}>
                <div className={`group relative cursor-pointer `}>
                    <div className="flex items-center justify-between space-x-5 bg-[#F5F7F8] px-2 rounded-xl">
                        <div
                            className="menu-hover my-2 text-base font-medium text-[#B9B9B9] lg:mx-4">
                            Select a category
                        </div>
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
                                    <div 
                                        key={item.id} 
                                        className=" block border-b border-gray-100  text-gray-500 hover:text-black"
                                        onClick={() => handleCategoryChange(item.id)}
                                    >
                                        <p className="text-[12px] py-1">{item.book_cate_name}</p>
                                    </div>
                                ))
                                :
                                cartoonCategory.payload.map((item) => (
                                    <div 
                                        key={item.id} 
                                        className=" text-sm block border-b border-gray-100  text-gray-500 hover:text-black"
                                        onClick={() => handleCategoryChange(item.id)}
                                    >
                                        
                                        <p className="text-[12px] py-1">{item.cartoon_genre}</p>
                                    </div>
                                ))
                        }
                    </div>
                </div>
            </div>

        </>
    )
}