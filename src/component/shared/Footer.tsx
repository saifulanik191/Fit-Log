import logo from "@/assets/logo.png";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="bg-[#323741] py-5">
      <footer className=" container mx-auto flex justify-between  items-center">
        <div className="flex">
          <Image src={logo} alt="fitlogo" />
          <h2 className="font-bold pl-2 text-xl">FITLOG</h2>
        </div>
        <div>
          <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
