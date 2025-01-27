import Link from "next/link";
import Image from "next/image";

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
              <Link
                target="_blank"
                href="https://github.com/Immrudul/mrudul-website"
              >
                <button className="mprojectbtn">GitHub</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="my-6 card xl:w-96 w-[23rem] bg-zinc-800 shadow-xl">
          <figure>
            <Image
              src="https://mrudul-bucket1-s3.s3.us-east-2.amazonaws.com/API+Thumbnail.png"
              alt="api thumbnail"
              className="aspect-video"
              width={1000}
              height={1000}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-mwhite">
              Business Stores and Items RESTful API
            </h2>
            <p className=" text-mwhite">
              A RESTful API using Flask, Python and Marshmallow to simulate
              retail business operations like managing stores, items, and tags!
              Also used PostgreSQL for the database, Insomnia and Postman for
              testing, and Swagger/OpenAPI for endpoint documentation!
            </p>
            <div className="card-actions justify-end">
              <Link
                target="_blank"
                href="https://github.com/Immrudul/Stores-RESTful-API-Flask"
              >
                <button className="mprojectbtn">GitHub</button>
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
              that same position, I made this video to try and help!
            </p>
            <div className="card-actions justify-end">
              <Link
                target="_blank"
                href="https://www.youtube.com/watch?v=5aN6b0BrA_c"
              >
                <button className="mprojectbtn">YouTube</button>
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
              IEEE Conference Paper - AI and Music Centered Media Platforms
            </h2>
            <p className=" text-mwhite">
              An IEEE conference paper that I wrote about a blend of 2 things I
              love and am fascinated by, AI and music! Contains citaions as
              well!
            </p>
            <div className="card-actions justify-end">
              <Link
                target="_blank"
                href="https://docs.google.com/document/d/1t5YPv26D6yEfiuUvM9MjQW58Fo2jLhVrcl-dJmcpWkc/edit?usp=sharing"
              >
                <button className="mprojectbtn">Docs</button>
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
              <Link
                target="_blank"
                href="https://github.com/Immrudul/Mrudul-Suresh-Coding-Projects"
              >
                <button className="mprojectbtn">GitHub</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
