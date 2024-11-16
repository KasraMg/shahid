import { ButtonLoader } from "../../../../modules/loader/Loader";
import { Button } from "../../../../shadcn/ui/button";
// import usePostData from "@/src/hooks/usePostData";
import {
  getFromLocalStorage,
  saveIntoLocalStorage,
} from "../../../../../utils/utils";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "../../../../../hooks/use-toast";
const Login = ({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [regexError, setRegextError] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const successFunc = (data: { statusCode: number }) => {
    if (data.statusCode === 200) {
      saveIntoLocalStorage("otpRegisterPhoneNumber", phoneNumber);
      setStep("register");
      localStorage.removeItem("otpLoginPhoneNumber");
    } else if (data.statusCode === 411) {
      saveIntoLocalStorage("otpLoginPhoneNumber", phoneNumber);
      localStorage.removeItem("otpRegisterPhoneNumber");
      setStep("otp");
    } else if (data.statusCode === 409) {
      toast({
        variant: "danger",
        title: "این شماره قادر به ورود به سایت نیست",
      });
    }
  };

  // const { mutate: mutation, isPending } = usePostData<{ phone: string }>(
  //   "/signup",
  //   null,
  //   false,
  //   successFunc,
  // );

  const submitHandler = () => {
    const phoneRegex = RegExp(/^(09)[0-9]{9}$/);
    const phoneRegexResult = phoneRegex.test(phoneNumber);
    if (phoneRegexResult) {
      setRegextError(false);
      // mutation({ phone: phoneNumber });
    } else setRegextError(true);
  };

  useEffect(() => {
    const otpLoginPhoneNumber = getFromLocalStorage("otpLoginPhoneNumber");
    const otpRegisterPhoneNumber = getFromLocalStorage(
      "otpRegisterPhoneNumber",
    );
    const prevPhoneNumber = otpLoginPhoneNumber || otpRegisterPhoneNumber;
    if (prevPhoneNumber) {
      setPhoneNumber(prevPhoneNumber);
    }
  }, []);

  return (
    <div className="w-full sm:!pb-20" dir="rtl">
      <p className="text-lg font-bold">ورود / ثبت‌نام</p>
      <span className="mt-3 block text-sm font-thin">
        برای ورود یا ثبت‌نام، شماره همراه خود را وارد کنید
      </span>
      <div className="relative mt-10">
        <input
          dir="ltr"
          className="w-full rounded-lg border border-solid border-gray-400 py-3 pl-11 pr-3 text-sm"
          type="number"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
        {regexError && (
          <span className="mt-1 block text-center text-xs text-red-600">
            شماره وارد شده معتبر نمی‌باشد
          </span>
        )}
        <span className="absolute left-3 top-[12px] font-thin" style={{fontFamily:"sans-serif"}}>+98</span>
        <span className="absolute -top-6 right-3 p-2 bg-white px-1 text-xs rounded-lg">
          شماره همراه
        </span>
      </div>
      <Button
        className="mt-6 h-[36px] w-full justify-center !rounded-full text-center"
        variant={"main"}
        disabled={phoneNumber.length !== 11 ? true : false}
        onClick={submitHandler}
      >
        {/* {isPending ? <ButtonLoader /> : "ادامه"} */}
        ادامه
      </Button>
      <Link
        to={"/rules"}
        className="border-brown mx-auto mt-4 block w-max border-b-2 border-solid pb-2"
      >
        قوانین و مقررات
      </Link>
    </div>
  );
};

export default Login;