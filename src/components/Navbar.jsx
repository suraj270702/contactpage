import React from "react";
import searchImg from "../assets/Frame 2621.png";
import userImg from "../assets/Frame 1386.png";
import hamburgerMenu from "../assets/Frame 1753.png";
import Logo from "./Logo";
import MobileLogo from "./MobileLogo";

const Navbar = () => {
  const navHeadings = [
    "Companies",
    "Forum",
    "Articles",
    "Webinars",
    "Events",
    "Jobs",
    "NDT Trend",
    "Application Notes",
    "Courses",
  ];
  return (
    <div className="w-full px-[36px] lg:px-[135px] max-h-[106px] lg:min-h-[163px] ">
      <div>
        <div className="h-[106px] pt-[40px] pb-[20px] lg:py-[20px]  lg:border-b lg:border-b-[#505050]">
          <div className="flex items-center justify-between">
            <Logo />
            <MobileLogo />
            <div className="w-[437px] hidden lg:flex items-center justify-between">
              <h1 className="text-[16px] font-semibold text-[#0796D6] underline cursor-pointer">
                Write Review
              </h1>
              <h1 className="text-[16px] font-semibold text-[#0796D6] underline cursor-pointer">
                For Vendors
              </h1>
              <div className=" cursor-pointer">
                <svg
                  width="26"
                  height="25"
                  viewBox="0 0 26 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.04777 17.1549C4.77968 18.8194 7.08603 19.8186 9.53234 19.9643C11.9786 20.11 14.396 19.3922 16.3291 17.9459L22.9804 24.3293C23.2163 24.548 23.5322 24.669 23.8601 24.6662C24.1881 24.6635 24.5018 24.5372 24.7336 24.3147C24.9655 24.0921 25.0971 23.7911 25.0999 23.4764C25.1028 23.1616 24.9767 22.8584 24.7489 22.632L18.0976 16.2487C19.6714 14.3103 20.4154 11.8688 20.178 9.42211C19.9406 6.97538 18.7396 4.70771 16.82 3.08159C14.9003 1.45546 12.4066 0.593355 9.84747 0.671095C7.2883 0.748835 4.85641 1.76056 3.04777 3.49995C2.11324 4.39638 1.3719 5.46074 0.866103 6.63223C0.360309 7.80371 0.0999756 9.05936 0.0999756 10.3274C0.0999756 11.5955 0.360309 12.8512 0.866103 14.0226C1.3719 15.1941 2.11324 16.2585 3.04777 17.1549ZM4.81628 5.19962C6.0527 4.01303 7.67956 3.27457 9.41969 3.11007C11.1598 2.94557 12.9055 3.36521 14.3594 4.29747C15.8133 5.22974 16.8854 6.61696 17.3931 8.22279C17.9007 9.82862 17.8125 11.5537 17.1435 13.1041C16.4745 14.6545 15.266 15.9344 13.724 16.7256C12.182 17.5167 10.4019 17.7703 8.68689 17.4431C6.9719 17.1159 5.42818 16.2282 4.31874 14.9311C3.2093 13.6341 2.60278 12.0079 2.60252 10.3298C2.59909 9.37626 2.79301 8.43153 3.17303 7.55045C3.55305 6.66936 4.1116 5.86948 4.81628 5.19722V5.19962Z"
                    fill="#0796D6"
                  />
                </svg>
              </div>

              <img src={userImg} alt="" className=" cursor-pointer" />
              <div className=" cursor-pointer">
                <svg
                  width="35"
                  height="27"
                  viewBox="0 0 35 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="1.24997"
                    y1="1.75"
                    x2="33.75"
                    y2="1.75"
                    stroke="#0796D6"
                    stroke-width="2.5"
                    stroke-linecap="round"
                  />
                  <line
                    x1="1.24997"
                    y1="13.75"
                    x2="33.75"
                    y2="13.75"
                    stroke="#0796D6"
                    stroke-width="2.5"
                    stroke-linecap="round"
                  />
                  <line
                    x1="1.24997"
                    y1="25.75"
                    x2="33.75"
                    y2="25.75"
                    stroke="#0796D6"
                    stroke-width="2.5"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block py-[20px] border-b border-b-[#505050]">
          <div className="flex items-center justify-between">
            {navHeadings.map((item, i) => (
              <h1
                className="text-[14px] font-medium text-[#505050] cursor-pointer"
                key={i}
              >
                {item}
              </h1>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
