import { IAboutMain } from "@/app/types/Interfaces";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import { LuArrowUpRight } from "react-icons/lu";

export default function AboutSection({ mainData }: { mainData: IAboutMain }) {
  const { t } = useTranslation("home");
  const router = useRouter();
  
  return (
    <section className="w-full px-[16px] 1160:pr-0 1160:pl-[36px] mb-[80px] flex flex-col items-center 1160:flex-row-reverse overflow-hidden">
      <div className="w-full 1160:w-[60%] 1160:right-[-50px] max-w-[700px] 1160:max-w-[2000px] relative flex justify-center 576:mt-[32px] 1124:mt-[60px]">
        <img
          src={mainData.image}
          alt="about image"
          className="w-full h-[200px] 576:h-[260px] 1124:h-[340px] 1160:h-[500px] 1600:h-[570px] 1920:h-[684px] object-cover 1160:object-cover rounded-[16px] mb-[16px]"
        />
        <div className="absolute top-[70px] 1160:hidden">
          <h1 className="font-pt_root_ui_700 text-[32px] uppercase text-white">
            <span className="bg-[#6EB63C] mr-[8px]">{mainData.title.split(" ")[0]}</span>
            <span className=" bg-[#C7D30A]">{mainData.title.split(" ")[1]}</span>
          </h1>
        </div>
      </div>
      <div className="1160:w-[40%]">
        <h2 className="hidden 1160:block font-pt_root_ui_700 text-[48px] 1600:text-[64px] uppercase">
          <span className="text-main_green mr-[12px]">{mainData.title.split(" ")[0]}</span>
          <span className="text-text_grey ">{mainData.title.split(" ")[1]}</span>
        </h2>
        <div
          dangerouslySetInnerHTML={{ __html: mainData.description }}
          className="my-list-disc text-sm 1124:text-base max-w-[700px] font-inter_400 leading-[24px] 1124:leading-[28px] 1600:leading-[32px]"
        />
        <Link
          href="/contact-us"
          locale={router.locale}
          className="w-full 1160:w-fit max-w-[700px] h-[56px] duration-300 border-[2px] border-main_green rounded-[50px] mx-auto 1160:mx-0 mt-[20px] px-[20px] flex items-center justify-center gap-[8px] cursor-pointer hover:bg-main_green text-main_green hover:text-white"
        >
          <span className=" uppercase font-inter_600 text-sm ">{t("contact_us")}</span>
          <LuArrowUpRight size={20} />
        </Link>
      </div>
    </section>
  );
}
