import { GitHubIcon } from "../../../public/icons/page";
import { LinkedInIcon } from "../../../public/icons/page";
import { YouTubeIcon } from "../../../public/icons/page";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <div className="bg-zinc-800 py-10 lg:flex lg:space-y-0 space-y-4  items-center justify-between px-12">
        <div className="text-mwhite text-2xl">Immrudul</div>
        <div className="lg:flex flex-col items-center">
          <div className="text-mwhite text-xs">
            Huge thank you to CuriousR82
          </div>
          <div className="text-mwhite text-xs">
            Very special thank you to FelysNeko
          </div>
        </div>
        <div className="flex space-x-2 text-mwhite">
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
    </div>
  );
}
