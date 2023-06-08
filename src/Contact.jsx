import React, { useState } from "react";
import Brand from "./components/Brand";

const Contact = () => {
  const[email,setEmail] = useState("")
  const[name,setName] = useState("")
  const[message,setMessage] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault()
    const config ={
      SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
      To : 'shubhamprakash8991@gmail.com',
      From : email,
      Subject : `Mail from ${name}`,
      Body : message
    }
    if(window.Email){
      window.Email.send(config).then((resolve)=>alert('message sent'))
    }
  }

  return (
    <div className="mt-[24px]">
      <div className="w-full bg-white flex justify-center flex-col items-center font-urban py-[56px]">
        <h1 className="text-[36px] text-[#1B1B1B] font-normal ">Contact Us</h1>
        <p className="px-[390px] mt-[33px] text-[20px] font-normal">
          Feel free to give us a call at{" "}
          <a href="tel:0562- 6713836" className="font-semibold">
            0562- 6713836
          </a>
          , or{" "}
          <a
            href="mailto: shivanijewellersagra@gmail.com"
            className="font-semibold"
          >
            email us
          </a>{" "}
          or fill out the form below. Customer Service hours are Monday-Friday,
          9:00 am - 5:00 pm, closed holidays.
        </p>
      </div>
      <div className="w-full flex justify-center items-center mt-[100px] mb-6">
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex justify-center flex-col items-center gap-[45px] "
        >
          <input
            type="text"
            name="FullName"
            id=""
            placeholder="Full Name"
            onChange={(e)=>{setName(e.target.value)}}
            className="text-[#1B1B1B] text-[20px] bg-[#F2F2F2] border-b-2 border-[#1B1B1B] w-[615px] pb-2 outline-none"
          />
          <input
            type="email"
            name="Email"
            id=""
            placeholder="Email"
            onChange={(e)=>{setEmail(e.target.value)}}
            className="text-[#1B1B1B] text-[20px] bg-[#F2F2F2] border-b-2 border-[#1B1B1B] w-[615px] pb-2 outline-none"
          />
          <textarea
            name="Message"
            id=""
            cols="10"
            rows="5"
            placeholder="Message"
            onChange={(e)=>{setMessage(e.target.value)}}
            className="text-[#1B1B1B] text-[20px] bg-[#F2F2F2] border-b-2 border-[#1B1B1B] w-[615px] pb-2 outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-[#F24949] px-[54px] py-[8px] text-white rounded-lg hover:bg-[#ef2020]"
          >
            Submit
          </button>
        </form>
      </div>
      <Brand />
    </div>
  );
};

export default Contact;
