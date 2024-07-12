import { AboutCompanyService } from "@/app/services/about-companies";
import AboutSection from "@/app/pages/home/AboutSection";
import DigitsSection from "@/app/pages/home/DigitsSection";
import { IAboutDigits, IAboutMain, IAboutUniqueSolutions } from "@/app/types/Interfaces";
import UniqueSolutionsSection from "@/app/pages/home/UniqueSolutionsSection";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useLoadingContext } from "@/app/utils/loading_context";
import Spinner from "@/app/components/Spinner";

export default function Home({ mainData, digitsData, uniqueSolutionsData }) {
  const { isLoading } = useLoadingContext();
  if (isLoading) return <Spinner />;

  return (
    <div className="h-full w-full overflow-hidden">
      <AboutSection mainData={mainData} />
      <DigitsSection digitsData={digitsData} />
      <UniqueSolutionsSection uniqueSolutionsData={uniqueSolutionsData} />
    </div>
  );
}

export const getServerSideProps = async ({ locale }: { locale: string }) => {
  try {
    const resMain = await AboutCompanyService.getMain(locale);
    const mainData: IAboutMain = resMain.data.data;

    const resDigits = await AboutCompanyService.getDigits(locale);
    const digitsData: IAboutDigits[] = resDigits.data.data;

    const resUniqueSolutions = await AboutCompanyService.getUniqueSolutions(locale);
    const uniqueSolutionsData: IAboutUniqueSolutions[] = resUniqueSolutions.data.data;

    return {
      props: {
        ...(await serverSideTranslations(locale, ["home", "navbar"])),
        mainData,
        digitsData,
        uniqueSolutionsData,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
