import { IoCloudUploadOutline } from "react-icons/io5";
import { martyrStore } from "../../../../stores/martyrRegister";
import {  useEffect, useState } from "react";
import swal from "sweetalert";
import { BsTrash3 } from "react-icons/bs";

const Images = () => {
  const [imagesBaseUrl, setImagesBaseUrl] = useState<any>([]);

  const { images, setImages } = martyrStore((state) => state);

  console.log(images.length);

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (images.length === 10 as any) {
      swal({
        title: "تنها 10 عکس میتونید آپلود کنید",
        icon: "error",
        buttons: [false, "اوکی"],
      });
    } else {
      if (event.target.files && event.target.files.length > 0) {
        let file = event.target.files[0];
        if (
          file.type === "image/png" ||
          file.type === "image/jpeg" ||
          file.type === "image/webp" ||
          file.type === "image/jpg" ||
          file.type === "image/jfif"
        ) {
          if (images.length !== 0) {
            const isImgExit = images.some((img: any) => file.name === img.name);

            if (isImgExit) {
              swal({
                title: "این عکس قبلا انتخاب شده است.",
                icon: "error",
                buttons: [false, "اوکی"],
              });
            } else {
              setImages([...images, file]);
            }
          } else {
            setImages([file]);
          }
        }
      } else {
        swal({
          title:
            "تایپ فایل وارد شده اشتباه است. لطفا فایل با تایپ های .png , jfif, jpeg یا .jpg وارد کنید",
          icon: "error",
          buttons: [false, "اوکی"],
        });
      }
    }
  };

  useEffect(() => {
    const generateImages = () => {
      const newImagesBaseUrl: any = [];
      console.log(images);

      images?.forEach((img: any) => {
        let reader = new FileReader();
        reader.onloadend = () => {
          newImagesBaseUrl.push({ path: reader.result, name: img.name });
          if (newImagesBaseUrl.length === images.length) {
            setImagesBaseUrl(newImagesBaseUrl);
          }
        };
        reader.readAsDataURL(img);
      });
    };

    if (images.length) {
      generateImages();
    } else {
      setImagesBaseUrl([]);
    }
  }, [images]);
  const deleteImgHandler = (name: string) => {
    const newImages = images.filter((imgFile: any) => imgFile.name !== name);
    setImages(newImages);
  };

  return (
    <div>
      <p className="mb-4 mt-10 text-xl">تصاویر</p>
      <div
        dir="rtl"
        className="mb-10 grid grid-cols-[1fr,1fr,1fr,1fr] items-end gap-8 sm:!grid-cols-[1fr,1fr] md:grid-cols-[1fr,1fr,1fr]"
      >
        <div className="relative  h-full rounded-lg border border-dashed border-gray-400 p-8 text-center">
          <p>بارگذاری تصویر</p>
          <IoCloudUploadOutline className="mx-auto block text-3xl" />
          <input
            onChange={(event) => inputChangeHandler(event)}
            type="file"
            className="absolute left-0 top-0 h-full w-full opacity-0"
          />
        </div>
        {imagesBaseUrl?.map(
          (img: { name: string; path: string }) => (
            <div className="relative">
              <div
                onClick={() => deleteImgHandler(img.name)}
                className="absolute left-3 top-3 w-max cursor-pointer rounded-md bg-DoubleSpanishWhite p-1 text-sm text-black text-center"
              >
                <BsTrash3 />
              </div>
              <img
                src={img.path}
                className="h-[150px] w-full rounded-lg object-cover"
                alt=""
              />
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default Images;
