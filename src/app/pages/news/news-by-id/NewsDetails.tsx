import { IWhatsNewNews } from "@/app/types/Interfaces";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { FiArrowLeft } from "react-icons/fi";

export default function NewsDetails({ data, locale }: { data: IWhatsNewNews; locale: string }) {
  const router = useRouter();
  const { t } = useTranslation("news");

  return (
    <section className="w-full px-[16px] pt-[102px] pb-[50px] 1124:pt-[127px] 1124:px-[15%] relative 1920:px-[25%]">
      <button
        className=" font-inter_500 text-[14px] text-[#333333BD] px-[13px] py-[10px] rounded-[16px] bg-[#6EB63C1A] flex gap-[8px] items-center absolute top-[48px] 1124:top-[160px] 1124:left-[36px] 1920:left-[160px]"
        onClick={(e) => router.replace({ pathname: "/news" }, undefined, { locale: locale })}
      >
        <FiArrowLeft color="#333333" />
        <p className=" hidden 1124:block">{t("back")}</p>
      </button>
      <p className=" font-inter_400 text-[14px] pb-[2px] text-[#333333BD] 1124:text-[16px]">{data.created_at}</p>
      <h1 className=" font-pt_root_ui_700 text-[28px] leading-[36px] pb-[14px] text-text_grey 1124:text-[48px] 1124:leading-[56px] 1124:pb-[30px]">
        {data.title}
      </h1>
      <img
        src={data.image}
        alt="news photo"
        className=" object-cover w-full aspect-[1.8] rounded-[16px] mb-[16px] 1124:aspect-[1.7] 1124:mb-[32px]"
      />
      <div
        dangerouslySetInnerHTML={{ __html: data.description }}
        className=" font-inter_400 text-[14px] whitespace-pre-line flex flex-col gap-[12px] 1124:text-[16px] 1124:gap-[20px] 1124:px-[15%] 1600:text-[18px]"
      />
    </section>
  );
}
