import React from "react";
import payal from "./assets/homeImg.svg";
import Brand from "./components/Brand";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img from "./assets/img1.svg";
import img1 from "./assets/img2.svg";
import "./home.scss";

const Home = () => {
  var items = [
    { url: img },
    { url: img1 },
    { url: img },
    { url: img1 },
    { url: img },
    { url: img1 },
    { url: img },
    { url: img1 },
    { url: img },
    { url: img1 },
    { url: img },
    { url: img1 },
  ];
  console.log(items.imgUrl);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="Home w-screen flex flex-col">
      <div className="w-full flex justify-center mt-[23px]">
        <img src={payal} alt="payal" />
      </div>
      <div className="featured flex flex-col justify-center items-center mt-[69px]">
        <div>
          <div className="w-full flex justify-center items-end">
            <section className="border-[#F24949] border-[2px] rounded-3xl px-5 flex justify-center items-center bg-white">
              <h1 className=" text-[#F24949] text-[32px] flex justify-center pb-1 font-semibold">
                Featured Payals
              </h1>
            </section>
          </div>
        </div>
        <div className="slider w-[80vw] mt-[24px]">
          <Slider {...settings}>
            {items.map((item, index) => {
              return (
                <div
                  className="flex items-center justify-center bg-gradient-to-br w-[330px]"
                  key={index}
                >
                  <div className="overflow-hidden cursor-pointer rounded-xl relative group">
                    <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                      <div>
                        <div className="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                          <div className="font-bold">Payal</div>
                          <div className="opacity-60 text-sm ">
                            Kavya ki payal
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      alt="payal jwellery"
                      className="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                      src={item.url}
                    />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="CatgSearch mt-[62px]">
          <div className="upper">
            <div className="w-full flex justify-center items-end">
              <section className="border-[#F24949] border-[2px] rounded-3xl px-5 flex justify-center items-center bg-white">
                <h1 className=" text-[#F24949] text-[32px] flex justify-center pb-1 font-semibold">
                  Search by Categories
                </h1>
              </section>
            </div>
          </div>
          <div className="lower"></div>
        </div>
      </div>
      <Brand />
    </div>
  );
};

export default Home;
