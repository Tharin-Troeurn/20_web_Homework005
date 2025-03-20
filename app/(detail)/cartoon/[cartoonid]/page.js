import BookDetailCard from "@/components/book-detail-card";
import { getCartoonById } from "@/service/get-cartoon-by-id";

export default async function BookReadFullArticle( { params }) {
    const { cartoonid } = params; 
    const cartoon = await getCartoonById(cartoonid)
    
    // console.log(book)
    return (
        <>
            <BookDetailCard item={cartoon} type="cartoon"/>
        </>
    )
}