export const getBookById = async(id)=>{
    const res = await fetch(`https://nextjs-homework005.vercel.app/api/book/${id}`);
    const book = await res.json();
    return book;
}