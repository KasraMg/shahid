import Layout from "../../../layouts/adminPanel";
import Title from "../../../components/modules/title/Title";
import DataTable from "react-data-table-component";
import { Button } from "../../../components/shadcn/ui/button";

const Price = () => {
  const columns = [
    {
      name: "کاربر ",  
      selector: (row: { user: string }) => row.user,
    },
    {
      name: "مبلغ", 
      sortable: true,
      selector: (row: { price: string }) => row.price,
    },
    {
      name: "تاریخ ",  
      selector: (row: { date: string }) => row.date,
    },
    {
      name: "وضعیت",  
      selector: (row: { status: string }) => row.status,
    },
    {
      name: "نوع", 
      sortable: true,
      selector: (row: { type: string }) => row.type,
    },
  ];

  const data = [
    {
      id: 1,
      user: "شاهین مشکل گشا",
      price: "12233434 تومان",
      date: "1403/05/01",
      status: <p className="text-green-600">موفق</p>,
      type: "ارتقا",
    },
    {
      id: 2,
      user: "شاهین مشکل گشا",
      price: "12233434 تومان",
      date: "1403/05/01",
      status: <p className="text-red-600">ناموفق</p>,
      type: "تمدید",
    },
    {
      id: 3,
      user: "شاهین مشکل گشا",
      price: "12233434 تومان",
      date: "1403/05/01",
      status: <p className="text-green-600">موفق امیز</p>,
      type: "تمدید",
    },
    {
      id: 4,
      user: "شاهین مشکل گشا",
      price: "12233434 تومان",
      date: "1403/05/01",
      status: <p className="text-red-600">ناموفق</p>,
      type: "تمدید",
    },
    {
      id: 5,
      user: "شاهین مشکل گشا",
      price: "12233434 تومان",
      date: "1403/05/01",
      status: <p className="text-green-600">موفق امیز</p>,
      type: "ثبت نام",
    },
    {
      id: 6,
      user: "شاهین مشکل گشا",
      price: "12233434 تومان",
      date: "1403/05/01",
      status: <p className="text-green-600">موفق امیز</p>,
      type: "تمدید",
    },
    {
      id: 7,
      user: "شاهین مشکل گشا",
      price: "12233434 تومان",
      date: "1403/05/01",
      status: <p className="text-green-600">موفق امیز</p>,
      type: "ارتقا",
    },
    {
      id: 8,
      user: "شاهین مشکل گشا",
      price: "12233434 تومان",
      date: "1403/05/01",
      status: <p className="text-green-600">موفق امیز</p>,
      type: "تمدید",
    },
  ];

  return (
    <Layout>
      <Title className="sm:justify-center" title={"پرداخت ها"} />
      <div>
        <DataTable
          responsive
          progressComponent={".... "}
          pagination
          columns={columns}
          data={data}
        />
      </div>
    </Layout>
  );
};

export default Price;
