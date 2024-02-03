import React from "react";
import { RoadMapDiv } from "./roadmap.styled";

import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion } from "react-bootstrap";

const RoadMapPart = () => {
  return (
    <RoadMapDiv className="relative">
      <div className="md:pt-[200px] md:pb-[90px] py-10">
        <h6 className="text-[#0EC6FF] metasnail-h6 text-sm font-bold uppercase relative flex items-center pl-5 mb-[15px]">
          METASNAILS TIMELINE
        </h6>
        <h2 className="text-white font-black text-[36px]">ROADMAP</h2>
      </div>
      <div className="roadmap-accordion">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="">Q1</Accordion.Header>
            <Accordion.Body>
              <p className="mb-[20px] text-base">
                <img
                  draggable="false"
                  className="emoji"
                  alt="✔"
                  src="https://s.w.org/images/core/emoji/13.1.0/svg/2714.svg"
                />{" "}
                <span className="text-white">Website launch</span>
              </p>
              <p className="mb-[20px] text-base">
                <img
                  draggable="false"
                  className="emoji"
                  alt="✔"
                  src="https://s.w.org/images/core/emoji/13.1.0/svg/2714.svg"
                />{" "}
                <span className="text-white">contract security audit </span>
              </p>
              <p className="mb-[20px] text-base">
                <img
                  draggable="false"
                  className="emoji"
                  alt="✔"
                  src="https://s.w.org/images/core/emoji/13.1.0/svg/2714.svg"
                />{" "}
                <span className="text-white">Team KYC</span>
              </p>
              <p className="mb-[20px] text-base">
                <img
                  draggable="false"
                  className="emoji"
                  alt="✔"
                  src="https://s.w.org/images/core/emoji/13.1.0/svg/2714.svg"
                />{" "}
                <span className="text-white">
                  Metasnails Token Private sale and NFT presale{" "}
                </span>
              </p>
              <p className="mb-[20px] text-base">
                <img
                  draggable="false"
                  className="emoji"
                  alt="✔"
                  src="https://s.w.org/images/core/emoji/13.1.0/svg/1f55b.svg"
                />{" "}
                <span className="text-white">NFT market Place </span>
              </p>
              <p className="mb-[20px] text-base">
                <img
                  draggable="false"
                  className="emoji"
                  alt="✔"
                  src="https://s.w.org/images/core/emoji/13.1.0/svg/1f55b.svg"
                />{" "}
                <span className="text-white">
                  Launch MS coin LP lock 1 year
                </span>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Q2</Accordion.Header>
            <Accordion.Body>
              <p className="mb-[20px] text-base">
                <img
                  draggable="false"
                  className="emoji"
                  alt="✔"
                  src="https://s.w.org/images/core/emoji/13.1.0/svg/1f55b.svg"
                />{" "}
                <span className="text-white">Listing on CMC and CGK</span>
              </p>
              <p className="mb-[20px] text-base">
                <img
                  draggable="false"
                  className="emoji"
                  alt="✔"
                  src="https://s.w.org/images/core/emoji/13.1.0/svg/1f55b.svg"
                />{" "}
                <span className="text-white">blockfolio Listing</span>
              </p>
              <p className="mb-[20px] text-base">
                <img
                  draggable="false"
                  className="emoji"
                  alt="✔"
                  src="https://s.w.org/images/core/emoji/13.1.0/svg/1f55b.svg"
                />{" "}
                <span className="text-white">
                  Beta Testers Program start and game testing
                </span>
              </p>
              <p className="mb-[20px] text-base">
                <img
                  draggable="false"
                  className="emoji"
                  alt="✔"
                  src="https://s.w.org/images/core/emoji/13.1.0/svg/1f55b.svg"
                />{" "}
                <span className="text-white">
                  Launch Metasnail game on web browser
                </span>
              </p>
              <p className="mb-[20px] text-base">
                <img
                  draggable="false"
                  className="emoji"
                  alt="✔"
                  src="https://s.w.org/images/core/emoji/13.1.0/svg/1f55b.svg"
                />{" "}
                <span className="text-white">expand partnerships</span>
              </p>
              <p className="mb-[20px] text-base">
                <img
                  draggable="false"
                  className="emoji"
                  alt="✔"
                  src="https://s.w.org/images/core/emoji/13.1.0/svg/1f55b.svg"
                />{" "}
                <span className="text-white">
                  launch Metasnails game on Windows PC
                </span>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Q3</Accordion.Header>
            <Accordion.Body>
              <p className="mb-[20px] text-base">
                <img
                  draggable="false"
                  className="emoji"
                  alt="✔"
                  src="https://s.w.org/images/core/emoji/13.1.0/svg/1f55b.svg"
                />{" "}
                <span className="text-white">Token Staking</span>
              </p>
              <p className="mb-[20px] text-base">
                <img
                  draggable="false"
                  className="emoji"
                  alt="✔"
                  src="https://s.w.org/images/core/emoji/13.1.0/svg/1f55b.svg"
                />{" "}
                <span className="text-white">NFT stacking </span>
              </p>
              <p className="mb-[20px] text-base">
                <img
                  draggable="false"
                  className="emoji"
                  alt="✔"
                  src="https://s.w.org/images/core/emoji/13.1.0/svg/1f55b.svg"
                />{" "}
                <span className="text-white">Users NFT marketplace</span>
              </p>
              <p className="mb-[20px] text-base">
                <img
                  draggable="false"
                  className="emoji"
                  alt="✔"
                  src="https://s.w.org/images/core/emoji/13.1.0/svg/1f55b.svg"
                />{" "}
                <span className="text-white">2nd security audit</span>
              </p>
              <p className="mb-[20px] text-base">
                <img
                  draggable="false"
                  className="emoji"
                  alt="✔"
                  src="https://s.w.org/images/core/emoji/13.1.0/svg/1f55b.svg"
                />{" "}
                <span className="text-white">Dxtools CMC CGK Trending</span>
              </p>
              <p className="mb-[20px] text-base">
                <img
                  draggable="false"
                  className="emoji"
                  alt="✔"
                  src="https://s.w.org/images/core/emoji/13.1.0/svg/1f55b.svg"
                />{" "}
                <span className="text-white">Expand Metasnails game modes</span>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Q4</Accordion.Header>
            <Accordion.Body>
              <p className="mb-[20px] text-base">
                <img
                  draggable="false"
                  className="emoji"
                  alt="✔"
                  src="https://s.w.org/images/core/emoji/13.1.0/svg/1f55b.svg"
                />{" "}
                <span className="text-white">1st Giveaway</span>
              </p>
              <p className="mb-[20px] text-base">
                <img
                  draggable="false"
                  className="emoji"
                  alt="✔"
                  src="https://s.w.org/images/core/emoji/13.1.0/svg/1f55b.svg"
                />{" "}
                <span className="text-white">NFT contest</span>
              </p>
              <p className="mb-[20px] text-base">
                <img
                  draggable="false"
                  className="emoji"
                  alt="✔"
                  src="https://s.w.org/images/core/emoji/13.1.0/svg/1f55b.svg"
                />{" "}
                <span className="text-white">Listing on CEX</span>
              </p>
              <p className="mb-[20px] text-base">
                <span className="text-white">Roadmap Update</span>
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="pb-[140px]">
        <h6 className="text-[#0EC6FF] metasnail-h6 text-sm font-bold uppercase relative flex items-center pl-5 mt-2 mb-[15px]">
          BUILD YOUR SMALL BUSINESS
        </h6>
        <h2 className="text-white font-black leading-10 text-[36px]">
          Dominate Your Competition with
          <br /> Process-Driven SEO
        </h2>
      </div>
    </RoadMapDiv>
  );
};

export default RoadMapPart;
