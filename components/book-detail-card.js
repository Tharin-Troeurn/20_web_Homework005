export default function BookDetailCard({ item, type }) {
    console.log("type : ", type)
    console.log("item : ", item)
    return (
        <div className="bg-[#FFFFFF] rounded-xl p-12 mt-24 min-h-screen">
            <div className="w-full h-[100px] relative">
                <img
                    src={item.payload.image}
                    className="w-[210px] h-[300px] object-cover rounded-2xl absolute right-0 -top-40"
                />
            </div>
            <div>
                <h1 className="text-[#0B3954] font-medium text-[24px]">
                    {type == "book" ? item.payload.book_title : item.payload.ct_title}
                </h1>
                <p className="text-lg mt-2">
                    by
                    <span className="text-[#087E8B] ms-2">
                        {type == "book" ? item.payload.book_author : item.payload.ct_creator}
                    </span>
                </p>
                {type === "cartoon" && (
                    <div className="flex items-center my-3">
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"

                        >
                            <path
                                d="M11.9999 16.33C9.60992 16.33 7.66992 14.39 7.66992 12C7.66992 9.61 9.60992 7.67 11.9999 7.67C14.3899 7.67 16.3299 9.61 16.3299 12C16.3299 14.39 14.3899 16.33 11.9999 16.33ZM11.9999 9.17C10.4399 9.17 9.16992 10.44 9.16992 12C9.16992 13.56 10.4399 14.83 11.9999 14.83C13.5599 14.83 14.8299 13.56 14.8299 12C14.8299 10.44 13.5599 9.17 11.9999 9.17Z"
                                fill="#087E8B"
                            />
                            <path
                                d="M12.0001 21.02C8.24008 21.02 4.69008 18.82 2.25008 15C1.19008 13.35 1.19008 10.66 2.25008 9C4.70008 5.18 8.25008 2.98 12.0001 2.98C15.7501 2.98 19.3001 5.18 21.7401 9C22.8001 10.65 22.8001 13.34 21.7401 15C19.3001 18.82 15.7501 21.02 12.0001 21.02ZM12.0001 4.48C8.77008 4.48 5.68008 6.42 3.52008 9.81C2.77008 10.98 2.77008 13.02 3.52008 14.19C5.68008 17.58 8.77008 19.52 12.0001 19.52C15.2301 19.52 18.3201 17.58 20.4801 14.19C21.2301 13.02 21.2301 10.98 20.4801 9.81C18.3201 6.42 15.2301 4.48 12.0001 4.48Z"
                                fill="#087E8B"
                            />
                        </svg>
                        <span className="ms-1 text-[#087E8B] font-medium">{item.payload.view_count} times | {item.payload.published_year.split("-")[0]}</span>
                    </div>
                )}
                <div>
                    <p className="text-[#0B3954] mt-2">
                        {type == "book" ? item.payload.description : item.payload.ct_description}
                    </p>
                </div>
            </div>
        </div>
    )
}