import Image from "next/image";
export default function Experiences() {
  return (
    <div>
      <div className="bg-mgray mb-24 text-3xl text-mpurple font-bold md:px-16 px-8  ">
        Experiences
      </div>
      <div className="bg-mgray">
        <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical md:px-16 px-4">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-mpurple"
                id="experiences"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10 -mt-12 lg:flex lg:pl-0 pl-2">
              <div className="w-32 h-32 ">
                {" "}
                <Image
                  src="https://mrudul-bucket1-s3.s3.us-east-2.amazonaws.com/ConSalt+Square.png"
                  alt="groovever logo"
                  width={1000}
                  height={1000}
                  className="object-cover w-full aspect-square rounded-lg"
                />
              </div>
              <div className="lg:pl-10">
                <div className="lg:mt-0 mt-4">
                  <span className="text-zinc-400">
                    September 2024 - December 2024
                  </span>
                </div>
                <div className="text-mwhite font-bold text-2xl mt-6">
                  ConSALT Inc
                </div>
                <div className="text-mpurple font-medium text-xl">
                  Full Stack Developer
                </div>
                <div className="text-zinc-400 ">Hamilton, Ontario</div>
                <div className="text-zinc-300 mt-6">
                  SaaS software development at ConSALT Inc.
                </div>
                <div className="flex flex-wrap gap-x-1.5 gap-y-1 items-center mt-3 text-sm mb-20 lg:w-[30vw] w-80 ">
                  <div className="mskill">Django</div>
                  <div className="mskill">React.js</div>
                  <div className="mskill">SQLite</div>
                  <div className="mskill">Node.js</div>
                  <div className="mskill">ReportLab</div>
                  <div className="mskill">Appliku</div>
                  <div className="mskill">Webhook</div>
                  <div className="mskill">BambooHR API</div>
                  <div className="mskill">Viaesys API</div>
                  <div className="mskill">WeatherWorks API</div>
                  <div className="mskill">Bootstrap</div>
                </div>
              </div>
            </div>
            <hr className="bg-mwhite" />
          </li>
          <li>
            <hr className="bg-mwhite" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-mpurple"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10 -mt-12 lg:flex lg:pl-0 pl-2">
              <div className="w-32 h-32 ">
                {" "}
                <Image
                  src="https://mrudul-bucket1-s3.s3.us-east-2.amazonaws.com/GrooveverLogo+Square.png"
                  alt="artmech logo"
                  width={1000}
                  height={1000}
                  className="object-cover w-full aspect-square rounded-lg"
                />
              </div>
              <div className="lg:pl-10">
                <div className="text-zinc-400 lg:mt-0 mt-4">
                  January 2024 - April 2024
                </div>
                <div className="text-mwhite font-bold text-2xl mt-6">
                  GroovEver
                </div>
                <div className="text-mpurple font-medium text-xl">
                  Web Developer
                </div>
                <div className="text-zinc-400 ">Waterloo, Ontario</div>
                <div className="text-zinc-300 mt-6">
                  Software development for groovever.com.
                </div>
                <div className="flex flex-wrap gap-x-1.5 gap-y-1 items-center mt-3 text-sm mb-20 lg:w-[30vw] w-80 ">
                  <div className="mskill">Next.js</div>
                  <div className="mskill">TypeScript</div>
                  <div className="mskill">React.js</div>
                  <div className="mskill">Tailwind CSS</div>
                  <div className="mskill">daisyUI</div>
                  <div className="mskill">Bootstrap</div>
                  <div className="mskill">HTML</div>
                  <div className="mskill">CSS</div>
                  <div className="mskill">Vercel</div>
                  <div className="mskill">Node.js</div>
                </div>
              </div>
            </div>
            <hr className="bg-mwhite" />
          </li>
          <li>
            <hr className="bg-mwhite" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-mpurple"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10 -mt-12 lg:flex lg:pl-0 pl-2">
              <div className="w-32 h-32 ">
                {" "}
                <Image
                  src="https://mrudul-bucket1-s3.s3.us-east-2.amazonaws.com/aRTmech+square.png"
                  alt="artmech logo"
                  width={1000}
                  height={1000}
                  className="object-cover w-full aspect-square rounded-lg"
                />
              </div>
              <div className="lg:pl-10">
                <div className="text-zinc-400 lg:mt-0 mt-4">
                  November 2022 - August 2023
                </div>
                <div className="text-mwhite font-bold text-2xl mt-6">
                  aRTmech Robotics
                </div>
                <div className="text-mpurple font-medium text-xl">
                  Robotics Engineer
                </div>
                <div className="text-zinc-400 ">Toronto, Ontario</div>
                <div className="text-zinc-300 mt-6">
                  Competitive robotics with aRTmech Team 10700X.
                </div>
                <div className="flex flex-wrap gap-x-1.5 gap-y-1 items-center mt-3 text-sm mb-20 lg:w-[30vw] w-80 ">
                  <div className="mskill">VEX</div>
                  <div className="mskill">C++</div>
                  <div className="mskill">Automation</div>
                  <div className="mskill">Hardware</div>
                  <div className="mskill">Award x2</div>
                </div>
              </div>
            </div>
            <hr className="bg-mwhite" />
          </li>
          <li>
            <hr className="bg-mwhite" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-mpurple"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10 -mt-12 lg:flex lg:pl-0 pl-2">
              <div className="w-32 h-32 ">
                <Image
                  src="https://mrudul-bucket1-s3.s3.us-east-2.amazonaws.com/BestBrains+Square.png"
                  alt="best brains logo"
                  width={1000}
                  height={1000}
                  className="object-cover w-full aspect-square rounded-lg"
                />
              </div>
              <div className="lg:pl-10">
                <div className="text-zinc-400 lg:mt-0 mt-4">
                  September 2021 - August 2023
                </div>
                <div className="text-mwhite font-bold text-2xl mt-6">
                  BestBrains Learning Center
                </div>
                <div className="text-mpurple font-medium text-xl">
                  Software Development Instructor
                </div>
                <div className="text-zinc-400 ">Oakville, Ontario</div>
                <div className="text-zinc-300 mt-6">
                  Employed teaching foundational software development at
                  BestBrains Oakville.
                </div>
                <div className="flex flex-wrap gap-x-1.5 gap-y-1 items-center mt-3 text-sm mb-20 lg:w-[30vw] w-80 ">
                  <div className="mskill">Python</div>
                  <div className="mskill">Teaching</div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
