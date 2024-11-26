import Header from "../../../../components/modules/header/Header";
import { MdModeEdit } from "react-icons/md";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useState } from "react";
import { Button } from "../../../../components/shadcn/ui/button";
import { Link } from "react-router-dom"; 
const Step2 = () => {
  const [selectedDate, setSelectedDate] = useState("۱۴۰۳/۰۹/۰۶");
  return (
    <div>
      <Header />
      <div className="flex flex-col min-h-screen">

      <div 
        className={` mt-20 flex-grow rounded-t-[120px] bg-white px-24 pt-20 pb-0 xs:!px-4 sm:pt-10 md:px-10`}
      >


      <div className="mx-auto w-[730px] md:w-full md:px-4">
        <p className="text-center text-xl">
          لطفا مشخصات مرحوم را وارد نمایید
        </p>
        <div className="mt-10 flex sm:flex-col-reverse justify-between gap-7">
          <div className="md:w-full">
            <p dir="rtl" className="text-right md:text-sm text-blue-500">
              تاریخ وفات*
            </p>
            <DatePicker
              value={selectedDate}
              onChange={setSelectedDate as any}
              calendar={persian}
              locale={persian_fa}
              hideOnScroll
              editable={false}
              calendarPosition="bottom-left"
            />
          </div>
          <div className="md:w-full">
            <p className="text-right md:text-sm text-blue-500">جنسیت</p>
            <select
              dir="rtl"
              className="mt-0.5 md:w-full w-[214px] border-b border-black bg-transparent outline-none"
              name=""
              id=""
            >
              <option value="man">مرد</option>
              <option value="woman">زن</option>
            </select>
          </div>
          <div className="md:w-full" dir="rtl">
            <p className="text-right md:text-sm text-blue-500">
              نام و نام خانوادگی مرحوم*
            </p>
            <input
              type="text"
              placeholder="حسین رحیمی..."
              className="border-b md:w-full border-black bg-transparent px-2 py-2 outline-none"
            />
          </div>
        </div>

        <div className="w-full text-center">
          <div className="relative mx-auto mt-7 h-24 w-24 rounded-full border border-dashed border-black">
            <input
              type="file"
              className="absolute z-50 left-0 top-0 h-full w-full opacity-0"
            />
            <img
              className="h-full w-full rounded-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROsg5Z7zuvts1CnGRPYNP4OB_m9W009hdnjA&s"
              alt=""
            />
            <div className="absolute z-10 bottom-2 right-0 rounded-full bg-brown p-1 text-white">
              <MdModeEdit />
            </div>
          </div>
          <p className="mt-5">برای انتخاب عکس، کادر بالا را لمس کنید</p>
          <p className="mt-2">
            (اگر عکس انتخاب نکنید، پروفایل همین خواهد ماند)
          </p>
          <div className="mt-10 flex w-full justify-between  ">
            <Link to={"/martyr/packages/step3"}>
              <Button className="px-7" variant="main">
                مرحله بعد
              </Button>
            </Link>
            <Link to={"/martyr/packages"}>
              <Button variant={"link"} className="px-7 hover:!no-underline">
                مرحله قبل
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Step2;
