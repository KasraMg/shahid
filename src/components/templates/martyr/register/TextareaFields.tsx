import { martyrStore } from "../../../../stores/martyrRegister";

const TextareaFields = () => {
  const { biography, will, memories, setBiography, setWill, setMemories } =
    martyrStore((state) => state);

  return (
    <div>
      <p className="mb-4 mt-10 text-xl">زندگی نامه </p>
      <textarea
        value={biography}
        onChange={(event) => setBiography(event.target.value)}
        placeholder="ایشون در تهران چشم به ..."
        dir="rtl"
        className="h-[200px] w-full resize-none rounded-lg border border-gray-400 p-3 outline-none"
      ></textarea>
      <p className="mb-4 mt-7 text-xl">وصیت نامه </p>
      <textarea
        value={will}
        onChange={(event) => setWill(event.target.value)}
        placeholder=" به نام خداوند بخشنده و ..."
        dir="rtl"
        className="h-[200px] w-full resize-none rounded-lg border border-gray-400 p-3 outline-none"
      ></textarea>
      <p className="mb-4 mt-7 text-xl">خاطرات </p>
      <textarea
        value={memories}
        onChange={(event) => setMemories(event.target.value)}
        placeholder=" به نام خداوند بخشنده و ..."
        dir="rtl"
        className="h-[200px] w-full resize-none rounded-lg border border-gray-400 p-3 outline-none"
      ></textarea>
    </div>
  );
};

export default TextareaFields;
