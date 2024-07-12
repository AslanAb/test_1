import { useState } from "react";
import Navbar from "../Navbar";
import Navbar_icon from "@/app/icons/navbar_icon";
import { Select, SelectItem } from "@nextui-org/react";
import Languages from "@/app/constants/languages";
import { useRouter } from "next/router";
import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";
import { useTranslation } from "next-i18next";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const languageSwitcher = (e: any) => {
    router.push({ pathname: router.pathname, query: router.query }, undefined, { locale: e.target.value });
  };

  const isContactUsPage = () => {
    return router.pathname.includes("/contact-us");
  };

  const { t } = useTranslation("navbar");

  return (
    <header
      className={`h-[58px] 1124:h-[82px] flex items-center justify-between mx-[16px] 1124:mx-[36px] 576:border-b 576:border-main_grey overflow-hidden z-10 ${
        isContactUsPage() && "1400:border-0"
      }`}
    >
      <Navbar_icon
        className="w-[36px] 1124:w-[46px] h-[26px] 1124:h-[28px] -ml-[8px] 1124:-ml-[12px] cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      />
      <Navbar setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
      <div className="w-[117px] h-full 124:w-[254px] cursor-pointer relative 1400:ml-[20px]">
        <Image
          src={"/images/logo.png"}
          quality={100}
          fill={true}
          alt="logo"
          className=" object-contain"
          sizes="(max-width: 120px) 10vw"
          priority
        />
      </div>
      {isContactUsPage() ? (
        <div className="hidden 1400:flex-1 1400:flex">
          <div className="w-[48%] h-full"></div>
          <button
            onClick={() => router.push({ pathname: "/", query: router.query }, undefined, { locale: router.locale })}
            className=" flex font-inter_600 text-[12px] text-white  py-[11px] px-[17px] border rounded-[50px] border-white uppercase items-center gap-[8px] hover:text-text_grey hover:bg-white duration-300"
          >
            <FiArrowLeft size={18} />
            <span>{t("to_main")}</span>
          </button>
        </div>
      ) : null}
      <div className="w-fit">
        <Select
          defaultSelectedKeys={[router.locale || "ru"]}
          onChange={languageSwitcher}
          selectionMode="single"
          selectorIcon={<></>}
          radius="full"
          aria-label="Select language"
          classNames={{
            base: "w-[27px] h-[27px] 1124:w-[34px] 1124:h-[34px]",
            mainWrapper: "w-[27px] h-[27px] 1124:h-[34px]",
            trigger: `px-0 w-[27px] h-[27px] 1124:w-[34px] 1124:h-[34px] min-h-[27px] ${
              isContactUsPage() && "1400:bg-[#FFF8EE1A]"
            } bg-main_grey data-[hover=true]:bg-main_grey`,
            innerWrapper: "w-[27px] h-[27px] 1124:w-[34px] 1124:h-[34px] flex justify-center items-center",
            value: `w-fit uppercase font-pt_root_ui_700 text-xs 1124:text-sm text-[#333333BD]  group-data-[has-value=true]:text-[#333333BD] ${
              isContactUsPage() && "1400:group-data-[has-value=true]:text-[#FFFFFFBD]"
            }`,
            popoverContent: "right-[10px]",
          }}
          popoverProps={{
            classNames: {
              base: "w-[55px] right-[27px] 1124:right-[17px]",
              content: `w-[55px] px-0 py-0 ${isContactUsPage() && "1400:bg-transparent"} `,
            },
            placement: "bottom-end",
          }}
          listboxProps={{
            classNames: {
              base: "w-[55px] bg-transparent",
              list: "w-[55px] py-0 px-0",
            },
            itemClasses: {
              wrapper: "bg-main_grey",
              title: `uppercase font-pt_root_ui_700 text-xs 1124:text-sm text-[#333333BD] ${
                isContactUsPage() && "1400:text-white"
              } `,
              selectedIcon: `text-[#333333BD] ${isContactUsPage() && "1400:text-white"}`,
            },
          }}
        >
          {Languages.map((lg) => (
            <SelectItem key={lg.key}>{lg.label}</SelectItem>
          ))}
        </Select>
      </div>
    </header>
  );
}
