export const getAllBooks = async() =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/book`);
        const books = await res.json();
        return books;
}

export const getBookById = async(id)=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/book/${id}`);
    const book = await res.json();
    return book;
}

export const getBookCategory= async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/book_category`)
    const bookCategory = await res.json();

    return bookCategory;
} 

export const SearchBookByTitle = async(searchValue) =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/book?search=${searchValue}`)
    const searchBookTitle =await res.json()

    return searchBookTitle;
}

export const getBookByCategoryId = async(queryId)=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/book_category/search?query=${queryId}`)
    const booksByCategoryId = await res.json();

    return booksByCategoryId;
} 