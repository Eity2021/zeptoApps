import React from "react";
import { useLocation } from "react-router-dom";
import WishList from "../../../component/svg/WishList";
export default function BooksDetailsPage() {
  const location = useLocation();
  const { data } = location.state;
  const {
    formats,
    title,
    authors,
    subjects,
    download_count,
    languages,
    bookshelves,
  } = data;
  console.log(data);
  return (
    <div className="mt-24">
      <div className="container">
        <div className="grid grid-cols-5 gap-8">
          <div>
            <img
              src={formats["image/jpeg"]}
              alt=""
              className="h-[100%] w-[100%]"
            />
          </div>
          <div className="col-span-4">
            <div>
              <p className="text-[25px]  font-bold  font-poppins text-[#1B1B1B]">
                {title}{" "}
                <span className="text-[15px] font-medium text-[#056DB4]">
                  ( Download-{download_count} )
                </span>
              </p>

              <div className=" pt-2">
                {authors.map((author) => (
                  <p className="text-[17px] font-bold text-[#191B27] font-poppins">
                    {author.name} <span className="text-[14px]">(Author)</span>
                  </p>
                ))}
              </div>
              <div className="pt-0">
                {languages.map((language) => (
                  <div>
                    {language === "en" && (
                      <p className="text-[15px] font-medium text-[#191B27] font-poppins">
                        Language : English
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <p className="text-[14px] font-medium text-[#191B27] font-poppins">
                  Subjects :{" "}
                </p>
                {subjects.map((subject) => (
                  <li className="text-[13px] font-medium text-[#191B27] font-poppins pt-2">
                    {subject}
                  </li>
                ))}
              </div>
              <div className="flex gap-1 pt-3 cursor-pointer">
                <WishList></WishList>
                <h2 className="text-[16px] font-medium text-[#056DB4] font-poppins">
                  Wishlist
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div className="pt-10">
              <p className="text-[18px] font-medium text-[#191B27] font-poppins border-b">
                BookSelves :
              </p>
              {bookshelves.map((bookshelve) => (
                <li className="text-[15px] font-medium text-[#191B27] font-poppins pt-2">
                  {bookshelve}
                </li>
              ))}
            </div>

            <div className="pt-10">
              <p className="text-[18px] font-medium text-[#191B27] font-poppins border-b">
                Author Info :
              </p>
              {authors.map((author) => (
                <div>
                  <p className="text-[18px] font-bold text-[#191B27] font-poppins pt-2">
                    {author.name}
                  </p>

                  <p className="text-[13px] font-bold text-[#191B27] font-poppins">
                    ({author.birth_year} - {author.death_year})
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
