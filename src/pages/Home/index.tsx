import { Link } from "react-router-dom";
import { authStore } from "../../stores/auth";
import { toast } from "../../hooks/use-toast";

const index = () => {
  const { userData } = authStore((state) => state);

  return (
    <div>

    {userData &&(
      <>
      <p className="text-center mt-5">{userData.firstName } {userData.lastName }</p>
      </>
    )}


{userData ?(
      <Link
      className="mx-auto mt-24 block w-max text-4xl"
      to={"/adminPanel/users"}
    >
      پنل ادمین{" "}
    </Link>
) :(
  <div
  className="mx-auto mt-24 cursor-pointer block w-max text-4xl"
  onClick={()=>{
    toast({ 
        variant: "danger",
        title: "برای ورود به پنل ابتدا لاگین کنید ",
 
    })
  }}
>
  پنل ادمین{" "}
</div>
)}

      <Link className="mx-auto mt-10 block w-max text-4xl" to={"/login"}>
        ورود{" "}
      </Link>
      <Link
        className="mx-auto mt-10 block w-max text-4xl"
        to={"/martyr/packages"}
      >
        خرید پکیج{" "}
      </Link>
      <Link
        className="mx-auto mt-10 block w-max text-4xl"
        to={"/martyr/register"}
      >
        ثبت شهید{" "}
      </Link>
      <Link className="mx-auto mt-10 block w-max text-4xl" to={"/deceased/22"}>
        صفحه متوفی{" "}
      </Link>

      <p dir="rtl" className="mt-12 text-center">
        22 صفحه توسعه داده شده
      </p>
      <p className="text-center">
        ظواهر پنل ادمین، لاگین ریجستر، ثبت پکیج و ثبت شهید درست شده است
      </p>
    </div>
  );
};

export default index;
