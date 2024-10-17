import React from "react";
import { useAppContextZepto } from "../../../AppContextZepto";
export default function WishList() {
  const { wishList } = useAppContextZepto();
  console.log("wishList", wishList);

  return (
    <div>
      <div className="bg-[#eee] h-[300px]">
        <div className="flex justify-center items-center h-[100%]">
          <h1 className="uppercase font-poppins text-[40px] text-bolder">
            Wishlist
          </h1>
        </div>
      </div>

      <div className="container">
        <div className="flex gap-2 border-b py-4">
          <div className="mt-12">
            <div>
              {wishList.map((singleWishList) => (
                <div key={singleWishList.id} className="flex gap-4">
                  <div className="h-[80%]">
                    <img
                      src={singleWishList.formats["image/jpeg"]}
                      alt="cover-Image"
                      className="h-[80%] w-[80%]"
                    />
                  </div>
                  <div>
                    <h2>{singleWishList.title}</h2>
                    <div>
                      <div className="pb-2">
                        {singleWishList.authors.map((author) => (
                          <p
                            className="text-[13px] text-[#2c2c2c]  font-bold  font-poppins "
                            key={author.name}
                          >
                            {author.name} <sub>({author.birth_year} - {author.death_year}) </sub>
                          </p>
                        ))}
                      </div>
                    </div>

                    <div className="pt-10">
              <p className="text-[18px] font-medium text-[#191B27] font-poppins border-b">
                BookSelves :
              </p>
              {singleWishList.bookshelves.map((bookshelve) => (
                <li className="text-[15px] font-medium text-[#191B27] font-poppins pt-2">
                  {bookshelve}
                </li>
              ))}
            </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
