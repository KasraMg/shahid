import { useEffect, useState } from "react";
import { PackagesData } from "../../../../types/adminPanel";
import { Button } from "../../../shadcn/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../shadcn/ui/dialog";
import { MdModeEdit } from "react-icons/md";
import usePostData from "../../../../hooks/usePostData";
import { ButtonLoader } from "../../../modules/loader/Loader"; 

type Props = {
  edit: boolean;
  package?: PackagesData;
};

const Modal = (props: Props) => {
  const [isChange, setIsChange] = useState(true);
  const [isDisable, setisDisable] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState<string | undefined>("");
  const [duration, setDuration] = useState<string | undefined>("");
  const [price, setPrice] = useState<string | undefined>("");
  const [renewalFee, setRenewalFee] = useState<string | undefined>("");
  const [validityPeriod, setValidityPeriod] = useState<string | undefined>("");
  const [videoCount, setVideoCount] = useState<string | undefined>("");
  const [imageCount, setImageCount] = useState<string | undefined>("");
  const [notificationCount, setNotificationCount] = useState<
    string | undefined
  >("");
  const [audioFileLimit, setAudioFileLimit] = useState<string | undefined>("");
  const [barcodeEnabled, setBarcodeEnabled] = useState<boolean | undefined>(
    false,
  );
  const [templateSelectionEnabled, setTemplateSelectionEnabled] = useState<
    boolean | undefined
  >(false);
  const [condolenceMessageEnabled, setCondolenceMessageEnabled] = useState<
    boolean | undefined
  >(false);
  const [visitorContentSubmissionEnabled, setVisitorContentSubmissionEnabled] =
    useState<boolean | undefined>(false);
  const [locationAndNavigationEnabled, setLocationAndNavigationEnabled] =
    useState<boolean | undefined>(false);
  const [sharingEnabled, setSharingEnabled] = useState<boolean | undefined>(
    false,
  );
  const [file360DegreeEnabled, setFile360DegreeEnabled] = useState<
    boolean | undefined
  >(false);
  const [displayEnabled, setDisplayEnabled] = useState<boolean | undefined>(
    false,
  );
  const [updateCapabilityEnabled, setUpdateCapabilityEnabled] = useState<
    boolean | undefined
  >(false);

  useEffect(() => {
    if (props.edit) {
      setName(props.package?.name);
      setDuration(props.package?.duration);
      setPrice(props.package?.price);
      setRenewalFee(props.package?.renewalFee);
      setValidityPeriod(props.package?.validityPeriod);
      setVideoCount(props.package?.videoCount);
      setImageCount(props.package?.imageCount);
      setNotificationCount(props.package?.notificationCount);
      setAudioFileLimit(props.package?.audioFileLimit);
      setBarcodeEnabled(props.package?.barcodeEnabled);
      setTemplateSelectionEnabled(props.package?.templateSelectionEnabled);
      setCondolenceMessageEnabled(props.package?.condolenceMessageEnabled);
      setVisitorContentSubmissionEnabled(
        props.package?.visitorContentSubmissionEnabled,
      );
      setLocationAndNavigationEnabled(
        props.package?.locationAndNavigationEnabled,
      );
      setSharingEnabled(props.package?.sharingEnabled);
      setFile360DegreeEnabled(props.package?.file360DegreeEnabled);
      setDisplayEnabled(props.package?.displayEnabled);
      setUpdateCapabilityEnabled(props.package?.updateCapabilityEnabled);
    }
  }, []);

  const { mutate: updateMutation, isPending } = usePostData<{}>(
    `/api/packages/${props?.package?.id}`,
    "اطلاعات پکیج با موفقیت بروزرسانی شد",
    true,
    (data) => {
      if (data.statusCode === 200) {
        setIsChange(false);
        setIsOpen(false);
      }
    },
    false,
    "apPackages",
  );

  const { mutate: addPackageMutation, isPending: addPackagePending } =
    usePostData<{}>(
      `/api/packages`,
      "پکیج با موفقیت اضافه شد",
      false,
      (data) => {
        if (data.statusCode === 200) {
          setIsChange(false);
          setIsOpen(false);
        }
      },
      false,
      "apPackages",
    );

  const updatePackageHandler = () => {
    const data = {
      name,
      duration,
      price,
      renewalFee,
      validityPeriod,
      videoCount,
      imageCount,
      notificationCount,
      audioFileLimit,
      barcodeEnabled,
      templateSelectionEnabled,
      condolenceMessageEnabled,
      visitorContentSubmissionEnabled,
      locationAndNavigationEnabled,
      sharingEnabled,
      file360DegreeEnabled,
      displayEnabled,
      updateCapabilityEnabled,
    };

    if (props.edit) {
      updateMutation(data);
    } else {
      addPackageMutation(data);
    } 
  };
  useEffect(() => {
    if (
      name &&
      duration &&
      price &&
      renewalFee &&
      validityPeriod &&
      videoCount &&
      imageCount &&
      notificationCount &&
      audioFileLimit
    ) {
      setisDisable(false);
    } else {
      setisDisable(true);
    }
  }, [
    name,
    duration,
    price,
    renewalFee,
    validityPeriod,
    videoCount,
    imageCount,
    notificationCount,
    audioFileLimit,
    barcodeEnabled,
    templateSelectionEnabled,
    condolenceMessageEnabled,
    visitorContentSubmissionEnabled,
    locationAndNavigationEnabled,
    sharingEnabled,
    file360DegreeEnabled,
    displayEnabled,
    updateCapabilityEnabled,
  ]);



  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {props.edit ? (
          <MdModeEdit className="cursor-pointer text-xl text-orange-600" />
        ) : (
          <p className="my-5 cursor-pointer !text-2xl sm:text-center">
            افزودن پکیج جدید +
          </p>
        )}
      </DialogTrigger>
      <DialogContent className="w-full max-w-[825px] overflow-hidden !px-0 sm:max-w-full lg:!max-w-[95%]">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-end gap-2 px-6 py-3">
            {props.edit ? "ویرایش پکیج طلایی" : "پکیج جدید"}
          </DialogTitle>
        </DialogHeader>

        <div className="h-[500px] overflow-y-scroll px-4 sm:h-[400px]">
          <div
            dir="rtl"
            className="mt-5 grid grid-cols-[1fr,1fr,1fr] gap-4 sm:!grid-cols-[1fr] sm:gap-3 md:grid-cols-[1fr,1fr] sm:[&>*]:text-sm"
          >
            <div className="">
              <label className="block w-full text-center" htmlFor="">
                نام پکیج
              </label>
              <input
                className="mb-8 w-full border-b-2 border-black p-2 text-sm outline-none"
                type="text"
                value={name}
                onChange={(event) => {
                  setIsChange(false);
                  setName(event.target.value);
                }}
              />
            </div>
            <div className="">
              <label className="block w-full text-center" htmlFor="">
                مدت زمان پکیج
              </label>
              <input
                className="mb-8 w-full border-b-2 border-black p-2 text-sm outline-none"
                type="text"
                value={duration}
                onChange={(event) => {
                  setIsChange(false);
                  setDuration(event.target.value);
                }}
              />
            </div>
            <div>
              <label className="block w-full text-center" htmlFor="">
                قیمت پکیج
              </label>
              <input
                className="mb-8 w-full border-b-2 border-black p-2 text-sm outline-none"
                type="number"
                value={price}
                onChange={(event) => {
                  setIsChange(false);
                  setPrice(event.target.value);
                }}
              />
            </div>
            <div>
              <label className="block w-full text-center" htmlFor="">
                مبلغ تمدید دوره ای
              </label>
              <input
                className="mb-8 w-full border-b-2 border-black p-2 text-sm outline-none"
                type="number"
                value={renewalFee}
                onChange={(event) => {
                  setIsChange(false);
                  setRenewalFee(event.target.value);
                }}
              />
            </div>
            <div>
              <label className="block w-full text-center" htmlFor="">
                مدت زمان اعتبار به روز
              </label>
              <input
                className="mb-8 w-full border-b-2 border-black p-2 text-sm outline-none"
                type="number"
                value={validityPeriod}
                onChange={(event) => {
                  setIsChange(false);
                  setValidityPeriod(event.target.value);
                }}
              />
            </div>
            <div>
              <label className="block w-full text-center" htmlFor="">
                تعداد تصاویر
              </label>
              <input
                className="mb-8 w-full border-b-2 border-black p-2 text-sm outline-none"
                type="number"
                value={imageCount}
                onChange={(event) => {
                  setIsChange(false);
                  setImageCount(event.target.value);
                }}
              />
            </div>
            <div>
              <label className="block w-full text-center" htmlFor="">
                تعداد ویدیو
              </label>
              <input
                className="mb-8 w-full border-b-2 border-black p-2 text-sm outline-none"
                type="number"
                value={videoCount}
                onChange={(event) => {
                  setIsChange(false);
                  setVideoCount(event.target.value);
                }}
              />
            </div>
            <div>
              <label className="block w-full text-center" htmlFor="">
                تعداد اعالمیه
              </label>
              <input
                className="mb-8 w-full border-b-2 border-black p-2 text-sm outline-none"
                type="number"
                value={notificationCount}
                onChange={(event) => {
                  setIsChange(false);
                  setNotificationCount(event.target.value);
                }}
              />
            </div>
            <div>
              <label className="block w-full text-center" htmlFor="">
                تعداد مجاز فایل صوتی افراد
              </label>
              <input
                className="mb-8 w-full border-b-2 border-black p-2 text-sm outline-none"
                type="number"
                value={audioFileLimit}
                onChange={(event) => {
                  setIsChange(false);
                  setAudioFileLimit(event.target.value);
                }}
              />
            </div>
          </div>

          <div
            dir="rtl"
            className="mt-5 grid grid-cols-[1fr,1fr,1fr] gap-2 md:grid-cols-[1fr,1fr] md:gap-5 sm:[&>*]:text-sm"
          >
            <div className="flex items-baseline justify-center gap-2">
              <label className="block w-full text-center" htmlFor="">
                بارکد ایجاد شود
              </label>
              <input
                className="mb-8 w-full outline-none sm:!w-auto"
                type="checkbox"
                checked={barcodeEnabled}
                onChange={(event) => {
                  setIsChange(false);
                  setBarcodeEnabled(event.target.checked);
                }}
              />
            </div>

            <div className="flex items-baseline justify-center gap-2">
              <label className="block w-full text-center" htmlFor="">
                نمایش محتوا
              </label>
              <input
                className="mb-8 w-full outline-none sm:!w-auto"
                type="checkbox"
                checked={displayEnabled}
                onChange={(event) => {
                  setIsChange(false);
                  setDisplayEnabled(event.target.checked);
                }}
              />
            </div>

            <div className="flex items-baseline justify-center gap-2">
              <label className="block w-full text-center" htmlFor="">
                قابلیت انتخاب قالب
              </label>
              <input
                className="mb-8 w-full outline-none sm:!w-auto"
                type="checkbox"
                checked={templateSelectionEnabled}
                onChange={(event) => {
                  setIsChange(false);
                  setTemplateSelectionEnabled(event.target.checked);
                }}
              />
            </div>
            <div className="flex items-baseline justify-center gap-2">
              <label className="block w-full text-center" htmlFor="">
                قابلیت قرادادن پیام تسلیت
              </label>
              <input
                className="mb-8 w-full outline-none sm:!w-auto"
                type="checkbox"
                checked={condolenceMessageEnabled}
                onChange={(event) => {
                  setIsChange(false);
                  setCondolenceMessageEnabled(event.target.checked);
                }}
              />
            </div>
            <div className="flex items-baseline justify-center gap-2">
              <label className="block w-full text-center" htmlFor="">
                قابلیت ارسال محتوا از سوی بازدید کننده جهت تغییر
              </label>
              <input
                className="mb-8 w-full outline-none sm:!w-auto"
                type="checkbox"
                checked={visitorContentSubmissionEnabled}
                onChange={(event) => {
                  setIsChange(false);
                  setVisitorContentSubmissionEnabled(event.target.checked);
                }}
              />
            </div>
            <div className="flex items-baseline justify-center gap-2">
              <label className="block w-full text-center" htmlFor="">
                قابلیت لوکیشین و مسیریابی
              </label>
              <input
                className="mb-8 w-full outline-none sm:!w-auto"
                type="checkbox"
                checked={locationAndNavigationEnabled}
                onChange={(event) => {
                  setIsChange(false);
                  setLocationAndNavigationEnabled(event.target.checked);
                }}
              />
            </div>
            <div className="flex items-baseline justify-center gap-2">
              <label className="block w-full text-center" htmlFor="">
                قابلیت به اشتراک گذاری
              </label>
              <input
                className="mb-8 w-full outline-none sm:!w-auto"
                type="checkbox"
                checked={sharingEnabled}
                onChange={(event) => {
                  setIsChange(false);
                  setSharingEnabled(event.target.checked);
                }}
              />
            </div>
            <div className="flex items-baseline justify-center gap-2">
              <label className="block w-full text-center" htmlFor="">
                مجوز قراردادن فایل 360درجه
              </label>
              <input
                className="mb-8 w-full outline-none sm:!w-auto"
                type="checkbox"
                checked={file360DegreeEnabled}
                onChange={(event) => {
                  setIsChange(false);
                  setFile360DegreeEnabled(event.target.checked);
                }}
              />
            </div>
            <div className="flex items-baseline justify-center gap-2">
              <label className="block w-full text-center" htmlFor="">
                قالبیت به روزرسانی
              </label>
              <input
                className="mb-8 w-full outline-none sm:!w-auto"
                type="checkbox"
                checked={updateCapabilityEnabled}
                onChange={(event) => {
                  setIsChange(false);
                  setUpdateCapabilityEnabled(event.target.checked);
                }}
              />
            </div>
          </div>

          <div className="mt-5">
            <Button
              disabled={isChange || isDisable}
              onClick={updatePackageHandler}
              className="mb-3 mt-5 w-full"
              variant={"main"}
            >
              {isPending || addPackagePending ? <ButtonLoader /> : "ثبت"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
