import Spinner from "@/app/components/Spinner";
import FormAndImg from "@/app/pages/contact-us/FormAndImg";
import { useLoadingContext } from "@/app/utils/loading_context";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function ContactUs() {
  const { isLoading } = useLoadingContext();
  if (isLoading) return <Spinner />;
  return (
    <div className="h-full w-full overflow-hidden">
      <FormAndImg />
    </div>
  );
}

export const getServerSideProps = async ({ locale }: { locale: string }) => {
  try {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["contact_us", "navbar"])),
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
