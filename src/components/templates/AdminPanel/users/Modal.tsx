import { useState } from "react";
import { UserType } from "../../../../types/users.";
import { Button } from "../../../shadcn/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../shadcn/ui/dialog";
import usePostData from "../../../../hooks/usePostData";
import { ButtonLoader } from "../../../modules/loader/Loader";
import { useFormik } from "formik";
import { adminPanelUserFielsSchema } from "../../../../validations/rules";

const Modal = ({ data }: { data: UserType }) => {
  const [role, setRole] = useState(data.role);
  const [disable, setDisable] = useState(true);
  const [modalShow, setModalShow] = useState(false);

  const formHandler = useFormik({
    initialValues: {
      firstName: data.firstName,
      lastName: data.lastName, 
      password: "",
      phone: data.phoneNumber,
    },
    onSubmit: (_values) => {},
    validationSchema: adminPanelUserFielsSchema,
  });

  const { mutate: mutation, isPending } = usePostData<{}>(
    `/api/UserManagementControler/${data.id}`,
    "اطلاعات کاربر با موفقیت بروزرسانی شد",
    true,
    (data) => {
      if (data.statusCode === 200) {
        setDisable(false);
        setModalShow(false);
      }
    },
    false,
    "users",
  );

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const obj = {
      firstName: formHandler.values.firstName,
      lastName: formHandler.values.lastName, 
      password:
        formHandler.values.password.length > 0
          ? formHandler.values.password
          : "",

      phoneNumber: formHandler.values.phone,
      role,
    };
    console.log(obj);
    
    mutation(obj as any);
    formHandler.handleSubmit();
  };
  return (
    <Dialog open={modalShow} onOpenChange={setModalShow}>
      <DialogTrigger asChild>
        <Button variant={"default"}>ویرایش</Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-[425px] sm:max-w-full">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center gap-2 py-3">
            ویرایش کاربر {data.firstName + " " + data.lastName}
          </DialogTitle>
        </DialogHeader>

        <form dir="rtl">
          <div className="flex gap-5">
            <div className="mt-0">
              <label className="block w-full text-right" htmlFor="">
                نام
              </label>
              <input
                name="firstName"
                value={formHandler.values.firstName}
                onBlur={formHandler.handleBlur}
                onChange={formHandler.handleChange}
                className="mb-5 w-full border-b-2 border-black p-2 outline-none"
                type="text"
                onKeyDown={() => setDisable(false)}
              />

              {formHandler.touched.firstName &&
                formHandler.errors.firstName && (
                  <span className="mb-2 mt-0 block w-full text-center text-sm text-red-600">
                    {formHandler.errors.firstName}
                  </span>
                )}
            </div>

            <div>
              <label className="block w-full text-right" htmlFor="">
                نام خانوادگی
              </label>
              <input
                name="lastName"
                value={formHandler.values.lastName}
                onBlur={formHandler.handleBlur}
                onChange={formHandler.handleChange}
                className="mb-5 w-full border-b-2 border-black p-2 outline-none"
                type="text"
                onKeyDown={() => setDisable(false)}
              />

              {formHandler.touched.lastName && formHandler.errors.lastName && (
                <span className="mb-2 mt-0 block w-full text-center text-sm text-red-600">
                  {formHandler.errors.lastName}
                </span>
              )}
            </div>
          </div>

          <div>
            <label className="block w-full text-right" htmlFor="">
              شماره موبایل
            </label>
            <input
              name="phone"
              value={formHandler.values.phone}
              onBlur={formHandler.handleBlur}
              onChange={formHandler.handleChange}
              className="mb-5 w-full border-b-2 border-black p-2 outline-none"
              type="text"
              onKeyDown={() => setDisable(false)}
            />

            {formHandler.touched.phone && formHandler.errors.phone && (
              <span className="mb-2 mt-0 block w-full text-center text-sm text-red-600">
                {formHandler.errors.phone}
              </span>
            )}
          </div>
          <div>
            <label
              onClick={() => {
                console.log(formHandler.dirty);
              }}
              className="block w-full text-right"
              htmlFor=""
            >
              رمز عبور جدید
            </label>
            <input
              name="password"
              value={formHandler.values.password}
              onBlur={formHandler.handleBlur}
              onChange={formHandler.handleChange}
              className="mb-5 w-full border-b-2 border-black p-2 outline-none"
              type="text"
              onKeyDown={() => setDisable(false)}
            />

            {formHandler.touched.password && formHandler.errors.password && (
              <span className="mb-5 mt-0 block w-full text-center text-sm text-red-600">
                {formHandler.errors.password}
              </span>
            )}
          </div>

          <div className="flex justify-center gap-5">
            <div className="flex items-center gap-3">
              <p>کاربر</p>
              <input
                onClick={() => {
                  setRole("User");
                  setDisable(false);
                }}
                type="radio"
                name="role"
                checked={role === "User" ? true : false}
              />
            </div>
            <div className="flex items-center gap-3">
              <p>ادمین</p>
              <input
                onClick={() => {
                  setRole("Admin");
                  setDisable(false);
                }}
                type="radio"
                name="role"
                checked={role === "Admin" ? true : false}
              />
            </div>
          </div>
          <Button
            type="submit"
            onClick={(event) => submitHandler(event)}
            className="mt-5 w-full"
            variant={"main"}
            disabled={
              disable ||
              Boolean(formHandler.errors.firstName) ||
              Boolean(formHandler.errors.lastName) ||
              Boolean(formHandler.errors.phone) ||
              (formHandler.values.password.length > 0 &&
                Boolean(formHandler.errors.password))
            }
          >
            {isPending ? <ButtonLoader /> : "ثبت"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
