import Layout from "../../../layouts/adminPanel";
import DataTable, { TableColumn } from "react-data-table-component";
import Title from "../../../components/modules/title/Title";
import { Button } from "../../../components/shadcn/ui/button";
import Modal from "../../../components/templates/AdminPanel/users/Modal";
import { useEffect, useState } from "react";
import { GoDownload } from "react-icons/go";
import useGetData from "../../../hooks/useGetData";
import { getUsers } from "../../../utils/fetchs";
import Loader from "../../../components/modules/loader/Loader";
import { UserType } from "../../../types/users.";
import useDeleteData from "../../../hooks/useDeleteData";
import swal from "sweetalert";

interface UsersData {
  id: number;
  name: string;
  phone: string;
  package: string;
  date: string;
  edit: any;
  delete: any;
}

const Users = () => {
  const [filterText, setFilterText] = useState("");

  const { data: users, isPending } = useGetData<any>(["users"], getUsers);
  const [data, setData] = useState<UsersData[]>([]);
  const [userSelectId, setUserSelectId] = useState<number>(0);
  const columns: TableColumn<UsersData>[] = [
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

  const filteredData = data.filter((item) => item.name.includes(filterText));

  const exportCSV = (data: UsersData[], columns: any[]) => {
    const headers = columns.map((col) => col.name).join(",");
    const rows = data.map((row) =>
      columns.map((col) => col.selector(row)).join(","),
    );
    const csvContent = [headers, ...rows].join("\n");

    const blob = new Blob(["\uFEFF" + csvContent], {
      type: "text/csv;charset=utf-8;",
    });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "export.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    console.log(users);
    if (users?.data) {
      const tableData: unknown = users.data.map((user: UserType) => ({
        id: user.id,
        name: user.firstName + " " + user.lastName,
        phone: user.phoneNumber,
        package: user.packageId ? "دارد" : "ندارد",
        date: "1403/05/01",
        edit: <Modal data={user}/>,
        delete: (
          <Button
            onClick={() => {
              setUserSelectId(user.id);
              swal({
                title: "آیا از حذف کاربر اطمینان دارید؟",
                icon: "warning",
                buttons: ["نه", "آره"],
              }).then((res) => {
                if (res) {
                  deleteHandlerMutation();
                }
              });
            }}
            variant={"danger"}
          >
            حذف
          </Button>
        ),
      }));
      setData(tableData as UsersData[]);
    }
  }, [users]);

  const { mutate: deleteHandlerMutation, isPending: deleteHandlerPending } =
    useDeleteData(
      `/api/UserManagementControler/${userSelectId}`,
      "کاربر با موفقیت حذف شد",
      "users",
    );

  return (
    <Layout>
      <Title className="sm:justify-center" title={"مدیریت کاربران"} />
      <div className="mb-4">
        <input
          type="text"
          placeholder="جستجوی نام کاربری"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="mb-5 mt-4 w-[300px] rounded-md border-b border-black p-2 outline-none sm:w-full"
        />
      </div>

      <div className="mb-4 mr-auto block w-max sm:ml-auto">
        <Button
          className="px-10 sm:px-4"
          onClick={() => exportCSV(filteredData, columns)}
        >
          اکسپورت
          <GoDownload />
        </Button>
      </div>

      <div>
        <DataTable
          responsive
          pagination
          columns={columns}
          data={filteredData}
          noDataComponent={
            <div className="text-2xl">کاربری با این اسم پیدا نشد.</div>
          }
        />
      </div>

      {isPending || (deleteHandlerPending && <Loader />)}
    </Layout>
  );
};

export default Users;
