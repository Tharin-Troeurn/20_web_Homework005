import TitleContent from "@/components/title-content";
import { getBookCategory } from "@/service/get-book-category";
import { getCartoonCategory } from "@/service/get-cartoon-category";
import Link from "next/link";

export default async function HomePage() {
    const bookCategory = await getBookCategory();
    const cartoonCategory = await getCartoonCategory();
    // console.log("bookCategory : ", bookCategory)
    // console.log("cartoonCategory : ", cartoonCategory)
    return (
        <>
            <TitleContent title="Homepage" bookCategory={bookCategory} cartoonCategory={cartoonCategory}/>
            <div className="flex justify-around mt-5 py-20 px-10">
                <Link href={"/book-categories"}>
                    <div className="relative group w-[270px] h-[380px]">
                        <img
                            src="https://i.pinimg.com/736x/e5/59/53/e5595356807accd5b174c97387a0d2b3.jpg"
                            alt=""
                            className="w-full h-full rounded-3xl object-cover"
                        />
                        <div className="absolute z-50 top-3 left-4 flex items-center gap-2 bg-white text-[#087E8B] px-3 py-[2px] rounded-xl shadow-md">
                            <svg
                                width={16}
                                height={17}
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2.9365 10.8509L5.9565 13.8709C7.1965 15.1109 9.20984 15.1109 10.4565 13.8709L13.3832 10.9442C14.6232 9.70424 14.6232 7.69091 13.3832 6.44424L10.3565 3.43091C9.72317 2.79758 8.84984 2.45758 7.9565 2.50424L4.62317 2.66424C3.28984 2.72424 2.22984 3.78424 2.16317 5.11091L2.00317 8.44424C1.96317 9.34424 2.30317 10.2176 2.9365 10.8509Z"
                                    stroke="#087E8B"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M6.48985 8.65096C7.41032 8.65096 8.15651 7.90477 8.15651 6.98429C8.15651 6.06382 7.41032 5.31763 6.48985 5.31763C5.56937 5.31763 4.82318 6.06382 4.82318 6.98429C4.82318 7.90477 5.56937 8.65096 6.48985 8.65096Z"
                                    stroke="#087E8B"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M8.82318 11.9843L11.4898 9.31763"
                                    stroke="#087E8B"
                                    strokeWidth="1.5"
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span>Book</span>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl">
                            <span>View All</span>
                            <span>Available</span>
                            <span>Books</span>
                        </div>
                    </div>
                </Link>
                <Link href={"/old-school-cartoons"}>
                    <div className="relative group w-[270px] h-[380px]">
                        <img
                            src="https://i.pinimg.com/736x/16/8e/9f/168e9fba9f9e89d1fed1945b4b6c494e.jpg"
                            alt=""
                            className="w-full h-full rounded-3xl object-cover"
                        />
                        <div className="absolute z-50 top-3 left-4 flex items-center gap-2 bg-white text-[#087E8B] px-3 py-[2px] rounded-xl shadow-md">
                            <svg
                                width={16}
                                height={17}
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2.9365 10.8509L5.9565 13.8709C7.1965 15.1109 9.20984 15.1109 10.4565 13.8709L13.3832 10.9442C14.6232 9.70424 14.6232 7.69091 13.3832 6.44424L10.3565 3.43091C9.72317 2.79758 8.84984 2.45758 7.9565 2.50424L4.62317 2.66424C3.28984 2.72424 2.22984 3.78424 2.16317 5.11091L2.00317 8.44424C1.96317 9.34424 2.30317 10.2176 2.9365 10.8509Z"
                                    stroke="#087E8B"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M6.48985 8.65096C7.41032 8.65096 8.15651 7.90477 8.15651 6.98429C8.15651 6.06382 7.41032 5.31763 6.48985 5.31763C5.56937 5.31763 4.82318 6.06382 4.82318 6.98429C4.82318 7.90477 5.56937 8.65096 6.48985 8.65096Z"
                                    stroke="#087E8B"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M8.82318 11.9843L11.4898 9.31763"
                                    stroke="#087E8B"
                                    strokeWidth="1.5"
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span>Cartoons</span>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl">
                            <span>View All</span>
                            <span>Available</span>
                            <span>Cartoons</span>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}