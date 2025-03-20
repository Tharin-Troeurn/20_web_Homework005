import BookDetailCard from "@/components/book-detail-card";
import { getBookById } from "@/service/book-service";


export default async function BookReadFullArticle( { params }) {
    const { bookid } = params; 
    const book = await getBookById(bookid);
    // console.log(book)
    return (
        <>
            <BookDetailCard item={book} type="book"/>
        </>
    )
}