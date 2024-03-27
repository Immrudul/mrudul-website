import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-mgray">
      <div className="h-[100vh] flex items-center">
        <div className="flex flex-col ">
          <div className="xl:text-5xl lg:text-4xl sm:text-3xl text-2xl font-bold text-mwhite xl:pl-32 lg:pl-24 md:pl-16 sm:pl-10 pl-6">
            Hi! Im Mrudul Suresh,
          </div>
          <div className=" xl:pl-32 lg:pl-24 md:pl-16 sm:pl-10 pl-6 xl:text-xl lg:text-lg text-base text-mwhite mt-4 w-auto pr-6 sm:pr-0">
            I am a 2A CS student at the University of Waterloo, specializing in
            HCI and Computational Fine Arts. I dream to solve problems in the
            world of computers and arts.
          </div>
        </div>
        <div className="hidden sm:flex mx-[10%]">
          <img
            src="Lovesick.png"
            alt="UWSD"
            className=" object-cover w-full aspect-square "
          />
        </div>
      </div>
    </div>
  );
}
