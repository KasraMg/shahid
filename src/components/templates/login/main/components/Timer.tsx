import usePostData from "../../../../../hooks/usePostData";
import { Button } from "../../../../shadcn/ui/button";
import { getFromLocalStorage } from "../../../../../utils/utils";
import { useEffect, useState } from "react";
import { ButtonLoader } from "../../../../modules/loader/Loader";

const Timer = () => {
  const otpLoginPhoneNumber = getFromLocalStorage("otpLoginPhoneNumber");
  const otpRegisterPhoneNumber = getFromLocalStorage("otpRegisterPhoneNumber");
  const phoneNumber = otpLoginPhoneNumber || otpRegisterPhoneNumber;
  const [timer, setTimer] = useState<number>(0);

  const { mutate: resendCode, isPending } = usePostData<{
    phoneNumber: string;
  }>("/api/user/CheckPhoneNumber", null, false);

  useEffect(() => {
    let interval: any;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          const newTimer = prevTimer - 1;
          localStorage.setItem(
            "otpResendTimer",
            (Math.floor(Date.now() / 1000) + newTimer).toString(),
          );
          return newTimer;
        });
      }, 1000);
    } else if (timer === 0 && interval) {
      clearInterval(interval);
      localStorage.removeItem("otpResendTimer");
    }
    return () => clearInterval(interval);
  }, [timer]);

  const resendCodeHandler = () => {
    setTimer(59);
    localStorage.setItem(
      "otpResendTimer",
      (Math.floor(Date.now() / 1000) + 59).toString(),
    );
    resendCode({ phoneNumber });
  };

  useEffect(() => {
    const savedTimer = localStorage.getItem("otpResendTimer");
    if (savedTimer) {
      const remainingTime =
        parseInt(savedTimer, 10) - Math.floor(Date.now() / 1000);
      if (remainingTime > 0) {
        setTimer(remainingTime);
      }
    }
  }, []);
  return (
    <div>
      {timer > 0 ? (
        <div className="w-full justify-center text-center text-sm">
          {`${Math.floor(timer / 60)}:${timer % 60 < 10 ? `0${timer % 60}` : timer % 60} ثانیه تا ارسال مجدد کد  `}
        </div>
      ) : (
        <Button
          onClick={resendCodeHandler}
          className="w-full justify-center !rounded-sm !px-4 text-sm"
          variant={"main"}
        >
          {isPending ? <ButtonLoader /> : "ارسال دوباره کد"}
        </Button>
      )}
    </div>
  );
};

export default Timer;
