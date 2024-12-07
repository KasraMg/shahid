import { IoCloudUploadOutline } from "react-icons/io5";
import { martyrStore } from "../../../../stores/martyrRegister";
import swal from "sweetalert";
import { BsTrash3 } from "react-icons/bs";

const Voices = () => {
  const { voices, setVoices } = martyrStore((state) => state);
 
  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (file.type !== "audio/mpeg") {
      swal({
        title: "فقط فایل‌های mp3 مجاز هستند.",
        icon: "error",
        buttons: [false, "اوکی"],
      });
      return;
    }

    const fileUrl = URL.createObjectURL(file);
    if (voices.length) {
      setVoices([...voices, fileUrl]);
    } else {
      setVoices([fileUrl]);
    }
  };
 
  const removeVoice = (indexToRemove: number) => {
    const newVoices= voices.filter((_, index) => index !== indexToRemove)
    setVoices(newVoices);
  };

  return (
    <div>
      <p className="mb-4 mt-10 text-xl">ویس ها</p>
      <div
        dir="rtl"
        className="mb-10 grid grid-cols-[1fr,1fr,1fr,1fr] items-center gap-8 sm:!grid-cols-[1fr] md:grid-cols-[1fr,1fr]"
      > 
        <div className="relative rounded-lg border border-dashed border-gray-400 p-8 text-center">
          <p>بارگذاری ویس ها</p>
          <IoCloudUploadOutline className="mx-auto block text-3xl" />
          <input
            type="file"
            accept=".mp3"
            onChange={inputChangeHandler}
            className="absolute left-0 top-0 h-full w-full opacity-0"
          />
        </div>
 
        {voices &&
          voices.map((voiceUrl: string, index: number) => (
            <div key={index} className="relative">
           
              <div
                className="absolute left-2 -top-4 z-50 w-max cursor-pointer rounded-md bg-DoubleSpanishWhite p-1 text-center text-sm text-black"
                onClick={() => removeVoice(index)} 
              >
                <BsTrash3 />
              </div> 
              <audio className="w-full" controls src={voiceUrl}></audio>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Voices;
