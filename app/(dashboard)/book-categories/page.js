import BookCard from "@/components/book-category/book-card";
import TitleContent from "@/components/title-content";
import { getAllBooks, getBookCategory, SearchBookByTitle } from "@/service/book-service";
import { getCartoonCategory } from "@/service/cartoon-service";


export default async function BookCategoryPage({searchParams}) {
    
    const bookCategory = await getBookCategory();
    const cartoonCategory = await getCartoonCategory();
    const searchValue = (await searchParams).search
    // console.log("search : ", searchValue)
    const books = searchValue  ? await SearchBookByTitle(searchValue) : await getAllBooks(); 
    
    return (
        <>
            <TitleContent title="All books" bookCategory={bookCategory} cartoonCategory={cartoonCategory}/>
            <div className="mt-7 grid grid-cols-2 gap-x-20 gap-y-10 mb-20">
                {
                    books.payload.map((item)=>(
                        <BookCard key={item.id} {...item}/>
                    ))
                }
            </div>
        </>
    )
}