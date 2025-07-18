import Image from "next/image";
import Link from "next/link";

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
const LinkedInIcon = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        className="bi bi-linkedin"
        viewBox="0 0 16 16"
      >
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
      </svg>
    </div>
  );
};
const MailIcon = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        className="bi bi-envelope-fill"
        viewBox="0 0 16 16"
      >
        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
      </svg>
    </div>
  );
};

export default function Hero() {
  return (
    <div className="bg-mgray ">
      <div className="h-[110vh] pb-[10vh] flex items-center">
        <div className=" lg:w-4/5 flex flex-col ">
          <div className="xl:text-5xl lg:text-4xl text-2xl font-bold text-mwhite xl:pl-32 lg:pl-24 md:pl-16 sm:pl-10 pl-6">
            Hi! I&apos;m Mrudul Suresh,
          </div>
          <h1 className=" xl:pl-32 lg:pl-24 md:pl-16 sm:pl-10 pl-6 xl:text-xl lg:text-lg text-base text-mwhite mt-4 w-auto pr-6 sm:pr-0">
            I am a second year Computer Engineering student at the University of Waterloo!
            Please feel free to take a look at my
            portfolio and reach out about anything!
          </h1>
          <div className=" lg:flex lg:space-x-4 space-y-2 lg:space-y-0 xl:pl-32 lg:pl-24 md:pl-16 sm:pl-10 pl-6 xl:text-xl lg:text-lg text-base mt-4 w-auto pr-6 sm:pr-0 cursor-pointer">
            <div>
              <Link target="_blank" href="https://github.com/Immrudul">
                <div className="herobutton">
                  <GitHubIcon />
                  <span className="pl-2 ">GitHub</span>
                </div>
              </Link>
            </div>
            <div>
              <Link
                target="_blank"
                href="https://ca.linkedin.com/in/mrudulsuresh"
              >
                <div className="herobutton">
                  <LinkedInIcon />
                  <span className="pl-2 ">LinkedIn</span>
                </div>
              </Link>
            </div>

            <div>
              <Link href="mailto:m22sures@uwaterloo.ca" target="_blank">
                <div className="herobutton">
                  <button>
                    <MailIcon />
                  </button>
                  <span className="pl-2 ">mrudul.suresh@uwaterloo.ca</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden sm:flex mx-[10%]">
          <Image
            src="https://mrudul-bucket1-s3.s3.us-east-2.amazonaws.com/Professional+PFP.jpg"
            alt="mrudul photo"
            className="object-cover w-full aspect-square rounded-full"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}
