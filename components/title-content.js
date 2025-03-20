import Link from "next/link";
import SelectCategory from "./select-category";

export default function TitleContent({ title , bookCategory, cartoonCategory}) {
    // console.log("bookCategory : ", bookCategory)
    // console.log("cartoonCategory : ", cartoonCategory)
    return (
        <>
            <div className="flex justify-between items-center">
                <Link href={"/homepage"} className="my-1 px-4 py-2 bg-gray-200 text-[#087E8B] font-medium rounded-xl ">
                    {title}
                </Link>
                <SelectCategory bookCategory={bookCategory} cartoonCategory={cartoonCategory}/>
            </div>
            <div className="border-1 border-[#087E8B] mt-5"></div>
        </>
    )
}