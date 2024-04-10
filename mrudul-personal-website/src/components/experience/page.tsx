import Image from "next/image";
export default function Experiences() {
  return (
    <div className="bg-mgray">
      <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical md:px-16 px-8">
        <li>
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
          <div className="timeline-end mb-10 -mt-12 lg:flex">
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
            <div className="lg:ml-10 lg:w-[30vw]">
              <div className="text-zinc-400">January 2024 - April 2024</div>

              <div className="text-mwhite font-bold text-2xl mt-6">
                GroovEver
              </div>
              <div className="text-mpurple font-medium text-xl">
                Web Developer
              </div>
              <div className="text-zinc-400 ">Waterloo, Ontario</div>
              <div className="text-zinc-300 mt-6 w-96">
                Software development for groovever.com.
              </div>
              <div className="flex flex-wrap gap-x-1.5 gap-y-1 items-center mt-3 text-sm mb-20 w-80">
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
          <div className="timeline-end mb-10 -mt-12">
            <div className="w-32 h-32 ">
              <Image
                src="/MelodicBlue7.65.png"
                alt="image"
                width={1000}
                height={1000}
                className="object-cover w-full aspect-square rounded-lg"
              />
            </div>
            <div className="text-lg font-black">iPod</div>
            The iPod is a discontinued series of portable media players and
            multi-purpose mobile devices designed and marketed by Apple Inc. The
            first version was released on October 23, 2001, about 8+1⁄2 months
            after the Macintosh version of iTunes was released. Apple sold an
            estimated 450 million iPod products as of 2022. Apple discontinued
            the iPod product line on May 10, 2022. At over 20 years, the iPod
            brand is the oldest to be discontinued by Apple
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
          <div className="timeline-end mb-10">
            <time className="font-mono italic">2007</time>
            <div className="text-lg font-black">iPhone</div>
            iPhone is a line of smartphones produced by Apple Inc. that use
            Apple's own iOS mobile operating system. The first-generation iPhone
            was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since
            then, Apple has annually released new iPhone models and iOS updates.
            As of November 1, 2018, more than 2.2 billion iPhones had been sold.
            As of 2022, the iPhone accounts for 15.6% of global smartphone
            market share
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
          <div className="timeline-end mb-10">
            <time className="font-mono italic">2015</time>
            <div className="text-lg font-black">Apple Watch</div>
            The Apple Watch is a line of smartwatches produced by Apple Inc. It
            incorporates fitness tracking, health-oriented capabilities, and
            wireless telecommunication, and integrates with iOS and other Apple
            products and services
          </div>
        </li>
      </ul>
    </div>
  );
}
