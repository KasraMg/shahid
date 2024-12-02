import { useState } from "react";
import Header from "../../../components/modules/header/Header";
import { SlCalender } from "react-icons/sl";
import { IoCloudUploadOutline } from "react-icons/io5";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
type Props = {};

const MartyrRegister = (props: Props) => {
  const [birthDate, setBirthDate] = useState("۱۳۰۳/۰۹/۰۶");
  const [deathDate, setDeathDate] = useState("۱۴۰۳/۰۹/۰۶");

  return (
    <div>
      <Header />
      <div className="register_martyr flex min-h-screen flex-col">
        <div
          className={`relative mt-20 flex-grow overflow-y-hidden rounded-t-[120px] bg-white px-24 pb-0 pt-20 text-right xs:!px-4 sm:pt-10 md:px-10`}
        >
          <div className="flex justify-center">
            <p className="relative -top-14 text-center text-2xl">ثبت شهید</p>
            <img
              src="/images/02ecb2a6bbf8b10559ad6cdfbb4320d3_prev_ui.png"
              className="absolute -top-14 w-44"
              alt=""
            />
          </div>
          <p className="mb-7 text-xl">اطلاعات اولیه</p>

          <div
            dir="rtl"
            className="grid grid-cols-[1fr,1fr,1fr,1fr] items-end gap-8"
          >
            <div className="relative top-0.5 w-full" dir="rtl">
              <p className="text-right text-blue-500 md:text-sm">
                نام و نام خانوادگی
              </p>
              <input
                type="text"
                placeholder="حسین رحیمی"
                className="w-full border-b border-black bg-transparent px-2 py-2 outline-none"
              />
            </div>
            <div className="relative top-0.5 w-full" dir="rtl">
              <p className="text-right text-blue-500 md:text-sm">نام پدر</p>
              <input
                type="text"
                placeholder="علی "
                className="w-full border-b border-black bg-transparent px-2 py-2 outline-none"
              />
            </div>
            <div className="relative w-full">
              <p dir="rtl" className="mb-2 text-right text-blue-500 md:text-sm">
                تاریخ تولد
              </p>
              <DatePicker
                value={birthDate}
                onChange={setBirthDate as any}
                calendar={persian}
                locale={persian_fa}
                hideOnScroll
                editable={false}
                calendarPosition="bottom-left"
              />
              <SlCalender className="absolute bottom-2 left-2" />
            </div>
            <div className="relative w-full">
              <p dir="rtl" className="mb-2 text-right text-blue-500 md:text-sm">
                تاریخ وفات
              </p>
              <DatePicker
                value={deathDate}
                onChange={setDeathDate as any}
                calendar={persian}
                locale={persian_fa}
                hideOnScroll
                editable={false}
                calendarPosition="bottom-left"
              />
              <SlCalender className="absolute bottom-2 left-2" />
            </div>

            <div className="w-full" dir="rtl">
              <p className="text-right text-blue-500 md:text-sm">محل شهادت</p>
              <input
                type="text"
                placeholder="شلمچه  "
                className="w-full border-b border-black bg-transparent px-2 py-2 outline-none"
              />
            </div>

            <div className="w-full" dir="rtl">
              <p className="text-right text-blue-500 md:text-sm">مسئولیت ها</p>
              <input
                type="text"
                placeholder="سردار، سر گروهبان"
                className="w-full border-b border-black bg-transparent px-2 py-2 outline-none"
              />
            </div>

            <div className="w-full" dir="rtl">
              <p className="text-right text-blue-500 md:text-sm">عملیات ها</p>
              <input
                type="text"
                placeholder="ولفجر4، ولفجر3  "
                className="w-full border-b border-black bg-transparent px-2 py-2 outline-none"
              />
            </div>
          </div>

          <div>
            <p className="mb-4 mt-10 text-xl">زندگی نامه </p>
            <textarea
              name=""
              id=""
              placeholder="ایشون در تهران چشم به ..."
              dir="rtl"
              className="h-[200px] w-full resize-none rounded-lg border border-gray-400 p-3 outline-none"
            ></textarea>
            <p className="mb-4 mt-7 text-xl">وصیت نامه </p>
            <textarea
              name=""
              id=""
              placeholder=" به نام خداوند بخشنده و ..."
              dir="rtl"
              className="h-[200px] w-full resize-none rounded-lg border border-gray-400 p-3 outline-none"
            ></textarea>
          </div>

          <div>
            <p className="mb-4 mt-10 text-xl">تصاویر</p>
            <div dir="rtl" className="grid grid-cols-[1fr,1fr,1fr,1fr,1fr,1fr] items-end gap-8 mb-10">
              <div className="text-center p-8  relative border border-dashed border-gray-400 rounded-lg">
                <p>بارگذاری تصویر</p>
                <IoCloudUploadOutline className="text-3xl mx-auto block"/>
                <input type="file" className="left-0 top-0 w-full h-full absolute opacity-0" />
              </div>
              <img src="/images/abbas.png" className="w-full rounded-lg object-cover h-[130px]" alt="" />
              <img src="/images/abbas.png" className="w-full rounded-lg object-cover h-[130px]" alt="" />
              <img src="/images/abbas.png" className="w-full rounded-lg object-cover h-[130px]" alt="" />
              <img src="/images/abbas.png" className="w-full rounded-lg object-cover h-[130px]" alt="" />
              <img src="/images/abbas.png" className="w-full rounded-lg object-cover h-[130px]" alt="" />
            </div>
          </div>

          <div>
            <p className="mb-4 mt-10 text-xl">ویدیو ها</p>
            <div dir="rtl" className="grid grid-cols-[1fr,1fr,1fr,1fr] items-end gap-8 mb-10">
              <div className="text-center p-8 h-full flex items-center flex-col justify-center relative border border-dashed border-gray-400 rounded-lg">
                <p>بارگذاری ویدیو</p>
                <IoCloudUploadOutline className="text-3xl mx-auto block"/>
                <input type="file" className="left-0 top-0 w-full h-full absolute opacity-0" />
              </div>
              <video controls className="w-full rounded-lg object-fill h-[180px]" src="/images/b768044b04e3cde64a93773dfce2930d55121669-480p.mp4"></video>
              <video controls className="w-full rounded-lg object-fill h-[180px]" src="/images/b768044b04e3cde64a93773dfce2930d55121669-480p.mp4"></video>
              <video controls className="w-full rounded-lg object-fill h-[180px]" src="/images/b768044b04e3cde64a93773dfce2930d55121669-480p.mp4"></video> 
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MartyrRegister;
