import { useForm, SubmitHandler } from "react-hook-form";
import InputMask from "@mona-health/react-input-mask";
import { Checkbox } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { IFormInput } from "@/app/types/Interfaces";
import { ContactUsService } from "@/app/services/contact-us";
import { toast } from "react-toastify";
import { useTranslation } from "next-i18next";

export default function FormAndImg() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<IFormInput>();
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful]);
  const { t } = useTranslation("contact_us");

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const payload = {
      ...data,
      phone_number: parseInt(data.phone_number.replace(/\D/g, ""), 10),
    };
    try {
      const res = await ContactUsService.postContacts(payload);
      if (res.status !== 201) {
        toast.error(t("error_toast"));
        throw new Error(t("error_toast"));
      }
      toast.success(t("success_toast"));
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <div className="flex-1 h-full">
      <div className="flex flex-col items-center px-[16px] pt-[48px] pb-[160px] 1160:pt-[114px] 1400:w-[50%]">
        <div className="w-full max-w-[616px]">
          <p className=" font-pt_root_ui_700 text-[28px] text-text_grey pb-[28px] 576:text-[32px] 1160:text-[40px]">
            {t("contact_us")}
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            action=""
            className="flex flex-col text-[14px] text-text_grey 1160:text-[16px]"
          >
            <label className="font-inter_500 pb-[4px]">{t("name")}</label>
            <input
              {...register("name", { required: t("required") })}
              type="text"
              placeholder={t("enter_name")}
              className="font-inter_400 py-[8px] border-b border-[#33333333] placeholder:text-[#33333380] focus:outline-none"
            />
            {errors.name && <span className=" text-red-500 font-inter_400 mt-[4px]">{errors.name.message}</span>}
            <label className="font-inter_500 pb-[4px] mt-[24px] ">{t("email")}</label>
            <input
              {...register("email", {
                required: t("required"),
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: t("correct_email"),
                },
              })}
              placeholder={t("enter_email")}
              className="font-inter_400 py-[8px] border-b border-[#33333333] placeholder:text-[#33333380] focus:outline-none"
            />
            {errors.email && <span className=" text-red-500 font-inter_400 mt-[4px]">{errors.email.message}</span>}
            <label className="font-inter_500 pb-[4px] mt-[24px] ">{t("phone")}</label>
            <InputMask
              {...register("phone_number", {
                required: t("required"),
                pattern: { value: /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, message: t("correct_phone") },
              })}
              mask="+7 (999) 999-99-99"
              placeholder="+7 (___) ___-__-__"
              className="font-inter_400 py-[8px] border-b border-[#33333333] placeholder:text-[#33333380] focus:outline-none  "
            />
            {errors.phone_number && (
              <span className=" text-red-500 font-inter_400 mt-[4px]">{errors.phone_number.message}</span>
            )}
            <div className="flex pb-[24px] items-start font-inter_400 mt-[24px] ">
              <Checkbox
                defaultSelected
                color="primary"
                isSelected={isSelected}
                onValueChange={setIsSelected}
              ></Checkbox>
              <p className="">
                {t("i_agree")} <a className=" text-main_green underline cursor-pointer">{t("conf_policy")}</a>
              </p>
            </div>
            <button
              disabled={isSelected ? false : true}
              type="submit"
              className={`w-full font-inter_600 text-white bg-main_green rounded-[8px] py-[12px] flex justify-center ${
                !isSelected && "opacity-disabled"
              }`}
            >
              {t("submit")}
            </button>
          </form>
        </div>
      </div>
      <div className="w-[50%] h-full absolute right-0 bottom-0 top-0 hidden 1400:block">
        <img src="/images/contact_us.png" alt="contact-us" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
