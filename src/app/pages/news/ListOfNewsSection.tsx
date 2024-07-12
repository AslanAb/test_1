import { WhatsNewService } from "@/app/services/whats-new";
import { IWhatsNewCategories, IWhatsNewNews } from "@/app/types/Interfaces";
import { useEffect, useRef, useState } from "react";
import PaginationComponent from "@/app/components/Pagination";
import { useRouter } from "next/router";
import { ThreeCircles } from "react-loader-spinner";
import { toast } from "react-toastify";
import { useTranslation } from "next-i18next";
import { Skeleton } from "@nextui-org/react";

export default function ListOfNewsSection({
  categoriesData,
  newsData,
  locale,
  newsDataTotalNumber,
}: {
  categoriesData: IWhatsNewCategories[];
  newsData: IWhatsNewNews[];
  locale: string;
  newsDataTotalNumber: number;
}) {
  const [news, setNews] = useState<IWhatsNewNews[]>(newsData);
  const [activeCategory, setActiveCategory] = useState<number>();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalNumber, setTotalNumber] = useState(newsDataTotalNumber);
  const scrollContainerRef = useRef(null);
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [newsIsLoaded, setNewsIsLoaded] = useState(true);
  const { t } = useTranslation("news");

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) {
      return;
    }
    const handleWheel = (event) => {
      if (event.deltaY === 0) return;
      event.preventDefault();
      // @ts-ignore
      scrollContainer.scrollTo({
        // @ts-ignore
        left: scrollContainer.scrollLeft + event.deltaY,
      });
    };

    // @ts-ignore
    scrollContainer.addEventListener("wheel", handleWheel);
    // @ts-ignore
    return () => scrollContainer.removeEventListener("wheel", handleWheel);
  }, []);

  useEffect(() => {
    (async () => {
      try {
        setNewsIsLoaded(false);
        let res;
        if (!activeCategory) {
          res = await WhatsNewService.getNews(locale, currentPage, 1);
        } else {
          res = await WhatsNewService.getNewsByCategory(locale, activeCategory, currentPage, 1);
        }
        if (res.status !== 200) {
          throw new Error("Failed to fetch data");
        }
        const data: IWhatsNewNews[] = res.data.data;
        setNews(data);
      } catch (error) {
        toast.error(t("error"));
      } finally {
        setNewsIsLoaded(true);
      }
    })();
  }, [currentPage]);

  const categoryBtnHandler = async (categoryId: number) => {
    try {
      setIsLoading(true);
      let res;
      if (activeCategory === categoryId) {
        res = await WhatsNewService.getNews(locale, 1, 1);
        setActiveCategory(undefined);
      } else {
        res = await WhatsNewService.getNewsByCategory(locale, categoryId, 1, 1);
        setActiveCategory(categoryId);
      }
      if (res.status !== 200) {
        throw new Error("Failed to fetch data");
      }

      const data: IWhatsNewNews[] = res.data.data;
      setNews(data);
      setCurrentPage(1);
      setTotalNumber(res.data.meta.total);
    } catch (error) {
      toast.error(t("error"));
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading)
    return (
      <div className="mt-[20px] w-full flex justify-center">
        <ThreeCircles visible={true} height="80" width="80" color="#6EB63C" ariaLabel="three-circles-loading" />
      </div>
    );

  return (
    <section className="px-[16px] 1124:px-[36px] 1920:px-[160px] flex flex-col items-center">
      <div
        className="w-fit max-w-full flex gap-[8px] text-nowrap overflow-x-auto scrollContainer 1124:gap-[16px]"
        ref={scrollContainerRef}
      >
        {categoriesData.map((category) => (
          <button
            onClick={() => categoryBtnHandler(category.id)}
            key={category.id}
            className={`font-inter_500 text-[12px] py-[8px] px-[12px] rounded-[50px] border 576:text-[14px] 1600:text-[16px] hover:border-main_green hover:bg-main_green hover:text-white duration-300 ${
              activeCategory === category.id
                ? "border-main_green bg-main_green text-white"
                : "border-text_grey text-text_grey "
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap justify-center pt-[16px] pb-[48px] gap-[16px] 576:pt-[24px] 1124:gap-[24px] 1124:pt-[32px] 1160:gap-[32px] ">
        {news.map((news, index) => (
          <div key={news.id} className=" text-text_grey 576:w-[48%] mb-[8px] 1124:mb-[16px] 1160:mb-[8px] 1160:w-[31%]">
            <Skeleton
              isLoaded={newsIsLoaded}
              className="w-full rounded-[8px] aspect-[2.1] mb-[12px] 576:aspect-[1.4] 576:mb-[16px] 1160:aspect-[1.36] 1160:mb-[24px]"
            >
              <img
                src={news.image}
                alt="news photo"
                className=" object-cover w-full aspect-[2.1] rounded-[8px] mb-[12px] 576:aspect-[1.4] 576:mb-[16px] 1160:aspect-[1.36] 1160:mb-[24px]"
              />
            </Skeleton>
            <Skeleton isLoaded={newsIsLoaded} className="mb-[6px] 576:mb-[8px] text-[18px] leading-[24px]">
              <h4
                className=" font-pt_root_ui_700 text-[18px] leading-[24px] mb-[6px] 576:mb-[8px] 1124:text-[24px] 1124:leading-[32px] hover:underline cursor-pointer"
                onClick={() =>
                  router.push({ pathname: `/news/[id]`, query: { id: `${news.id}` } }, undefined, {
                    locale: router.locale,
                  })
                }
              >
                {news.title}
              </h4>
            </Skeleton>
            <Skeleton isLoaded={newsIsLoaded} className="text-[14px] mb-[6px] 1124:text-[16px] 1124:mb-[8px]">
              <div
                dangerouslySetInnerHTML={{ __html: news.description }}
                className=" font-inter_400 text-[14px] textEllipsis overflow-hidden mb-[6px] 1124:text-[16px] 1124:mb-[8px]"
              />
            </Skeleton>
            <Skeleton isLoaded={newsIsLoaded} className="text-[12px] 1124:text-[14px]">
              <p className="font-inter_400 text-[12px] text-[#333333BD] 1124:text-[14px]">{news.created_at}</p>
            </Skeleton>
          </div>
        ))}
      </div>
      <PaginationComponent currentPage={currentPage} setCurrentPage={setCurrentPage} totalNumber={totalNumber} />
    </section>
  );
}
