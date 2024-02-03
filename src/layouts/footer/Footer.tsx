import React from "react";
import { FooterDiv } from "./footer.styled";

import footerLogo from "assets/buttons/Metasnails text shadow.png";

const Footer = () => {
  return (
    <FooterDiv className="pt-[230px] pb-[50px] relative bg-[#0042A1]">
      <div className="absolute -top-px left-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            className="fill-[#0049B1]"
            d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
	c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
	c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
          ></path>
        </svg>
      </div>
      <div className="max-w-[1200px] sm:w-[50%] w-[80%] lg:w-[98%] md:w-[80%] m-auto grid lg:grid-cols-4 md:grid-cols-2 gap-y-4">
        <div>
          <h5 className="text-white text-[20px] font-bold mb-[30px]">
            Services
          </h5>
          <div className="mb-[18px]">
            <span className="text-[#9ee8ff] font-normal text-base">
              SEO for Small Business
            </span>
          </div>
          <div className="mb-[18px]">
            <span className="text-[#9ee8ff] font-normal text-base">
              SEO for Local Services
            </span>
          </div>
          <div className="mb-[18px]">
            <span className="text-[#9ee8ff] font-normal text-base">
              Enterprise SEO
            </span>
          </div>
          <div className="mb-[18px]">
            <span className="text-[#9ee8ff] font-normal text-base">
              National SEO
            </span>
          </div>
          <div className="mb-[18px]">
            <span className="text-[#9ee8ff] font-normal text-base">
              International SEO
            </span>
          </div>
        </div>
        <div>
          <h5 className="text-white text-[20px] font-bold mb-[30px]">Learn</h5>
          <div className="mb-[18px]">
            <span className="text-[#9ee8ff] font-normal text-base">
              Why SEO Matters
            </span>
          </div>
          <div className="mb-[18px]">
            <span className="text-[#9ee8ff] font-normal text-base">
              How to Choose an Agency
            </span>
          </div>
          <div className="mb-[18px]">
            <span className="text-[#9ee8ff] font-normal text-base">
              Keyword Research Explained
            </span>
          </div>
          <div className="mb-[18px]">
            <span className="text-[#9ee8ff] font-normal text-base">
              On Page SEO Explained
            </span>
          </div>
          <div className="mb-[18px]">
            <span className="text-[#9ee8ff] font-normal text-base">
              Off Page SEO Explained
            </span>
          </div>
        </div>
        <div>
          <h5 className="text-white text-[20px] font-bold mb-[30px]">
            Company
          </h5>
          <div className="mb-[18px]">
            <span className="text-[#9ee8ff] font-normal text-base">
              About Company
            </span>
          </div>
          <div className="mb-[18px]">
            <span className="text-[#9ee8ff] font-normal text-base">
              IFor Customers
            </span>
          </div>
          <div className="mb-[18px]">
            <span className="text-[#9ee8ff] font-normal text-base">
              {"SEO Blog & News"}
            </span>
          </div>
          <div className="mb-[18px]">
            <span className="text-[#9ee8ff] font-normal text-base">
              {"Careers & Reviews"}
            </span>
          </div>
          <div className="mb-[18px]">
            <span className="text-[#9ee8ff] font-normal text-base">
              {"Sitemap"}
            </span>
          </div>
        </div>
        <div>
          <h5 className="text-white text-[20px] font-bold mb-[30px]">
            Subscribe
          </h5>
          <div className="mb-[18px]">
            <span className="text-[#9ee8ff] font-normal text-base">
              Follow our newsletter to stay updated
              <br />
              about agency.
            </span>
          </div>
        </div>
      </div>
      <div className="md:flex-row flex-col items-center flex  justify-between max-w-[1200px]  mx-auto !mt-[95px]">
        <img
          src={footerLogo}
          alt="footerlogo"
          className="max-w-[555px] w-full"
        />
        <p className="text-[#9ee8ff] font-normal text-base text-center md:text-left">
          Copyright © {new Date().getFullYear()} METASNAILS . All Rights
          Reserved.
        </p>
      </div>
    </FooterDiv>
  );
};

export default Footer;
