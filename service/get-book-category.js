export const getBookCategory= async()=>{
    const res = await fetch("https://nextjs-homework005.vercel.app/api/book_category")
    const bookCategory = await res.json();

    return bookCategory;
} 