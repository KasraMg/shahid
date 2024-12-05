"use client";
import { Button } from "../../../../shadcn/ui/button";
import { getFromLocalStorage } from "../../../../../utils/utils";
// import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { ButtonLoader } from "../../../../modules/loader/Loader";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "../../../../shadcn/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import Cookies from "js-cookie";
import Timer from "./Timer";
import { toast } from "../../../../../hooks/use-toast";
import usePostData from "../../../../../hooks/usePostData";
import { useQueryClient } from "@tanstack/react-query";
import { ButtonLoader } from "../../../../modules/loader/Loader";
import { useNavigate } from "react-router-dom";
const Otp = ({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const otpLoginPhoneNumber = getFromLocalStorage("otpLoginPhoneNumber");
  const otpRegisterPhoneNumber = getFromLocalStorage("otpRegisterPhoneNumber");
  const phoneNumber = otpLoginPhoneNumber || otpRegisterPhoneNumber;
  const queryClient = useQueryClient();
  const [otpCode, setOtpCode] = useState("");
  const navigate = useNavigate();
  const successFunc = (data: {
    statusCode: number;
    token: string;
    message: string;
  }) => {
    console.log(data);

    if (data.statusCode === 200) {
      Cookies.set("martyrToken", data.token, {
        expires: 9999999,
        path: "",
      }); 
      queryClient.invalidateQueries({ queryKey: ["auth"] });
      toast({
        variant: "success",
        title: otpLoginPhoneNumber
          ? "با موفقیت وارد شدید"
          : "با موفقیت ثبت نام شدید",
      });
      navigate("/");
    } else if (data.statusCode === 400) {
      toast({
        variant: "danger",
        title: data.message,
      });
    } else {
      toast({
        variant: "danger",
        title: "با عرض پوزش لطفا مجدد مراحل رو طی کنید",
      });
      location.reload();
      localStorage.clear();
    }
  };

  const { mutate: mutation, isPending } = usePostData<{ code: string }>(
    "/api/user/VerifyCode",
    null,
    false,
    successFunc,
  );

  const submitHandler = () => {
    const data = { code: otpCode, phoneNumber };
    mutation(data);
  };

  return (
    <div className="w-full" dir="rtl">
      <div className="flex items-center justify-between">
        <p style={{ fontFamily: "system-ui" }} dir="ltr">
          +98{phoneNumber?.slice(1, 11)}
        </p>
        <Button
          onClick={() => setStep("login")}
          className="!rounded-sm !px-4"
          variant={"default"}
        >
          ویرایش
        </Button>
      </div>
      <p className="mt-4 text-center sm:!mt-4">
        کد فعالسازی 4 رقمی به شماره موبایل شما پیامک شد
      </p>
      <div className="relative my-6 flex flex-col items-center justify-center gap-2 sm:!flex-row sm:!gap-0">
        <p className="">کد فعالسازی را وارد کنید</p>
        <InputOTP
          value={otpCode}
          type="text"
          dir="ltr"
          inputMode="numeric"
          onChange={(value) => setOtpCode(value)}
          maxLength={5}
          pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
        >
          <InputOTPGroup dir="ltr">
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <span className="mb-3 block text-center text-sm text-red-600" dir="rtl">
        در صورت نیامدن کد، پیامک های spam گوشیتون رو هم چک کنید
      </span>
      <Timer />
      <Button
        disabled={otpCode.length !== 5 ? true : false}
        className="mt-5 h-[36px] w-full justify-center !rounded-full text-center"
        variant={"main"}
        onClick={submitHandler}
      >
        {isPending ? <ButtonLoader /> : "ورود"}
      </Button>
      {!otpRegisterPhoneNumber ? (
        <Button
          onClick={() => setStep("password")}
          className={`mx-auto mt-5 !block !rounded-full !px-4 font-thin`}
          variant={"default"}
        >
          ورود با رمز عبور
        </Button>
      ) : null}
    </div>
  );
};

export default Otp;
