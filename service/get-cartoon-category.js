export const getCartoonCategory = async()=>{
    const res = await fetch("https://nextjs-homework005.vercel.app/api/cartoon_genre")
    const CartoonCategory = await res.json();

    return CartoonCategory;
} 