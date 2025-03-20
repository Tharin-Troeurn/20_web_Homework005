import Link from "next/link";

export default function BookCard(item) {
    
    return (
        <>
            <div className=" bg-[#F5F7F8] grid grid-cols-2 p-5 rounded-xl mt-20">
                <div className="relative">
                    <div className="w-[170px] h-[160px] bg-[]">
                        <img
                            className="w-[160px] h-[220px] rounded-xl mb-4 absolute -top-20 left-0 object-cover"
                            src={item.image}
                        />
                    </div>
                    <Link href={`/read-full-article/${item.id}`} className="bg-[#BFD7EA] px-4 py-2 rounded-2xl mt-3 hover:bg-[#087E8B] hover:text-white">
                        READ FULL ARTICLE
                    </Link>
                </div>
                <div className="text-[#0B3954]">
                    <h1 className="text-xl font-medium py-2 line-clamp-1">{item.book_title}</h1>
                    <p className="line-clamp-6">{item.description}</p>
                </div>
            </div>
        </>
    )
}