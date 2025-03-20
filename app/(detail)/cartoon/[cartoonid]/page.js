import BookDetailCard from "@/components/book-detail-card";
import { getCartoonById } from "@/service/cartoon-service";


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