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
              alt="Shoes"
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
              src="https://mrudul-bucket1-s3.s3.us-east-2.amazonaws.com/CaSino%2B%2B+S3.png"
              alt="Shoes"
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
        <div className="my-6 card xl:w-96 w-[23rem] bg-zinc-800 shadow-xl">
          <figure>
            <Image
              src="https://mrudul-bucket1-s3.s3.us-east-2.amazonaws.com/NEW+Electric+Model+S3.jpg"
              alt="Shoes"
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
              src="https://mrudul-bucket1-s3.s3.us-east-2.amazonaws.com/Ball+s3+Final.jpg"
              alt="Shoes"
              className="aspect-video"
              width={1000}
              height={1000}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-mwhite">
              Basketball Physics Experiment
            </h2>
            <p className=" text-mwhite">
              Conducted an experiement focused on kinematics to determine the
              impact of jumping vs not jumping when shooting the basketball!
            </p>
            <div className="card-actions justify-end">
              <Link
                target="_blank"
                href="https://www.youtube.com/watch?v=R6m5vMRYv-0"
              >
                <button className="mprojectbtn">YouTube</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
