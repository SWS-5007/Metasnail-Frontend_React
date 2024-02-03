import React, { useCallback, useEffect, useState } from "react";

import { IoIosArrowDown } from "react-icons/io";

import logo from "assets/buttons/preloader.png";
import playbtn from "assets/buttons/Play.png";
import { HeaderDiv, MobileHeader } from "./header.styled";
import { AiFillFire } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { Accordion } from "react-bootstrap";

const Header = () => {
  const [y, setY] = useState(0);
  const [sub, setSub] = useState("");
  const [mobile, setMobile] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      const header: any = document.getElementById("header");
      if (document.documentElement.scrollTop === 0) {
        header.style.backgroundColor = "transparent";
      } else if (document.documentElement.scrollTop > 0) {
        header.style.backgroundColor = "#0042A1";
      }

      if (y > window.scrollY) {
        header.style.top = 0;
      } else if (y < window.scrollY) {
        header.style.top = "-81px";
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    window.addEventListener("resize", () =>
      setMobile(window.innerWidth > 1024 ? false : true)
    );
    setMobile(window.innerWidth > 1024 ? false : true);
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <HeaderDiv
      id="header"
      className="fixed w-full border-b border-[#ffffff50] z-50"
    >
      <div className="max-w-[1400px] w-[98%] m-auto flex justify-between">
        <div>
          <img
            src={logo}
            alt="logo"
            className="max-w-[124px] min-w-[124px] py-6 cursor-pointer"
          />
        </div>
        <div className="lg:flex hidden text-white font-black text-md xl:text-lg">
          <div>
            <div className="menu-item mx-[15px] flex items-center h-full">
              HOME
            </div>
          </div>
          <div className="relative">
            <div
              onMouseEnter={() => setSub("nft")}
              onMouseLeave={() => setSub("")}
              className="menu-item mx-[15px] flex items-center h-full"
            >
              NFTS
              <IoIosArrowDown className="ml-1" />
            </div>
            <div
              onMouseEnter={() => setSub("nft")}
              onMouseLeave={() => setSub("")}
              className={`absolute ${
                sub === "nft" ? "sub-show" : "sub-hide"
              } pt-3 -left-6`}
            >
              <div className="bg-white min-w-[290px] text-[16px] text-black rounded-2xl font-medium py-[25px] px-[40px]">
                <div className="py-2 cursor-pointer menu-hover">Categories</div>
                <div className="py-2 cursor-pointer menu-hover">
                  Browse Snails
                </div>
                <div className="py-2 cursor-pointer menu-hover">Mint NFT</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div
              onMouseEnter={() => setSub("chart")}
              onMouseLeave={() => setSub("")}
              className="menu-item mx-[15px] flex items-center h-full"
            >
              CHARTS
              <IoIosArrowDown className="ml-1" />
            </div>
            <div
              onMouseEnter={() => setSub("chart")}
              onMouseLeave={() => setSub("")}
              className={`absolute ${
                sub === "chart" ? "sub-show" : "sub-hide"
              } pt-3 -left-6`}
            >
              <div className="bg-white min-w-[290px] text-[16px] text-black rounded-2xl font-medium py-[25px] px-[40px]">
                <div className="py-2 cursor-pointer menu-hover">Dxtools</div>
                <div className="py-2 cursor-pointer menu-hover">Poocoin</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div
              onMouseEnter={() => setSub("docs")}
              onMouseLeave={() => setSub("")}
              className="menu-item mx-[15px] flex items-center h-full"
            >
              DOCUMENTS
              <IoIosArrowDown className="ml-1" />
            </div>
            <div
              onMouseEnter={() => setSub("docs")}
              onMouseLeave={() => setSub("")}
              className={`absolute ${
                sub === "docs" ? "sub-show" : "sub-hide"
              } pt-3 -left-6`}
            >
              <div className="bg-white min-w-[290px] text-[16px] text-black rounded-2xl font-medium py-[25px] px-[40px]">
                <div className="py-2 cursor-pointer menu-hover">Report</div>
                <div className="py-2 cursor-pointer menu-hover">whitepaper</div>
                <div className="py-2 cursor-pointer menu-hover">NFTs</div>
                <div className="py-2 cursor-pointer menu-hover">Stacking</div>
                <div className="py-2 cursor-pointer menu-hover">
                  Game logics and concepts
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div
              onMouseEnter={() => setSub("ms")}
              onMouseLeave={() => setSub("")}
              className="menu-item mx-[15px] flex items-center h-full"
            >
              MS ECO
              <IoIosArrowDown className="ml-1" />
            </div>
            <div
              onMouseEnter={() => setSub("ms")}
              onMouseLeave={() => setSub("")}
              className={`absolute ${
                sub === "ms" ? "sub-show" : "sub-hide"
              } pt-3 -left-6`}
            >
              <div className="bg-white min-w-[290px] text-[16px] text-black rounded-2xl font-medium py-[25px] px-[40px]">
                <div className="py-2 cursor-pointer menu-hover">Tokenomics</div>
                <div className="py-2 cursor-pointer menu-hover">
                  Key Features
                </div>
                <div className="py-2 cursor-pointer menu-hover">Roadmap</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div
              onMouseEnter={() => setSub("link")}
              onMouseLeave={() => setSub("")}
              className="menu-item mx-[15px] flex items-center h-full"
            >
              LINKS
              <IoIosArrowDown className="ml-1" />
            </div>
            <div
              onMouseEnter={() => setSub("link")}
              onMouseLeave={() => setSub("")}
              className={`absolute ${
                sub === "link" ? "sub-show" : "sub-hide"
              } pt-3 -left-6`}
            >
              <div className="bg-white min-w-[290px] text-[16px] text-black rounded-2xl font-medium py-[25px] px-[40px]">
                <div className="py-2 cursor-pointer menu-hover">LP Lock</div>
                <div className="py-2 cursor-pointer menu-hover">BSC SCAN</div>
                <div className="py-2 cursor-pointer menu-hover">
                  Private sale
                </div>
                <div className="py-2 cursor-pointer menu-hover">
                  Presale ( soon )
                </div>
              </div>
            </div>
          </div>
          <div className="ml-[24px] anim-btn self-center bg-[#FF7E00] h-fit text-white uppercase rounded-full text-base relative font-bold flex items-center p-[5px] border-x border-[#FF7E00] cursor-pointer">
            <span className="px-3">BETA Testers</span>
            <div className="p-[10px] bg-white text-[#00c3ff] rounded-full">
              <AiFillFire />
            </div>
          </div>
        </div>
        <div className="lg:block hidden self-center">
          <img
            src={playbtn}
            alt="playbtn"
            className="header-play-btn max-w-[147px] min-w-[147px] cursor-pointer"
          />
        </div>
        <div className="lg:hidden block self-center">
          <span className="w-[50px] h-[50px] bg-white rounded-full text-[25px] cursor-pointer flex justify-center items-center">
            <IoMenu onClick={() => setMenu(true)} />
          </span>
        </div>
      </div>
      {mobile && (
        <MobileHeader show={menu}>
          <div
            className="mobile-header-overlay fixed w-full h-full top-0 left-0 bg-[#00000080]"
            onClick={() => setMenu(false)}
          />
          <div className="mobile-header pt-14 px-8 fixed max-w-[320px] w-full h-screen right-0 top-0 bg-white">
            <IoCloseSharp
              className="absolute top-3 right-3 text-[30px] cursor-pointer"
              onClick={() => setMenu(false)}
            />
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header className="">Home</Accordion.Header>
                <Accordion.Body>
                  <p onClick={() => setMenu(false)}>Main Home</p>
                  <p onClick={() => setMenu(false)}>SEO Agency</p>
                  <p onClick={() => setMenu(false)}>Marketing Company</p>
                  <p onClick={() => setMenu(false)}>Digital Marketing</p>
                  <p onClick={() => setMenu(false)}>SEO Company</p>
                  <p onClick={() => setMenu(false)}>Business SEO</p>
                  <p onClick={() => setMenu(false)}>SaaS Home</p>
                  <p onClick={() => setMenu(false)}>SEO Consultant</p>
                  <p onClick={() => setMenu(false)}>Digital Agency</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header className="">Pages</Accordion.Header>
                <Accordion.Body>
                  <p onClick={() => setMenu(false)}>About Us</p>
                  <p onClick={() => setMenu(false)}>Our Team</p>
                  <p onClick={() => setMenu(false)}>Sigle Team</p>
                  <p onClick={() => setMenu(false)}>Our Process</p>
                  <p onClick={() => setMenu(false)}>FAQs</p>
                  <p onClick={() => setMenu(false)}>Shop</p>
                  <p onClick={() => setMenu(false)}>Coming Soon</p>
                  <p onClick={() => setMenu(false)}>Elements</p>
                  <p onClick={() => setMenu(false)}>Typography</p>
                  <p onClick={() => setMenu(false)}>404 Error</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header className="">Services</Accordion.Header>
                <Accordion.Body>
                  <p onClick={() => setMenu(false)}>Content Marketing</p>
                  <p onClick={() => setMenu(false)}>App Development</p>
                  <p onClick={() => setMenu(false)}>
                    Search Engine Optimization
                  </p>
                  <p onClick={() => setMenu(false)}>PPC Management</p>
                  <p onClick={() => setMenu(false)}>Social Media Marketing</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header className="">Blog</Accordion.Header>
                <Accordion.Body>
                  <p onClick={() => setMenu(false)}>Blog List</p>
                  <p onClick={() => setMenu(false)}>Blog Grid</p>
                  <p onClick={() => setMenu(false)}>Blog Single</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header className="">Contacts</Accordion.Header>
                <Accordion.Body>
                  <p onClick={() => setMenu(false)}>Contact Us</p>
                  <p onClick={() => setMenu(false)}>Free a Quote</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </MobileHeader>
      )}
    </HeaderDiv>
  );
};

export default Header;
