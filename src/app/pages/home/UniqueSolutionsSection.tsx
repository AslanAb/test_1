import { IAboutUniqueSolutions } from "@/app/types/Interfaces";
import { useTranslation } from "next-i18next";

export default function UniqueSolutionsSection({
  uniqueSolutionsData,
}: {
  uniqueSolutionsData: IAboutUniqueSolutions[];
}) {
  const { t } = useTranslation("home");

  return (
    <section className="w-full mb-[80px]">
      <h3 className=" font-pt_root_ui_700 text-[28px] text-text_grey uppercase ml-[16px] mr-[26px] mb-[16px] 576:text-center 1124:text-[40px] 1600:text-[48px] leading-[33px]">
        {t("unique_solutions")}
      </h3>
      <p className=" font-inter_400 text-[14px] text-text_grey mx-[16px] mb-[24px] leading-[24px] 576:text-center 576:w-[70%] 576:mx-auto 1124:text-[16px] 1124:leading-[28px] 1124:w-[50%] 1600:text-[18px] 1600:leading-[32px] 1600:w-[40%]">
        {t("unique_solutions_description")}
      </p>
      <div className="flex flex-wrap gap-[20px] 1124:gap-[50px] 1124:justify-center">
        {uniqueSolutionsData.map((data, index) => (
          <div
            key={data.id}
            className="w-full px-[16px] 576:flex 576:items-center 576:flex-col 576:text-center 1124:p-[20px] 1124:flex-row 1124:justify-center 1124:w-[45%] 1124:text-left 1400:w-[40%]"
          >
            <p className="font-pt_root_ui_700 text-[48px] text-main_green 576:text-[64px] 576:w-fit 1124:text-[84px] 1124:mr-[20px] 1600:text-[96px]">
              {data.title}
            </p>
            <p className=" font-inter_400 text-[12px] text-text_grey leading-[16px] w-[60%] 576:text-[14px] 576:leading-[20px] 576:w-[50%] 1124:text-[18px] 1124:leading-[24px]">
              .{data.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
