import { useEffect, useState } from "react";
import Header from "../../components/modules/header/Header";
import { getFromLocalStorage } from "../../utils/utils";
import Otp from "../../components/templates/login/main/components/Otp";
import Register from "../../components/templates/login/main/components/Register";
import Password from "../../components/templates/login/main/components/Password";
import Login from "../../components/templates/login/main/components/Login";

const Index = () => {
  const [step, setStep] = useState<string>("login");

  useEffect(() => {
    const registerPhoneNumber = getFromLocalStorage("otpRegisterPhoneNumber");
    const otpLoginPhoneNumber = getFromLocalStorage("otpLoginPhoneNumber");
    const registerUserData = getFromLocalStorage("registerUserData");

    if (!otpLoginPhoneNumber) {
      if (!registerUserData) {
        if (registerPhoneNumber) {
          setStep("register");
        }
      } else {
        setStep("login");
      }
    } else {
      setStep("password");
    }
  }, []);

  return (
    <div>
      <Header />
      <div className="flex items-center   pt-32 ">
        <div className="w-1/2 mr-36 ">
          {step === "login" && <Login setStep={setStep} />}
          {step === "otp" && <Otp setStep={setStep} />}
          {step === "register" && <Register setStep={setStep} />}
          {step === "password" && <Password setStep={setStep} />}
        </div>

        <img
          src="/images/flower.png"
          className=" absolute left-0 bottom-0"
          style={{transform:'rotateY:180deg'}}
          alt=""
        />
      </div>
    </div>
  );    
};

export default Index;
