"use client";
import { useState } from "react";
import { ListIcon } from "../../../public/icons/page";
import { XIcon } from "../../../public/icons/page";
import { GitHubIcon } from "../../../public/icons/page";
import { LinkedInIcon } from "../../../public/icons/page";
import { YouTubeIcon } from "../../../public/icons/page";
import Link from "next/link";

export default function Header() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const scrollToExperiences = () => {
    const experiencesSection = document.querySelector("#experiences");
    if (experiencesSection) {
      const offset = 320; // Adjust this value as needed
      const topPos =
        experiencesSection.getBoundingClientRect().top +
        window.scrollY -
        offset;
      window.scrollTo({ top: topPos, behavior: "smooth" });
    }
  };
  const scrollToProjects = () => {
    const projectsSection = document.querySelector("#projects");
    if (projectsSection) {
      const offset = 190; // Adjust this value as needed
      const topPos =
        projectsSection.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: topPos, behavior: "smooth" });
    }
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const [iconState, setIconState] = useState("list"); // State to track the icon state

  const handleNav = () => {
    setMenuOpen(!menuOpen);
    setIconState((prevState) => (prevState === "list" ? "close" : "list")); // Toggle icon state
  };

  return (
    <div>
      <div className="flex bg-mgray text-mwhite items-center justify-between px-12 py-8 fixed w-full z-50">
        <div className="space-x-6 flex items-center">
          <span className="text-4xl text-mpurple font-bold">Immrudul</span>
          <span className="lg:flex hidden text-2xl">|</span>
          <button onClick={scrollToTop} className="lg:flex hidden m-btn-hover">
            HOME
          </button>
          <button
            onClick={scrollToExperiences}
            className="lg:flex hidden m-btn-hover"
          >
            EXPERIENCE
          </button>
          <button
            onClick={scrollToProjects}
            className="lg:flex hidden m-btn-hover"
          >
            PROJECTS
          </button>
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
          <Link target="_blank" href="https://github.com/Immrudul">
            <GitHubIcon />
          </Link>
          <Link target="_blank" href="https://ca.linkedin.com/in/mrudulsuresh">
            <LinkedInIcon />
          </Link>
          <Link target="_blank" href="https://www.youtube.com/@immrudul">
            <YouTubeIcon />
          </Link>
        </div>
      </div>

      <div
        className={
          menuOpen
            ? "h-fit text-mwhite fixed left-0 top-24 lg:hidden bg-mgray ease-in duration-150 transition-all z-50"
            : "h-fit text-mwhite top-24 fixed left-[-100%] ease-in duration-150 transition-all z-50"
        }
      >
        <div className="bg-mgray pl-10 fixed z-50 w-full">
          <div className="space-x-4 flex w-full text-sm">
            <button onClick={scrollToTop} className="">
              HOME
            </button>
            <button onClick={scrollToExperiences} className="">
              EXPERIENCE
            </button>
            <button onClick={scrollToProjects} className="">
              PROJECTS
            </button>
          </div>
          <div className="flex items-center space-x-3 text-sm py-4 ">
            <Link target="_blank" href="https://github.com/Immrudul">
              <GitHubIcon />
            </Link>
            <Link
              target="_blank"
              href="https://ca.linkedin.com/in/mrudulsuresh"
            >
              <LinkedInIcon />
            </Link>
            <Link target="_blank" href="https://www.youtube.com/@immrudul">
              <YouTubeIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
