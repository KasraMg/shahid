import * as Yup from "yup";
const phoneRegExp = /((0?9)|(\+?989))\d{2}\W?\d{3}\W?\d{4}/g;

export let adminPanelUserFielsSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "اسم حداقل باید 10 حرف داشته باشد")
    .max(10, "اسم حداکثر باید 10 حرف داشته باشد")
    .required("لطفا اسم رو بنویسید"),

  lastName: Yup.string()
    .min(3, "فامیلی حداقل باید 3 حرف داشته باشد")
    .max(20, "فامیلی حداکثر باید 20 حرف داشته باشد")
    .required("لطفا فامیلی رو بنویسید"),

  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9.@$-_#]{8,}$/,
      "رمز عبور باید شامل حروف بزرگ و کوچک انگلیسی و اعداد باشد و حداقل 8 حرف داشته باشد",
    ) ,

  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("password"), null as any],
      "رمز عبور و تکرار رمز عبور باید مشابه باشند",
    )
    .required("لطفا رمز عبور رو تایید کنید"),

    phone: Yup.string()
    .matches(phoneRegExp, "شماره تماس معتبر نیست")
    .required("لطفا شماره تماس رو وارد کنید"),

})
export let registerSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "اسم شما حداقل باید 10 حرف داشته باشد")
    .max(10, "اسم شما حداکثر باید 10 حرف داشته باشد")
    .required("لطفا اسم خودتون رو بنویسید"),

  lastName: Yup.string()
    .min(3, "فامیلی شما حداقل باید 3 حرف داشته باشد")
    .max(20, "فامیلی شما حداکثر باید 20 حرف داشته باشد")
    .required("لطفا فامیلی خودتون رو بنویسید"),

  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9.@$-_#]{8,}$/,
      "رمز عبور باید شامل حروف بزرگ و کوچک انگلیسی و اعداد باشد و حداقل 8 حرف داشته باشد",
    )
    .required("لطفا رمز عبور خودتون رو وارد کنید"),

  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("password"), null as any],
      "رمز عبور و تکرار رمز عبور باید مشابه باشند",
    )
    .required("لطفا رمز عبور خودتون رو تایید کنید"),

    phone: Yup.string()
    .matches(phoneRegExp, "شماره تماس معتبر نیست")
    .required("لطفا شماره تماس خودتون رو وارد کنید"),
});

export let changePasswordSchema = Yup.object().shape({
  currentPassword: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9.@$-_#]{8,}$/,
      "رمز عبور باید شامل حروف بزرگ و کوچک انگلیسی و اعداد باشد و حداقل 8 حرف داشته باشد",
    )
    .required("لطفا رمز عبور فعلی خودتون رو وارد کنید"),

  newPassword: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9.@$-_#]{8,}$/,
      "رمز عبور باید شامل حروف بزرگ و کوچک انگلیسی و اعداد باشد و حداقل 8 حرف داشته باشد",
    )
    .required("لطفا رمز عبور جدید رو وارد کنید"),

  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("newPassword"), null as any],
      "رمز عبور جدید و تکرار رمز عبور جدید باید مشابه باشند",
    )
    .required("لطفا رمز عبور جدید خودتون رو تایید کنید"),
});
