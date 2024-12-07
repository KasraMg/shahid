import { martyrStore } from "../../../../stores/martyrRegister";

const LastFields = () => {
  const {
    lastResponsibility,
    gorooh,
    yegan,
    niru,
    ghesmat,
    setLastResponsibility,
    setGorooh,
    setYegan,
    setNiru,
    setGhesmat,
  } = martyrStore((state) => state);
  return (
    <>
      <p className="mb-7 text-xl">سایر اطلاعات</p>

      <div
        dir="rtl"
        className="grid grid-cols-[1fr,1fr,1fr,1fr] items-end gap-8 sm:!grid-cols-[1fr,1fr] md:grid-cols-[1fr,1fr,1fr]"
      >
        <div className="relative w-full" dir="rtl">
          <p className="text-right text-blue-500 md:text-sm">آخرین مسئولیت </p>
          <input
            value={lastResponsibility}
            onChange={(event) => setLastResponsibility(event.target.value)}
            type="text"
            placeholder="بیسیمچی "
            className="w-full border-b border-black bg-transparent px-2 py-2 outline-none"
          />
        </div>

        <div className="w-full" dir="rtl">
          <p className="text-right text-blue-500 md:text-sm"> گروه شهدا</p>
          <input
            type="text"
            value={gorooh}
            onChange={(event) => setGorooh(event.target.value)}
            placeholder="...  "
            className="w-full border-b border-black bg-transparent px-2 py-2 outline-none"
          />
        </div>

        <div className="w-full" dir="rtl">
          <p className="text-right text-blue-500 md:text-sm">یگان</p>
          <input
            type="text"
            value={yegan}
            onChange={(event) => setYegan(event.target.value)}
            placeholder="سوم"
            className="w-full border-b border-black bg-transparent px-2 py-2 outline-none"
          />
        </div>

        <div className="w-full" dir="rtl">
          <p className="text-right text-blue-500 md:text-sm">نیرو</p>
          <input
            type="text"
            value={niru}
            onChange={(event) => setNiru(event.target.value)}
            placeholder="ارتش"
            className="w-full border-b border-black bg-transparent px-2 py-2 outline-none"
          />
        </div>

        <div className="w-full" dir="rtl">
          <p className="text-right text-blue-500 md:text-sm">قشر</p>
          <input
            type="text"
            value={ghesmat}
            onChange={(event) => setGhesmat(event.target.value)}
            placeholder="..."
            className="w-full border-b border-black bg-transparent px-2 py-2 outline-none"
          />
        </div>
      </div>

      <div>
        <p className="mb-4 mt-10 text-center text-xl">یک بیت شعر</p>
        <div dir="rtl" className="flex justify-center gap-4 sm:flex-col">
          <input
            className="w-[250px] rounded-md border border-gray-400 px-3 pb-2 pt-1 outline-none sm:w-full"
            type="text"
            value={lastResponsibility}
            onChange={(event) => setLastResponsibility(event.target.value)}
            placeholder="مصرع اول"
          />
          <input
            className="w-[250px] rounded-md border border-gray-400 px-3 pb-2 pt-1 outline-none sm:w-full"
            type="text"
            value={lastResponsibility}
            onChange={(event) => setLastResponsibility(event.target.value)}
            placeholder="مصرع دوم"
          />
        </div>
      </div>
    </>
  );
};

export default LastFields;
