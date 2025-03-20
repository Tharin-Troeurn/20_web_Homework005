export const SearchCartoonByTitle = async(searchValue) =>{
    const res = await fetch(`https://nextjs-homework005.vercel.app/api/cartoon?search=${searchValue}`)
    const searchCartoonByTitle =await res.json()

    return searchCartoonByTitle;
}