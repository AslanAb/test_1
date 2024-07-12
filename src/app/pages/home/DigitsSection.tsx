import { IAboutDigits } from "@/app/types/Interfaces";
import { useTranslation } from "next-i18next";

export default function AboutSection({ digitsData }: { digitsData: IAboutDigits[] }) {
  const { t } = useTranslation("home");
  const title = t("we_are_in_numbers");
  const titleParts = title.split(" ");
  const titleLastWord = titleParts.pop();
  const titleFirstpart = titleParts.join(" ");
  
  return (
    <section className="w-full mb-[80px]">
      <h3 className=" font-pt_root_ui_700 text-[28px] text-text_grey uppercase mx-[24px] mb-[24px] 576:text-center 1124:text-[40px] 1600:text-[48px]">
        {titleFirstpart} <span className=" text-main_green">{titleLastWord}</span>
      </h3>
      <div className="flex">
        <div className="bg-[#6EB63C] w-1/2 h-[16px] 576:h-[20px] 1124:h-[40px] 1600:h-[50px]" />
        <div className="bg-[#C7D30A] w-1/2 h-[16px] 576:h-[20px] 1124:h-[40px] 1600:h-[50px]" />
      </div>
      <div className="flex flex-wrap">
        {digitsData.map((digit, index) => (
          <div
            key={digit.id}
            className="w-1/2 text-white py-[20px] px-[16px] text-center 576:py-[30px] 576:px-[24px]"
            style={{
              backgroundColor: index % 2 === 0 ? "#6EB63C" : "#C7D30A",
              borderBottomWidth:
                index === digitsData.length - 1 || (digitsData.length % 2 === 0 && index === digitsData.length - 2)
                  ? 0
                  : 1,
              borderColor: "#FFF8EE33",
            }}
          >
            <p className="font-pt_root_ui_700 text-[48px] 576:text-[64px] 1124:text-[84px] 1600:text-[96px]">
              {digit.title}
            </p>
            <p className=" font-inter_500 text-[12px] 576:text-[14px] 1124:text-[16px] leading-[16px] 576:leading-[20px] 1124:leading-[22px] 1600:text-[18px] 1600:leading-[24px]">
              .{digit.subtitle}
            </p>
          </div>
        ))}
        {digitsData.length % 2 !== 0 && <div className="w-1/2 bg-[#C7D30A]" />}
      </div>
      <div className="flex">
        <div className="bg-[#6EB63C] w-1/2 h-[16px] 576:h-[20px] 1124:h-[40px] 1600:h-[50px]" />
        <div className="bg-[#C7D30A] w-1/2 h-[16px] 576:h-[20px] 1124:h-[40px] 1600:h-[50px]" />
      </div>
    </section>
  );
}
