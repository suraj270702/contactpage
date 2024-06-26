import React from "react";
import mapImg from "../assets/Mapsicle Map.png";
const Map = () => {
  return (
    <div className="relative h-[638px] lg:h-full">
      <img src={mapImg} alt="" className="h-[638px] lg:h-full" />
      <div className="w-[340px] lg:w-[486px] mx-auto">
      <div className="w-[340px] lg:w-[486px] max-h-[315px] h-full check-box rounded-[10px] absolute mx-auto lg:mx-0 top-[35px]  lg:top-[135px] lg:left-[135px] p-[50px]">
        <div className="flex flex-col items-start justify-between h-full">
          <h1 className="text-[27px] font-semibold text-[#fff]">OneStopNDT</h1>
          <h5 className="text-[14px] lg:text-[16px] font-medium text-[#fff]">
            PAP/R/406 Rabale MIDC Near Dol Electric Company Rabale MIDC, Navi
            Mumbai - 400701.
          </h5>
          <h5 className="text-[14px] lg:text-[16px] font-medium text-[#fff]">
            Landline - 022 4131 0099
          </h5>
          <div className="flex items-center gap-x-[10px]">
            <div className="">
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_235)">
                  <path
                    d="M1.45831 17.5C1.45831 5.83334 5.83331 1.45834 17.5 1.45834C29.1666 1.45834 33.5416 5.83334 33.5416 17.5C33.5416 29.1667 29.1666 33.5417 17.5 33.5417C5.83331 33.5417 1.45831 29.1667 1.45831 17.5Z"
                    fill="white"
                  />
                  <path
                    d="M19.3375 9.04167C18.7442 8.84798 18.124 8.74954 17.5 8.75C16.6079 8.75446 15.7275 8.95234 14.9193 9.32999C14.1111 9.70765 13.3944 10.2561 12.8187 10.9375L15.7354 13.3583L19.3375 9.04167Z"
                    fill="#1A73E8"
                  />
                  <path
                    d="M12.8188 10.9375C11.8838 12.0314 11.3671 13.4214 11.3604 14.8604C11.3519 15.8639 11.5556 16.8579 11.9583 17.7771L15.6771 13.4021L12.8188 10.9375Z"
                    fill="#EA4335"
                  />
                  <path
                    d="M17.5 12.5125C17.807 12.5106 18.1112 12.5696 18.3952 12.6862C18.6792 12.8027 18.9372 12.9745 19.1542 13.1916C19.3713 13.4086 19.5431 13.6666 19.6597 13.9506C19.7762 14.2346 19.8353 14.5389 19.8333 14.8458C19.8288 15.3825 19.6322 15.8999 19.2792 16.3042C19.2792 16.3042 21.1167 14.1021 22.925 11.9292C22.5567 11.2178 22.0514 10.5861 21.4383 10.0706C20.8251 9.55504 20.1161 9.16572 19.3521 8.92499L15.7208 13.3C15.9407 13.0453 16.2143 12.8426 16.522 12.7064C16.8296 12.5703 17.1637 12.504 17.5 12.5125Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M17.5 17.1938C17.193 17.1957 16.8887 17.1367 16.6048 17.0201C16.3208 16.9035 16.0628 16.7317 15.8458 16.5147C15.6287 16.2976 15.4569 16.0396 15.3403 15.7556C15.2238 15.4717 15.1647 15.1674 15.1667 14.8604C15.1699 14.3235 15.3666 13.8057 15.7208 13.4021L12.0021 17.7771C12.7697 19.1927 13.6996 20.5141 14.7729 21.7146L19.2792 16.3479C19.0643 16.6124 18.793 16.8257 18.4852 16.972C18.1774 17.1183 17.8408 17.1941 17.5 17.1938Z"
                    fill="#FBBC04"
                  />
                  <path
                    d="M19.1917 23.1875C21.2334 20.0083 23.5667 18.55 23.5667 14.8604C23.5683 13.8807 23.3331 12.9151 22.8813 12.0458L14.7292 21.7146C15.0792 22.1813 15.4146 22.6479 15.7646 23.1729C17.0042 25.0833 16.6542 26.2354 17.4563 26.2354C18.2584 26.2354 17.9084 25.0833 19.1479 23.1729"
                    fill="#34A853"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_235">
                    <rect width="35" height="35" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h5 className="text-[14px] lg:text-[16px] font-medium text-[#fff]">
              Google Map Link
            </h5>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Map;
