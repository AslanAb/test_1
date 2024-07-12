import Spinner from "@/app/components/Spinner";
import ListOfNewsSection from "@/app/pages/news/ListOfNewsSection";
import Title from "@/app/pages/news/Title";
import { WhatsNewService } from "@/app/services/whats-new";
import { IWhatsNewCategories, IWhatsNewMain, IWhatsNewNews } from "@/app/types/Interfaces";
import { useLoadingContext } from "@/app/utils/loading_context";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function News({
  mainData,
  categoriesData,
  newsData,
  locale,
  newsDataTotalNumber,
}: {
  mainData: IWhatsNewMain;
  categoriesData: IWhatsNewCategories[];
  newsData: IWhatsNewNews[];
  locale: string;
  newsDataTotalNumber: number;
}) {
  const { isLoading } = useLoadingContext();
  if (isLoading) return <Spinner />;
  return (
    <div className="h-full w-full overflow-hidden">
      <Title mainData={mainData} />
      <ListOfNewsSection
        categoriesData={categoriesData}
        newsData={newsData}
        locale={locale}
        newsDataTotalNumber={newsDataTotalNumber}
      />
    </div>
  );
}

export const getServerSideProps = async ({ locale }: { locale: string }) => {
  try {
    const resMain = await WhatsNewService.getMain(locale);
    const mainData: IWhatsNewMain = resMain.data.data;

    const resCategories = await WhatsNewService.getNewsPageArticleCategories(locale);
    const categoriesData: IWhatsNewCategories[] = resCategories.data.data;

    const resNews = await WhatsNewService.getNews(locale, 1, 1);
    const newsData: IWhatsNewNews[] = resNews.data.data;
    const newsDataTotalNumber = resNews.data.meta.total;

    return {
      props: {
        ...(await serverSideTranslations(locale, ["news", "navbar"])),
        mainData,
        categoriesData,
        newsData,
        locale,
        newsDataTotalNumber,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
