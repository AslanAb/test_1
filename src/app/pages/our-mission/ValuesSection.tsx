import { IOurMissionValues } from "@/app/types/Interfaces";
import { useTranslation } from "next-i18next";

export default function ValuesSection({ valuesData }: { valuesData: IOurMissionValues[] }) {
  const { t } = useTranslation("our_mission");

  return (
    <section className="w-full mb-[80px]">
      <h3 className=" font-pt_root_ui_700 text-[28px] text-main_green uppercase ml-[16px] mr-[26px] mb-[16px] 576:text-center 1124:text-[40px] 1600:text-[48px] leading-[33px]">
        {t("values")}
      </h3>
      <p className=" font-inter_400 text-[14px] text-text_grey mx-[16px] mb-[24px] leading-[24px] 576:text-center 576:w-[70%] 576:mx-auto 1124:text-[16px] 1124:leading-[28px] 1124:w-[50%] 1600:text-[18px] 1600:leading-[32px] 1600:w-[40%]">
        {t("values_description")}
      </p>
      <div className="flex">
        <div className="bg-[#6EB63C] w-1/2 h-[16px] 576:h-[20px] 1124:h-[40px] 1600:h-[50px]" />
        <div className="bg-[#C7D30A] w-1/2 h-[16px] 576:h-[20px] 1124:h-[40px] 1600:h-[50px]" />
      </div>
      <div className="flex flex-wrap">
        {valuesData.map((value, index) => (
          <div
            key={value.id}
            className="w-1/2 text-white py-[20px] px-[16px] 576:py-[30px] 576:px-[24px] 1124:px-[36px] 1124:py-[40px] 1400:px-[160px] 1400:py-[50px]"
            style={{
              backgroundColor: index % 2 === 0 ? "#6EB63C" : "#C7D30A",
              borderBottomWidth:
                index === valuesData.length - 1 || (valuesData.length % 2 === 0 && index === valuesData.length - 2)
                  ? 0
                  : 1,
              borderColor: "#FFF8EE33",
            }}
          >
            <img
              src={value.icon}
              alt="icon"
              className="w-[25px] object-contain text-white mb-[8px] 576:w-[30px] 1124:w-[35px]"
            />
            <p className="font-pt_root_ui_700 text-[16px] 576:text-[20px] 1124:text-[32px] mb-[8px]">{value.title}</p>
            <p className=" font-inter_500 text-[12px] 576:text-[14px] 1124:text-[14px] leading-[16px] 576:leading-[20px] 1124:leading-[22px] 1600:text-[18px] 1600:leading-[24px]">
              .{value.subtitle}
            </p>
          </div>
        ))}
        {valuesData.length % 2 !== 0 && <div className="w-1/2 bg-[#C7D30A]" />}
      </div>
      <div className="flex">
        <div className="bg-[#6EB63C] w-1/2 h-[16px] 576:h-[20px] 1124:h-[40px] 1600:h-[50px]" />
        <div className="bg-[#C7D30A] w-1/2 h-[16px] 576:h-[20px] 1124:h-[40px] 1600:h-[50px]" />
      </div>
    </section>
  );
}
