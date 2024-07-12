import { useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { LuArrowUpRight } from "react-icons/lu";
import { FaFacebook, FaInstagram, FaYoutube, FaRegCopyright } from "react-icons/fa";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export default function Navbar(props: { setIsModalOpen: (arg0: boolean) => void; isModalOpen: boolean }) {
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    let timeoutId: any;
    if (props.isModalOpen) {
      timeoutId = setTimeout(() => {
        setIsContentVisible(true);
      }, 0);
    } else {
      setIsContentVisible(false);
    }
    return () => clearTimeout(timeoutId);
  }, [props.isModalOpen]);

  useEffect(() => {
    if (!isContentVisible) {
      setTimeout(() => {
        props.setIsModalOpen(false);
      }, 500);
    }
  }, [isContentVisible]);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target
      if (ref.current && !ref.current.contains(target)) {
        setIsContentVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const { t } = useTranslation("navbar");
  const router = useRouter();

  return (
    <div
      className="w-full h-screen absolute left-0 top-0 bg-[#26495E] bg-opacity-40 z-20"
      style={{ display: props.isModalOpen ? "block" : "none" }}
      aria-modal
      role="navigation"
    >
      <div
        ref={ref}
        className="overflow-hidden w-full 576:w-[420px] h-full pt-[16px] pb-[12px]  shadow-md bg-white transition-transform duration-500 ease-in-out flex flex-col"
        style={{ transform: isContentVisible ? "translateX(0)" : "translateX(-100%)" }}
      >
        <button className="flex justify-end mr-[16px] mb-[40px] 576:mb-[90px]">
          <IoMdClose
            onClick={() => {
              setIsContentVisible(false);
            }}
            color="#3333338A"
            size={19}
          />
        </button>
        <Link
          href="/"
          locale={router.locale}
          onClick={() => setIsContentVisible(false)}
          className="hover:scale-125 duration-300  w-full h-[84px] border-t border-b border-main_grey border-opacity-10 flex justify-center items-center"
        >
          <span className=" font-inter_500 text-xl text-text_grey opacity-[0.87]">{t("about_company")}</span>
        </Link>
        <Link
          href="/our-mission"
          locale={router.locale}
          onClick={() => setIsContentVisible(false)}
          className="hover:scale-125 duration-300 w-full h-[84px] flex justify-center items-center"
        >
          <span className=" font-inter_500 text-xl text-text_grey opacity-[0.87]">{t("our_mission")}</span>
        </Link>
        <Link
          href="/news"
          locale={router.locale}
          onClick={() => setIsContentVisible(false)}
          className="hover:scale-125 duration-300 w-full h-[84px] border-t border-b border-main_grey border-opacity-10 flex justify-center items-center mb-[30px]"
        >
          <span className=" font-inter_500 text-xl text-text_grey opacity-[0.87]">{t("whats_new")}</span>
        </Link>
        <Link
          href="/contact-us"
          locale={router.locale}
          onClick={() => setIsContentVisible(false)}
          className="hover:border-main_green duration-300 text-text_grey hover:text-main_green w-fit h-[64px] border border-main_grey border-opacity-10 rounded-[50px] mx-auto px-[40px] flex items-center gap-[8px] cursor-pointer"
        >
          <span className=" uppercase font-inter_500 text-xl opacity-[0.87]">{t("contact_us")}</span>
          <LuArrowUpRight size={24} />
        </Link>
        <div className="flex flex-col flex-1 justify-end">
          <div className=" gap-[16px] flex justify-center items-center mt-[16px]">
            <FaFacebook size={24} className="text-[#3333338A] hover:text-blue-500 duration-300 cursor-pointer" />
            <FaInstagram size={24} className="text-[#3333338A] hover:text-black duration-300 cursor-pointer" />
            <FaYoutube size={24} className="text-[#3333338A] hover:text-red-500 duration-300 cursor-pointer" />
          </div>
          <div className="mt-[16px] mb-[16px] 576:mb-[32px] flex justify-center gap-2 items-center">
            <span className=" uppercase font-inter_500 text-xs text-text_grey opacity-55 ">© Eurasia Group 2022</span>
          </div>
        </div>
      </div>
    </div>
  );
}
