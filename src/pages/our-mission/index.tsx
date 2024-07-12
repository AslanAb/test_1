import { IOurMissionMain, IOurMissionValues } from "@/app/types/Interfaces";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import OurMissionSection from "@/app/pages/our-mission/OurMissonSection";
import { OurMissionService } from "@/app/services/our-mission";
import ValuesSection from "@/app/pages/our-mission/ValuesSection";
import { useLoadingContext } from "@/app/utils/loading_context";
import Spinner from "@/app/components/Spinner";

export default function OurMission({ mainData, valuesData }) {
  const { isLoading } = useLoadingContext();
  if (isLoading) return <Spinner />;
  return (
    <div className="h-full w-full overflow-hidden">
      <OurMissionSection mainData={mainData} />
      <ValuesSection valuesData={valuesData} />
    </div>
  );
}

export const getServerSideProps = async ({ locale }: { locale: string }) => {
  try {
    const resMain = await OurMissionService.getMain(locale);
    const mainData: IOurMissionMain = resMain.data.data;

    const resValues = await OurMissionService.getValues(locale);
    const valuesData: IOurMissionValues[] = resValues.data.data;

    return {
      props: {
        ...(await serverSideTranslations(locale, ["our_mission", "navbar"])),
        mainData,
        valuesData,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
