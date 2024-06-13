import React from "react";
import img1 from "../assets/Rectangle 67 (1).png";
import img2 from "../assets/Rectangle 67 (2).png";
import img3 from "../assets/Rectangle 67 (3).png";
import img4 from "../assets/Rectangle 67 (4).png";
import img5 from "../assets/Rectangle 67 (5).png";
import img6 from "../assets/Rectangle 67 (6).png";
import WhiteLogo from "../components/WhiteLogo";
import Button from "./Button";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  const footerArray = [
    {
      img: img1,
      title: "Companies",
    },
    {
      img: img2,
      title: "Jobs",
    },
    {
      img: img3,
      title: "Articles",
    },
    {
      img: img4,
      title: "Webinars",
    },
    {
      img: img5,
      title: "Forums",
    },
    {
      img: img6,
      title: "Application News",
    },
  ];
  return (
    <div className="mt-[110px]">
      <div className="">
        <div className="">
          <div className="w-[350px] lg:w-full grid grid-cols-2 lg:grid-cols-6 gap-[30px] lg:px-[135px] lg:pb-[80px] mx-auto lg:w-ml-0">
            {footerArray.map((item, i) => (
              <div
                className="w-[160px] lg:w-[170px] min-h-[92px] lg:h-[170px] rounded-[10px] relative cursor-pointer"
                key={i}
              >
                <img src={item.img} alt="" />
                <div className="absolute inset-0 flex items-center justify-center top-[120px] lg:top-[130px]">
                  <h1 className="text-[14px] font-semibold text-[#fff] text-center">
                    {item.title}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-full lg:h-[572px] check-box px-[36px] lg:px-[135px] pt-[70px] pb-[30px] mt-[80px]">
          <div>
            <div className="pb-[53px] flex items-end justify-end border-b border-b-[#A6A6A6]">
              <WhiteLogo />
            </div>
            <div className="py-[30px] border-b border-b-[#A6A6A6]">
              <div>
                <h1 className="text-[16px] font-semibold text-[#fff] mb-[15px]">
                  What is One Stop NDT ?
                </h1>
                <p className="text-[14px] text-[#fff]">
                  A informative dais for NDT enthusiasts, One Stop NDT has
                  everything related to Non-Destructive Testing in one place.
                  Backed by professionals with unprecedented experience &
                  presence of more than 20 years in NDT Market, One Stop NDT
                  gives you a chance to freely communicate and interact with
                  experts. NDT equipment manufacturers, service providers, plant
                  operators, distributors, NDT professionals can check out the
                  new developments, products and services available in the
                  global market and have direct access for interactions with
                  like-minded professionals. One Stop NDT users have access to
                  NDT forums, jobs, blogs, events, courses, webinars and much
                  more!
                </p>
              </div>
            </div>
            <div className="py-[20px] border-b border-b-[#A6A6A6]">
              <div className="flex flex-col lg:flex-row gap-y-5 items-start lg:items-center lg:justify-between">
                <h1 className="text-[14px] text-[#fff]">Support</h1>
                <div className="flex items-center justify-between">
                  <Button />
                </div>
              </div>
            </div>
            <div className="pt-[15px]">
              <div className="flex flex-col lg:flex-row gap-y-5 items-start lg:items-center lg:justify-between">
                <div className="flex items-center gap-x-[20px]">
                  <h1 className=" text-[12px] text-[#fff]">Privacy Policy</h1>
                  <svg
                    width="4"
                    height="4"
                    viewBox="0 0 4 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2" cy="2" r="2" fill="white" />
                  </svg>
                  <h1 className=" text-[12px] text-[#fff]">
                    Terms and Conditions
                  </h1>
                  <svg
                    width="4"
                    height="4"
                    viewBox="0 0 4 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2" cy="2" r="2" fill="white" />
                  </svg>
                  <h1 className=" text-[12px] text-[#fff]">
                    Copyright © 2022 . OSNDT All Rights Reserved
                  </h1>
                </div>
                <div>
                  <SocialMedia />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
