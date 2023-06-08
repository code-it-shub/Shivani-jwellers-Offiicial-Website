import React from "react";
import Brand from "./components/Brand";

const About = () => {
  return (
    <div className="w-screen flex flex-col justify-center items-center my-[24px]">
      <div className="w-full bg-white flex justify-center flex-col items-center font-urban py-[56px]">
        <h1 className="text-[36px] text-[#1B1B1B] font-normal ">About Us</h1>
        <p className="px-[390px] mt-[33px] text-[20px] font-normal">
          Welcome to Shivani Jewellers, where beauty and craftsmanship converge
          to create exceptional jewellery pieces. With a passion for creativity
          and a dedication to quality, we strive to bring you exquisite designs
          that elevate your style and celebrate your individuality.<br/><br/>  We believe
          that jewellery is more than just an accessory – it is a form of
          self-expression. Each piece in our collection is meticulously crafted
          to capture the essence of timeless elegance and contemporary trends,
          ensuring that you can find the perfect jewellery that resonates with
          your personal style.<br/> <br/>  We take pride in our commitment to exceptional
          craftsmanship. Our skilled artisans combine their expertise with the
          finest materials, such as sterling silver, gemstones, and other
          precious metals, to create jewellery pieces that are not only visually
          stunning but also built to last.<br/> <br/>  We understand that every customer is
          unique, which is why we offer a range of designs to cater to diverse
          preferences. From minimalist and delicate pieces to bold and
          statement-making creations, our collection has something for every
          occasion and mood.<br/> <br/>  Customer satisfaction is at the heart of our
          business. Our knowledgeable and friendly team is here to assist you,
          providing personalized guidance and ensuring that your shopping
          experience is seamless and enjoyable. We are dedicated to delivering
          exceptional service and creating lasting relationships with our valued
          customers. We invite you to explore our collection and discover the
          beauty and artistry that define [Company Name]. Whether you're
          searching for the perfect gift or treating yourself to something
          special, we are confident that you'll find a piece that speaks to your
          unique style and helps you make a statement.<br/> <br/>  Thank you for choosing
          Shivani Jewellers. We look forward to being a part of your jewellery
          journey.
        </p>
      </div>
      <Brand/>
    </div>
  );
};

export default About;
