import { Pagination, PaginationItemRenderProps, PaginationItemType } from "@nextui-org/react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
export default function PaginationComponent({
  currentPage,
  setCurrentPage,
  totalNumber
}: {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalNumber: number;
}) {
  const renderItem = ({
    ref,
    key,
    value,
    isActive,
    onNext,
    onPrevious,
    setPage,
    className,
  }: PaginationItemRenderProps) => {
    if (value === PaginationItemType.NEXT) {
      return (
        <button key={key} className=" text-[#3333338A] text-[20px] 1124:text-[24px]" onClick={onNext}>
          <FiArrowRight />
        </button>
      );
    }

    if (value === PaginationItemType.PREV) {
      return (
        <button key={key} className="text-[#3333338A] text-[20px] 1124:text-[24px]" onClick={onPrevious}>
          <FiArrowLeft />
        </button>
      );
    }

    if (value === PaginationItemType.DOTS) {
      return (
        <button
          key={key}
          className="w-[36px] text-text_grey font-inter_500 text-[14px] rounded-full p-[8px] aspect-square"
        >
          ...
        </button>
      );
    }

    return (
      <button
        key={key}
        ref={ref}
        className={`w-[36px] font-inter_500 text-[14px] rounded-full p-[8px] aspect-square 1124:text-[16px] 1124:w-[38px] ${
          isActive ? "text-transparent" : "text-text_grey"
        }`}
        onClick={() => setPage(value)}
      >
        {value}
      </button>
    );
  };
  return (
    <Pagination
      showControls
      total={totalNumber}
      initialPage={1}
      className="gap-[8px] 1124:gap-[12px] pb-[80px] 1124:pb-[120px] 1400:pb-[150px]"
      classNames={{
        wrapper: "p-0",
        cursor: "bg-[#6EB63C1A] text-text_grey font-inter_500 text-[14px] 1124:text-[16px]",
      }}
      radius="full"
      renderItem={renderItem}
      page={currentPage}
      onChange={(e) => setCurrentPage(e)}
    />
  );
}
