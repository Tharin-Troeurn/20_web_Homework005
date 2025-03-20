export const SearchBookByTitle = async(searchValue) =>{
    const res = await fetch(`https://nextjs-homework005.vercel.app/api/book?search=${searchValue}`)
    const searchBookTitle =await res.json()

    return searchBookTitle;
}