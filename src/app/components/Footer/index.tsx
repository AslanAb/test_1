import { useRouter } from "next/router";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const router = useRouter();

  const isContactUsPage = () => {
    return router.pathname.includes("/contact-us");
  };
  return (
    <footer
      className={`mx-[16px] 1124:mx-[36px] border-t border-main_grey z-10 ${isContactUsPage() && "1400:border-0"}`}
    >
      <div className="576:flex 576:flex-row-reverse 576:justify-between 576:items-center">
        <div className=" gap-[8px] flex justify-center items-center mt-[16px] 576:mb-[16px] ">
          <div
            className={`w-[30px] h-[30px] flex justify-center items-center rounded-full border border-main_grey text-[#0A2910BD]  hover:text-blue-500 duration-300 cursor-pointer ${
              isContactUsPage() && "1400:text-white"
            }`}
          >
            <FaFacebookF size={14} />
          </div>
          <div
            className={`w-[30px] h-[30px] flex justify-center items-center rounded-full border border-main_grey  text-[#0A2910BD] hover:text-black duration-300 cursor-pointer ${
              isContactUsPage() && "1400:text-white"
            }`}
          >
            <FaInstagram size={14} />
          </div>
          <div
            className={`w-[30px] h-[30px] flex justify-center items-center rounded-full border border-main_grey  text-[#0A2910BD] hover:text-red-500 duration-300 cursor-pointer ${
              isContactUsPage() && "1400:text-white"
            }`}
          >
            <FaYoutube size={14} />
          </div>
        </div>
        <div className="mt-[12px] 576:mt-[16px] mb-[20px] 576:mb-[16px] flex justify-center items-center ">
          <span className=" uppercase font-inter_400 text-[10px] text-[#0A2910BD] 576:text-sm">
            © Eurasia Group 2022
          </span>
        </div>
      </div>
    </footer>
  );
}
