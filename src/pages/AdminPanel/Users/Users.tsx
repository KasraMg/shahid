import React from "react";
import Layout from "../../../layouts/adminPanel";
import DataTable from "react-data-table-component";
import Title from "../../../components/modules/title/Title";
import { Button } from "../../../components/shadcn/ui/button";
import Modal from "../../../components/templates/AdminPanel/users/Modal";

const Users = () => {
  const columns = [
    {
      name: "نام کاربری",
      selector: (row: { name: string }) => row.name,
    },
    {
      name: "شماره موبایل",
      selector: (row: { phone: string }) => row.phone,
    },
    {
      name: "تاریخ عضویت",
      selector: (row: { date: string }) => row.date,
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

  const data = [
    {
      id: 1,
      name: "صبخ بخیر عزیز دل",
      phone: "09046417084",
      date: "1403/05/01",
      edit:<Modal/> ,
      delete:<Button variant={"danger"}>حذف</Button>
    },
    {
      id: 2,
      name: "شب بخیر جون دل",
      phone: "09046417084",
      date: "1403/05/01",
      edit: <Modal/>,
      delete:<Button variant={"danger"}>حذف</Button>
    },
    {
      id: 3,
      name: "صبخ بخیر عزیز دل",
      phone: "09046417084",
      date: "1403/05/01",
      edit: <Modal/>,
      delete:<Button variant={"danger"}>حذف</Button>
    },
    {
      id: 4,
      name: "شب بخیر جون دل",
      phone: "09046417084",
      date: "1403/05/01",
      edit: <Modal/>,
      delete:<Button variant={"danger"}>حذف</Button>
    },
    {
      id: 5,
      name: "صبخ بخیر عزیز دل",
      phone: "09046417084",
      date: "1403/05/01",
      edit: <Modal/>,
      delete:<Button variant={"danger"}>حذف</Button>
    },
    {
      id: 6,
      name: "شب بخیر جون دل",
      phone: "09046417084",
      date: "1403/05/01",
      edit: <Modal/>,
      delete:<Button variant={"danger"}>حذف</Button>
    },
    {
      id: 7,
      name: "صبخ بخیر عزیز دل",
      phone: "09046417084",
      date: "1403/05/01",
      edit: <Modal/>,
      delete:<Button variant={"danger"}>حذف</Button>
    },
    {
      id: 8,
      name: "شب بخیر جون دل",
      phone: "09046417084",
      date: "1403/05/01",
      edit: <Modal/>,
      delete:<Button variant={"danger"}>حذف</Button>
    },
  ];
  return (
    <Layout>
      <Title className="sm:justify-center" title={"مدیریت کاربران"} />

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

export default Users;
