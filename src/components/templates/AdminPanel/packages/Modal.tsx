import { Button } from "../../../shadcn/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../shadcn/ui/dialog";
import { MdModeEdit } from "react-icons/md";

type Props = {
    edit:boolean
};

const Modal = (props: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
     {props.edit ?  <MdModeEdit className="absolute left-8 top-0 cursor-pointer text-xl text-orange-600" />:(
<p className="my-5 sm:text-center">افزودن پکیج جدید +</p>
     )}  
      </DialogTrigger>
      <DialogContent className="w-full max-w-[425px] overflow-hidden sm:max-w-full">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-end gap-2 py-3">
          {props.edit ? 'ویرایش پکیج طلایی': 'پکیج جدید'}  
          </DialogTitle>
        </DialogHeader>

        <div className="overflow-hidden">
          <div className="mt-5">
            <label className="block w-full text-center" htmlFor="">
              نام پکیج
            </label>
            <input
              className="mb-8 w-full border-b-2 border-black p-2 outline-none"
              type="text"
            />
          </div>
          <div>
            <label className="block w-full text-center" htmlFor="">
              مدت زمان
            </label>
            <input
              className="mb-8 w-full border-b-2 border-black p-2 outline-none"
              type="text"
            />
          </div>
          <div>
            <label className="block w-full text-center" htmlFor="">
              قیمت پکیج
            </label>
            <input
              className="mb-8 w-full border-b-2 border-black p-2 outline-none"
              type="number"
            />
          </div>
          <div>
            <label className="block w-full text-center" htmlFor="">
              امکانات
            </label>
            <div className="flex items-baseline gap-3">
              <Button className="" size={"sm"} variant={"default"}>
                + افزودن
              </Button>
              <input
                className="mb-5 w-full border-b-2 border-black p-2 outline-none"
                type="number"
              />
            </div>
            <div className="flex gap-1 overflow-x-scroll">
              <p className="whitespace-nowrap rounded-md bg-[#e8d4ba] p-1 text-xs">
                امکان ثبت 200 عکس
              </p>
              <p className="whitespace-nowrap rounded-md bg-[#e8d4ba] p-1 text-xs">
                امکان ثبت 200 عکس
              </p>
              <p className="whitespace-nowrap rounded-md bg-[#e8d4ba] p-1 text-xs">
                امکان ثبت 200 عکس
              </p>
              <p className="whitespace-nowrap rounded-md bg-[#e8d4ba] p-1 text-xs">
                امکان ثبت 200 عکس
              </p>
              <p className="whitespace-nowrap rounded-md bg-[#e8d4ba] p-1 text-xs">
                امکان ثبت 200 عکس
              </p>
              <p className="whitespace-nowrap rounded-md bg-[#e8d4ba] p-1 text-xs">
                امکان ثبت 200 عکس
              </p>
              <p className="whitespace-nowrap rounded-md bg-[#e8d4ba] p-1 text-xs">
                امکان ثبت 200 عکس
              </p>
              <p className="whitespace-nowrap rounded-md bg-[#e8d4ba] p-1 text-xs">
                امکان ثبت 200 عکس
              </p>
            </div>
          </div>
          <Button className="mt-5 w-full" variant={"main"}>
            ثبت
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
