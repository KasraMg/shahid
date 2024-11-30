import { Link } from "react-router-dom";

const index = () => {
  return (
    <div>
      <Link
        className="mx-auto mt-52 block w-max text-4xl"
        to={"/adminPanel/users"}
      >
        پنل ادمین{" "}
      </Link>
      <Link className="mx-auto mt-10 block w-max text-4xl" to={"/login"}>
        ورود{" "}
      </Link>
      <Link
        className="mx-auto mt-10 block w-max text-4xl"
        to={"/martyr/packages"}
      >
        ثبت خاطرات{" "}
      </Link>
    </div>
  );
};

export default index;
