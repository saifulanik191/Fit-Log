import logo from "@/assets/logo.png";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="bg-[#323741] py-5 ">
      <footer className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 text-center sm:px-6 lg:flex-row lg:px-0 lg:text-left">
        <div className="flex items-center">
          <Image src={logo} alt="fitlogo" />
          <h2 className="pl-2 text-xl font-bold">FITLOG</h2>
        </div>

        <div>
          <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
