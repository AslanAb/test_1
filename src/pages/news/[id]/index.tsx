import Spinner from "@/app/components/Spinner";
import NewsDetails from "@/app/pages/news/news-by-id/NewsDetails";
import { WhatsNewService } from "@/app/services/whats-new";
import { IWhatsNewNews } from "@/app/types/Interfaces";
import { useLoadingContext } from "@/app/utils/loading_context";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function NewsById({ data, locale }: { data: IWhatsNewNews; locale: string }) {
  const { isLoading } = useLoadingContext();
  if (isLoading) return <Spinner />;
  return (
    <div className="h-full w-full overflow-hidden">
      <NewsDetails data={data} locale={locale} />
    </div>
  );
}

export const getServerSideProps = async ({ locale, query }: { locale: string; query: any }) => {
  try {
    const res = await WhatsNewService.getNewsById(locale, query.id as string);
    const data: IWhatsNewNews = res.data.data;
    return {
      props: {
        ...(await serverSideTranslations(locale, ["news", "navbar"])),
        data,
        locale,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
