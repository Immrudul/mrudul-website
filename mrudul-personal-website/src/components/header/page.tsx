"use client";
import { useState } from "react";
import { ListIcon } from "../../../public/icons/page";
import { XIcon } from "../../../public/icons/page";
import { ResumeIcon } from "../../../public/icons/page";
import { GitHubIcon } from "../../../public/icons/page";
import { LinkedInIcon } from "../../../public/icons/page";
import { YouTubeIcon } from "../../../public/icons/page";
import { MailIcon } from "../../../public/icons/page";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [iconState, setIconState] = useState("list"); // State to track the icon state

  const handleNav = () => {
    setMenuOpen(!menuOpen);
    setIconState((prevState) => (prevState === "list" ? "close" : "list")); // Toggle icon state
  };

  return (
    <div>
      <div className="flex bg-mgray text-mwhite items-center justify-between px-12 py-8 fixed w-full">
        <div className="space-x-6 flex items-center">
          <span className="text-4xl text-mpurple font-bold">Immrudul</span>
          <span className="lg:flex hidden text-2xl">|</span>
          <span className="lg:flex items-center hidden m-btn-hover">HOME</span>
          <span className="lg:flex hidden m-btn-hover">EXPERIENCE</span>
          <span className="lg:flex hidden m-btn-hover">PROJECTS</span>
        </div>
        <button
          className="lg:hidden block outline-none transition-transform duration-300 transform lg:hover:scale-125"
          onClick={handleNav}
        >
          {iconState === "list" ? ( // Conditionally render the icon based on iconState
            //List Icon
            <ListIcon />
          ) : (
            // X Icon
            <XIcon />
          )}
        </button>
        <div className="lg:flex hidden space-x-2 items-center">
          <ResumeIcon />
          <GitHubIcon />
          <LinkedInIcon />
          <YouTubeIcon />
          <MailIcon />
        </div>
      </div>

      <div
        className={
          menuOpen
            ? "h-fit text-mwhite fixed left-0 top-24 w-full lg:hidden bg-mgray ease-in duration-150 px-10 transition-all"
            : "h-fit text-mwhite top-24 w-full fixed left-[-100%]  px-10 ease-in duration-150 transition-all"
        }
      >
        <div className="bg-mgray pl-2 ">
          <div className="space-x-4 flex w-full text-sm">
            <div className="">HOME</div>
            <div className="">EXPERIENCE</div>
            <div className="">PROJECTS</div>
          </div>
          <div className="flex items-center space-x-3 text-sm py-4 ">
            <ResumeIcon />
            <GitHubIcon />
            <LinkedInIcon />
            <YouTubeIcon />
            <MailIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
