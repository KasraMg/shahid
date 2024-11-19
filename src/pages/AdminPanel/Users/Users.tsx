import Layout from "../../../layouts/adminPanel";
import DataTable from "react-data-table-component";
import Title from "../../../components/modules/title/Title";
import { Button } from "../../../components/shadcn/ui/button";
import Modal from "../../../components/templates/AdminPanel/users/Modal";
import { useState } from "react";

const Users = () => {
  const [filterText, setFilterText] = useState("");

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
      name: "شاهین مشکل گشا",
      phone: "09046417084",
      date: "1403/05/01",
      edit: <Modal />,
      delete: <Button variant={"danger"}>حذف</Button>,
    },
    {
      id: 2,
      name: "رضا مرادی",
      phone: "09046417084",
      date: "1403/05/01",
      edit: <Modal />,
      delete: <Button variant={"danger"}>حذف</Button>,
    },
    {
      id: 3,
      name: "مریم مشکل گشا",
      phone: "09046417084",
      date: "1403/05/01",
      edit: <Modal />,
      delete: <Button variant={"danger"}>حذف</Button>,
    },
    {
      id: 4,
      name: "محمد زارع",
      phone: "09046417084",
      date: "1403/05/01",
      edit: <Modal />,
      delete: <Button variant={"danger"}>حذف</Button>,
    },
    {
      id: 5,
      name: "فریدون شهریاری",
      phone: "09046417084",
      date: "1403/05/01",
      edit: <Modal />,
      delete: <Button variant={"danger"}>حذف</Button>,
    },
    {
      id: 6,
      name: "نفیسه کیوانی",
      phone: "09046417084",
      date: "1403/05/01",
      edit: <Modal />,
      delete: <Button variant={"danger"}>حذف</Button>,
    },
    {
      id: 7,
      name: "دنیا رضایی",
      phone: "09046417084",
      date: "1403/05/01",
      edit: <Modal />,
      delete: <Button variant={"danger"}>حذف</Button>,
    },
    {
      id: 8,
      name: "شهرام مرادی",
      phone: "09046417084",
      date: "1403/05/01",
      edit: <Modal />,
      delete: <Button variant={"danger"}>حذف</Button>,
    },
    {
      id: 9,
      name: "کریم زراعتی",
      phone: "09046417084",
      date: "1403/05/01",
      edit: <Modal />,
      delete: <Button variant={"danger"}>حذف</Button>,
    },
    {
      id: 10,
      name: "رها سلطانی",
      phone: "09046417084",
      date: "1403/05/01",
      edit: <Modal />,
      delete: <Button variant={"danger"}>حذف</Button>,
    },
    {
      id: 10,
      name: "شاهرخ ماهانی",
      phone: "09046417084",
      date: "1403/05/01",
      edit: <Modal />,
      delete: <Button variant={"danger"}>حذف</Button>,
    },
    {
      id: 10,
      name: "سیاوش باقری",
      phone: "09046417084",
      date: "1403/05/01",
      edit: <Modal />,
      delete: <Button variant={"danger"}>حذف</Button>,
    },
  ];
  // فیلتر کردن داده‌ها
  const filteredData = data.filter((item) => item.name.includes(filterText));

  return (
    <Layout>
      <Title className="sm:justify-center" title={"مدیریت کاربران"} />

      {/* فیلتر */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="جستجوی نام کاربری"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className=" rounded-md border-b mb-5 mt-4 outline-none border-black w-[300px] sm:w-full p-2"
        />
      </div>

      {/* جدول */}
      <div>
        <DataTable
          responsive
          progressComponent={".... "}
          pagination
          columns={columns}
          data={filteredData}
          noDataComponent={<div className="text-2xl">کاربری با این اسم پیدا نشد.</div>}

        />
      </div>
    </Layout>
  );
};

export default Users;
