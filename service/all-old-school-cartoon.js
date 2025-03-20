export const getAllOldSchoolCartoon = async() =>{
    const res = await fetch("https://nextjs-homework005.vercel.app/api/cartoon");
    const cartoons = await res.json();
    return cartoons;
}