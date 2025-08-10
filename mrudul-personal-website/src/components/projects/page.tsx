import Link from "next/link";
import Image from "next/image";

const GitHubIcon = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        className="bi bi-github "
        viewBox="0 0 16 16"
      >
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
      </svg>
    </div>
  );
};

export function DocsLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="currentColor"
      className="bi bi-file-earmark-text"
      viewBox="0 0 16 16"
    >
      <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
      <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
    </svg>
  );
}

export function YouTubeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="currentColor"
      className="bi bi-youtube"
      viewBox="0 0 16 16"
    >
      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <div>
      <div
        id="projects"
        className="bg-mgray mb-10 text-3xl text-mpurple font-bold md:px-16 px-8  "
      >
        Projects
      </div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center px-2 lg:gap-16">
        <div className="my-6 card xl:w-96 w-[23rem] bg-zinc-800 shadow-xl">
          <figure>
            <Image
              src="https://mrudul-bucket1-s3.s3.us-east-2.amazonaws.com/Website+Thumbnail.png"
              alt="website thumbnail"
              className="aspect-video"
              width={1000}
              height={1000}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-mwhite">Personal Website</h2>
            <p className=" text-mwhite">
              The website that you&apos;re currently on right now! Developed
              using Next.js, Typescript, Tailwind CSS, React, and DasiyUI.
            </p>
            <div className="card-actions justify-end">
              <Link target="_blank" href="https://github.com/Immrudul/mrudul-website">
                <div className="herobutton">
                  <GitHubIcon />
                  <span className="pl-2 ">GitHub</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="my-6 card xl:w-96 w-[23rem] bg-zinc-800 shadow-xl">
          <figure>
            <Image
              src="https://mrudul-bucket1-s3.s3.us-east-2.amazonaws.com/thumbnailjpeg.jpg"
              alt="ai pochmann rubik's cube solver thumbnail"
              className="aspect-video"
              width={1000}
              height={1000}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-mwhite">
              AI BLD Pochmann Rubik's Cube Solver
            </h2>
            <p className=" text-mwhite">
              An application I made that combines computer vision, machine learning, and cubic algorithms
              into a single interactive system designed to help people learn and master solving the Rubik&apos;s
              Cube BLD using the Old Pochmann Method!
            </p>
            <div className="card-actions justify-end">
              <Link target="_blank" href="https://github.com/Immrudul/pochmann-ai">
                <div className="herobutton">
                  <GitHubIcon />
                  <span className="pl-2 ">GitHub</span>
                </div>
              </Link>
            </div>
            <div className="card-actions justify-end">
              <Link
                target="_blank"
                href="https://www.youtube.com/watch?v=RAdtPTHROvc"
              >
                <div className="herobutton">
                  <YouTubeIcon />
                  <span className="pl-2 ">YouTube</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="my-6 card xl:w-96 w-[23rem] bg-zinc-800 shadow-xl">
          <figure>
            <Image
              src="https://mrudul-bucket1-s3.s3.us-east-2.amazonaws.com/NEW+Electric+Model+S3.jpg"
              alt="electric car model thumbnail"
              className="aspect-video"
              width={1000}
              height={1000}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title  text-mwhite">
              Electric Model Car Skeleton
            </h2>
            <p className=" text-mwhite">
              Engineered an electrical model car skeleton using a breadboard and
              circuitry such as a 555 Timer and L293D IC Chips, Tilt Sensor and
              more. Also includes bistable and astable multivibrators!
            </p>
            <div className="card-actions justify-end">
              {/* <button className="btn btn-primary">Buy Now</button> */}
            </div>
          </div>
        </div>

        <div className="my-6 card xl:w-96 w-[23rem] bg-zinc-800 shadow-xl">
          <figure>
            <Image
              src="https://mrudul-bucket1-s3.s3.us-east-2.amazonaws.com/front+end+thumbnail.png"
              alt="everything about front end video thumbnail"
              className="aspect-video"
              width={1000}
              height={1000}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-mwhite">
              EVERYTHING you need to know for front end development
            </h2>
            <p className=" text-mwhite">
              Here is a fun and clear video I made that serves as the perfect
              guide to start learning and working on front end! When I first
              started, I remember how lost I felt and to help others that are in
              that same position, I made this video to try and hopefully help!
            </p>
            <div className="card-actions justify-end">
              <Link
                target="_blank"
                href="https://www.youtube.com/watch?v=5aN6b0BrA_c"
              >
                <div className="herobutton">
                  <YouTubeIcon />
                  <span className="pl-2 ">YouTube</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="my-6 card xl:w-96 w-[23rem] bg-zinc-800 shadow-xl">
          <figure>
            <Image
              src="https://mrudul-bucket1-s3.s3.us-east-2.amazonaws.com/AI+and+Music+Website+Image.png"
              alt="ieee conference paper thumbnail"
              className="aspect-video"
              width={1000}
              height={1000}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-mwhite">
              IEEE Style Conference Paper - AI and Music Centered Media
              Platforms
            </h2>
            <p className=" text-mwhite">
              An IEEE style conference paper that I wrote about a blend of 2
              things I love and am fascinated by, AI and music! Contains full
              citations as well.
            </p>
            <div className="card-actions justify-end">
              <Link
                target="_blank"
                href="https://docs.google.com/document/d/1t5YPv26D6yEfiuUvM9MjQW58Fo2jLhVrcl-dJmcpWkc/edit?usp=sharing"
              >
                <div className="herobutton">
                  <DocsLogo />
                  <span className="pl-2 ">Docs</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="my-6 card xl:w-96 w-[23rem] bg-zinc-800 shadow-xl">
          <figure>
            <Image
              src="https://mrudul-bucket1-s3.s3.us-east-2.amazonaws.com/CaSino%2B%2B+S3.png"
              alt="casino++ thumnail"
              className="aspect-video"
              width={1000}
              height={1000}
            />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-mwhite">CaSino++ </h2>
            <p className="text-mwhite">
              Designed a virtual casino program using C++ involving software for
              games such as Blackjack, Binary Slots, Decimal Slots, Hexadecimal
              Slots and War.
            </p>
            <div className="card-actions justify-end">
              <Link target="_blank" href="https://github.com/Immrudul/Mrudul-Suresh-Coding-Projects">
                <div className="herobutton">
                  <GitHubIcon />
                  <span className="pl-2 ">GitHub</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
