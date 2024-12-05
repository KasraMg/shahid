import { TableColumn } from "react-data-table-component";
import { PackagesData } from "../types/adminPanel";

export  const packagesColumns: TableColumn<PackagesData>[] = [
    {
      name: "اسم",
      selector: (row: { name: string }) => row.name,
    },
    {
      name: "مدت زمان",
      selector: (row: { duration: string }) => row.duration,
    },
    {
      name: "قیمت",
      selector: (row: { price: string }) => row.price,
    },
    {
      name: "تمدید",
      selector: (row: { renewalFee: string }) => row.renewalFee,
    },
    {
      name: "اعتبار",
      selector: (row: { validityPeriod: string }) => row.validityPeriod,
    },
    {
      name: "تصاویر",
      selector: (row: { imageCount: string }) => row.imageCount,
    },
    {
      name: "ویدیو",
      selector: (row: { videoCount: string }) => row.videoCount,
    },
    {
      name: "اعلامیه",
      selector: (row: { notificationCount: string }) => row.notificationCount,
    },
    {
      name: "  فایل صوتی",
      selector: (row: { audioFileLimit: string }) => row.audioFileLimit,
    },
    {
      name: "بارکد",
      selector: (row: { barcodeEnabled: boolean }) => row.barcodeEnabled,
    },
    {
      name: "نمایش محتوا",
      selector: (row: { displayEnabled: boolean }) => row.displayEnabled,
    },
    {
      name: "انتخاب قالب",
      selector: (row: { templateSelectionEnabled: boolean }) =>
        row.templateSelectionEnabled,
    },
    {
      name: "پیام تسلیت",
      selector: (row: { condolenceMessageEnabled: boolean }) =>
        row.condolenceMessageEnabled,
    },
    {
      name: "ارسال محتوا",
      selector: (row: { visitorContentSubmissionEnabled: boolean }) =>
        row.visitorContentSubmissionEnabled,
    },
    {
      name: "مسیریابی",
      selector: (row: { locationAndNavigationEnabled: boolean }) =>
        row.locationAndNavigationEnabled,
    },
    {
      name: "اشترام گذاری",
      selector: (row: { sharingEnabled: boolean }) => row.sharingEnabled,
    },
    {
      name: "فایل 360 درجه",
      selector: (row: { file360DegreeEnabled: boolean }) =>
        row.file360DegreeEnabled,
    },
    {
      name: "بروزرسانی",
      selector: (row: { updateCapabilityEnabled: boolean }) =>
        row.updateCapabilityEnabled,
    },
    {
      name: "ویرایش",
      selector: (row: { edit: string }) => row.edit,
    },
    {
      name: "حذف",
      selector: (row: { delete: string }) => row.delete,
    },
  ];