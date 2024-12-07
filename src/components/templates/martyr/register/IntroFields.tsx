import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import { SlCalender } from "react-icons/sl";
import persian_fa from "react-date-object/locales/persian_fa";
import { martyrStore } from "../../../../stores/martyrRegister";
const IntroFields = () => {
  const [birthDate, _setBdddirthDate] = useState("۱۳۰۳/۰۹/۰۶");
  const [deathDate, _setDdddeathDate] = useState("۱۴۰۳/۰۹/۰۶");
  const [responsibilitiesData, setResponsibilitiesData] = useState("");
  const [operationsData, setOperationsData] = useState("");

  const {
    fullName,
    fatherName,
    placeDead,
    responsibilities,
    operations,
    causeOfMartyrdom,
    setCauseOfMartyrdom,
    setFullName,
    setFatherName,
    setBirthBorn,
    setBirthDead,
    setPlaceDead,
    setResponsibilities,
    setOperations,
  } = martyrStore((state) => state);

  useEffect(() => {
    console.log(operations);
  }, [operations]);

  return (
    <>
      <p className="mb-7 text-xl sm:mt-20">اطلاعات اولیه</p>

      <div
        dir="rtl"
        className="grid grid-cols-[1fr,1fr,1fr,1fr] items-end gap-8 sm:!grid-cols-[1fr,1fr] md:grid-cols-[1fr,1fr,1fr]"
      >
        <div className="relative w-full" dir="rtl">
          <p className="text-right text-blue-500 md:text-sm">
            نام و نام خانوادگی
          </p>
          <input
            type="text"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            placeholder="حسین رحیمی"
            className="w-full border-b border-black bg-transparent px-2 py-2 outline-none"
          />
        </div>
        <div className="relative w-full" dir="rtl">
          <p className="text-right text-blue-500 md:text-sm">نام پدر</p>
          <input
            type="text"
            value={fatherName}
            onChange={(event) => setFatherName(event.target.value)}
            placeholder="علی "
            className="w-full border-b border-black bg-transparent px-2 py-2 outline-none"
          />
        </div>

        <div className="w-full" dir="rtl">
          <p className="text-right text-blue-500 md:text-sm">محل شهادت</p>
          <input
            type="text"
            value={placeDead}
            onChange={(event) => setPlaceDead(event.target.value)}
            placeholder="شلمچه"
            className="w-full border-b border-black bg-transparent px-2 py-2 outline-none"
          />
        </div>
        <div className="relative w-full" dir="rtl">
          <p className="text-right text-blue-500 md:text-sm">علت شهادت</p>
          <input
            type="text"
            value={causeOfMartyrdom}
            onChange={(event)=>setCauseOfMartyrdom(event.target.value)}
            placeholder="مین"
            className="w-full border-b border-black bg-transparent px-2 py-2 outline-none"
          />
        </div>
        <div className="relative w-full">
          <p dir="rtl" className="mb-2 text-right text-blue-500 md:text-sm">
            تاریخ تولد
          </p>
          <DatePicker
            value={birthDate}
            onChange={setBirthBorn as any}
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
            onChange={setBirthDead as any}
            calendar={persian}
            locale={persian_fa}
            hideOnScroll
            editable={false}
            calendarPosition="bottom-left"
          />
          <SlCalender className="absolute bottom-2 left-2" />
        </div>
      </div>

      <div className="mt-8 flex gap-10 md:flex-col">
        <div className="w-1/2" dir="rtl">
          <p className="text-right text-blue-500 md:text-sm">مسئولیت ها</p>
          <div className="flex items-end justify-between gap-4">
            <input
              type="text"
              value={responsibilitiesData}
              onChange={(event) => setResponsibilitiesData(event.target.value)}
              placeholder="سردار  "
              className="w-full border-b border-black bg-transparent px-2 py-2 outline-none"
            />
            <div
              className="cursor-pointer rounded-lg bg-brown p-2 text-white"
              onClick={() => {
                if (responsibilitiesData.trim()) {
                  if (!responsibilities) {
                    setResponsibilities([responsibilitiesData]);
                  } else {
                    setResponsibilities([
                      ...(responsibilities as any),
                      responsibilitiesData,
                    ]);
                  }
                  setResponsibilitiesData("");
                }
              }}
            >
              <FaPlus />
            </div>
          </div>
          <div className="mt-5 flex gap-2 overflow-x-scroll py-1.5 px-1.5">
            {responsibilities?.map((res, index) => (
              <p
                key={index}
                className="relative rounded-md bg-[#e8d4ba] px-3 py-2 text-sm"
              >
                {res}
                <span
                  onClick={() => {
                    const newArr = responsibilities.filter(
                      (response) => response !== res,
                    );
                    setResponsibilities(newArr);
                  }}
                  className="absolute -right-1 -top-1.5 cursor-pointer text-sm text-red-600"
                >
                  ✕
                </span>
              </p>
            ))}
          </div>
        </div>

        <div className="w-1/2" dir="rtl">
          <p className="text-right text-blue-500 md:text-sm">عملیات ها</p>
          <div className="flex items-end justify-between gap-4">
            <input
              type="text"
              value={operationsData}
              onChange={(event) => setOperationsData(event.target.value)}
              placeholder="ولفجر 3"
              className="w-full border-b border-black bg-transparent px-2 py-2 outline-none"
            />
            <div
              className="cursor-pointer rounded-lg bg-brown p-2 text-white"
              onClick={() => {
                if (operationsData.trim()) {
                  if (!operations) {
                    setOperations([operationsData]);
                  } else {
                    setOperations([...(operations as any), operationsData]);
                  }
                  setOperationsData("");
                }
              }}
            >
              <FaPlus />
            </div>
          </div>
          <div className="mt-5 flex gap-2 overflow-x-scroll py-1.5 px-1.5">
            {operations?.map((operation, index) => (
              <p
                key={index}
                className="relative rounded-md bg-[#e8d4ba] px-3 py-2 text-sm"
              >
                {operation}
                <span
                  onClick={() => {
                    const newArr = operations.filter(
                      (op) => op !== operation,
                    );
                    setOperations(newArr);
                  }}
                  className="absolute -right-1 -top-1.5 cursor-pointer text-sm text-red-600"
                >
                  ✕
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroFields;
