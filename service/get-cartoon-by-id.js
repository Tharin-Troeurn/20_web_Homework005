export const getCartoonById = async(id) =>{
    const res = await fetch(`https://nextjs-homework005.vercel.app/api/cartoon/${id}`)
    const cartoon = res.json()
    return cartoon;
}