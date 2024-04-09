import Image from "next/image";
export default function Experiences() {
  return (
    <div className="bg-mgray flex justify-start">
      <div className="flex justify-center w-1/6">
        <ul className="timeline timeline-vertical ">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 text-mpurple"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box  border-0 p-2 bg-mgray lg:flex items-center my-28 w-[70vw] ">
              <div className="w-32 h-32 ">
                {" "}
                <Image
                  src="/MelodicBlue7.65.png"
                  alt="image"
                  width={1000}
                  height={1000}
                  className="object-cover w-full aspect-square rounded-lg"
                />
              </div>
              <div className=" lg:block hidden ml-10 w-2/5">
                <div className="text-zinc-400 mt-32">
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
                <div className="flex flex-wrap gap-x-1.5 gap-y-1 items-center mt-3 text-sm">
                  <div className="mskill">Next.js</div>
                  <div className="mskill">TypeScript</div>
                  <div className="mskill">React</div>
                  <div className="mskill">Tailwind CSS</div>
                  <div className="mskill">daisyUI</div>
                  <div className="mskill">Bootstrap</div>
                  <div className="mskill">HTML</div>
                  <div className="mskill">CSS</div>
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
                className="w-5 h-5 text-mpurple"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box">iMac</div>
            <hr className="bg-mwhite" />
          </li>
          <li>
            <hr className="bg-mwhite" />

            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 text-mpurple"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box">iPod</div>
            <hr className="bg-mwhite" />
          </li>
          <li>
            <hr className="bg-mwhite" />

            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 text-mpurple"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box">iPhone</div>
            <hr className="bg-mwhite" />
          </li>
          <li>
            <hr className="bg-mwhite" />

            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 text-mpurple"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box">Apple Watch</div>
          </li>
        </ul>
      </div>
    </div>
  );
}
