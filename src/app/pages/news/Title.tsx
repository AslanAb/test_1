import { IWhatsNewMain } from "@/app/types/Interfaces";

export default function Title({ mainData }: { mainData: IWhatsNewMain }) {
  return (
    <div className="mx-auto max-w-[328px] px-[16px] pt-[48px] pb-[24px] text-center text-text_grey 576:max-w-[418px] 1124:pt-[60px] 1124:pb-[32px] 1124:max-w-[539px] 1160:pt-[100px] 1160:pb-[40px] ">
      <h3 className=" font-pt_root_ui_700 text-[28px] 576:text-[32px] 1124:text-[48px] 1600:text-[64px] ">{mainData.title}</h3>
      <p className=" font-inter_400 text-[14px] 1124:text-[16px] 1600:text-[18px] ">{mainData.subtitle}</p>
    </div>
  );
}
