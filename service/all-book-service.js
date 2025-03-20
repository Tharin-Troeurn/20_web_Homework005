export const getAllBooks = async() =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/book`);
        const books = await res.json();
        return books;
}