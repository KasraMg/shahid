import { IoCloudUploadOutline } from "react-icons/io5";
import { martyrStore } from "../../../../stores/martyrRegister";
import { BsTrash3 } from "react-icons/bs";
import swal from "sweetalert";

const Videos = () => {
  const { videos, setVideos } = martyrStore((state) => state);

  // هندل آپلود ویدیو
  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    // بررسی فرمت فایل
    if (!["video/mp4", "video/ogg", "video/webm"].includes(file.type)) {
      swal({
        title: "فقط فایل‌های ویدیویی (mp4, ogg, webm) مجاز هستند.",
        icon: "error",
        buttons: [false, "اوکی"],
      });
      return;
    }

    const fileUrl = URL.createObjectURL(file);
    if (videos.length) {
      setVideos([...videos, fileUrl]);
    } else {
      setVideos([fileUrl]);
    }
  };

  const removeVideo = (indexToRemove: number) => {
    const newVideos = videos.filter((_, index) => index !== indexToRemove);
    setVideos(newVideos);
  };

  return (
    <div>
      <p className="mb-4 mt-10 text-xl">ویدیو ها</p>
      <div
        dir="rtl"
        className="mb-10 grid grid-cols-[1fr,1fr,1fr,1fr] items-end gap-8 sm:!grid-cols-[1fr,1fr] md:grid-cols-[1fr,1fr,1fr]"
      >
        <div className="relative flex h-full flex-col items-center justify-center rounded-lg border border-dashed border-gray-400 p-8 text-center">
          <p>بارگذاری ویدیو</p>
          <IoCloudUploadOutline className="mx-auto block text-3xl" />
          <input
            onChange={inputChangeHandler}
            type="file"
            className="absolute left-0 top-0 h-full w-full opacity-0"
          />
        </div>

        {videos &&
          videos.map((videoUrl: string, index: number) => (
            <div key={index} className="relative">
              <div
                className="absolute -top-4 left-2 z-50 w-max cursor-pointer rounded-md bg-DoubleSpanishWhite p-1 text-center text-sm text-black"
                onClick={() => removeVideo(index)}
              >
                <BsTrash3 />
              </div>
              <video
                controls
                className="h-[180px] w-full rounded-lg object-fill"
                src={videoUrl}
              ></video>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Videos;
