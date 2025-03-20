export const getAllOldSchoolCartoon = async() =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cartoon`);
    const cartoons = await res.json();
    return cartoons;
}

export const getCartoonById = async(id) =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cartoon/${id}`)
    const cartoon = res.json()
    return cartoon;
}

export const getCartoonCategory = async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cartoon_genre`)
    const CartoonCategory = await res.json();

    return CartoonCategory;
} 

export const SearchCartoonByTitle = async(searchValue) =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cartoon?search=${searchValue}`)
    const searchCartoonByTitle =await res.json()

    return searchCartoonByTitle;
}

export const getCartoonByGenreId = async(genreId)=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cartoon?genre=${genreId}`)
    const cartoonByGenreId = await res.json();

    return cartoonByGenreId;
} 