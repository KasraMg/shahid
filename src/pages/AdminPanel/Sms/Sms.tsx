import React from "react";
import Layout from "../../../layouts/adminPanel";
import Title from "../../../components/modules/title/Title";
import { Button } from "../../../components/shadcn/ui/button";

const Sms = () => {
  return (
    <Layout>
      <div>
     

        <div className="mb-20">
          <Title className="sm:justify-center" title={" پیامک جدید   "} />

         <div className="flex gap-3 items-end sm:flex-col">
         <input placeholder="سلام..." type="text" className="p-3 outline-none border-b sm:w-full w-[300px] border-black" />
          <Button variant={"main"} className="sm:w-full">ثبت</Button>
         </div>
        </div>

        <Title className="sm:justify-center" title={" پیامک فعلی   "} />

<div className="flex justify-center bg-DoubleSpanishWhite py-3 text-black">
  <p>سلام به سایت ما خوش امدید</p>
</div>
      </div>
    </Layout>
  );
};

export default Sms;
