
import OldSchoolCartoonCard from "@/components/old-school-cartoon/old-school-cartoon-card";
import TitleContent from "@/components/title-content";
import { getBookCategory } from "@/service/book-service";
import { getAllOldSchoolCartoon, getCartoonByGenreId, getCartoonCategory, SearchCartoonByTitle } from "@/service/cartoon-service";



export default async function OldSchoolCartoonPage({searchParams}) {
    
    const bookCategory = await getBookCategory();
    const cartoonCategory = await getCartoonCategory();
    const searchValue = searchParams?.search;
    const genreValue = searchParams?.genre; 
   
    let cartoons;
    if (searchValue) {
        cartoons = await SearchCartoonByTitle(searchValue);
    } else if (genreValue) {
        cartoons = await getCartoonByGenreId(genreValue); 
    } else {
        cartoons = await getAllOldSchoolCartoon();
    }
    return (
        <>
            <TitleContent title="Old school cartoon" bookCategory={bookCategory} cartoonCategory={cartoonCategory}/>
            <div className="mt-7 grid grid-cols-3 gap-x-5 gap-y-10">
                {
                    cartoons.payload.map((item)=>(
                        <OldSchoolCartoonCard key={item.id} {...item} />
                    ))
                }
            </div>
        </>
    )
}