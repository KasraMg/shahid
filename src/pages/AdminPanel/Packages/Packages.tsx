import Layout from "../../../layouts/adminPanel";
import Title from "../../../components/modules/title/Title";
import Modal from "../../../components/templates/AdminPanel/packages/Modal";
import useGetData from "../../../hooks/useGetData";
import { getApPackages } from "../../../utils/fetchs";
import Loader from "../../../components/modules/loader/Loader";
import DataTable from "react-data-table-component";
import { Button } from "../../../components/shadcn/ui/button";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import { FaCheck } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { PackagesData } from "../../../types/adminPanel";
import { packagesColumns } from "../../../utils/columns";
import useDeleteData from "../../../hooks/useDeleteData";
const Packages = () => {
  const { data: packages, isPending } = useGetData<any>(
    ["apPackages"],
    getApPackages,
  );
  const [data, setData] = useState<PackagesData[]>([]);
  const [packageSelectId, setPackageSelectId] = useState(0);
  useEffect(() => {
    console.log(packages);
    if (packages?.data) {
      const tableData: unknown = packages.data.map((pack: PackagesData) => ({
        id: pack.id,
        name: pack.name,
        duration: pack.duration,
        price: pack.price,
        renewalFee: pack.renewalFee,
        validityPeriod: pack.validityPeriod,
        imageCount: pack.imageCount,
        notificationCount: pack.notificationCount,
        videoCount: pack.videoCount,
        audioFileLimit: pack.audioFileLimit,
        barcodeEnabled: pack.barcodeEnabled ? (
          <FaCheck className="text-green-600" />
        ) : (
          <GrClose className="text-red-600" />
        ),
        templateSelectionEnabled: pack.templateSelectionEnabled ? (
          <FaCheck className="text-green-600" />
        ) : (
          <GrClose className="text-red-600" />
        ),
        condolenceMessageEnabled: pack.condolenceMessageEnabled ? (
          <FaCheck className="text-green-600" />
        ) : (
          <GrClose className="text-red-600" />
        ),
        visitorContentSubmissionEnabled:
          pack.visitorContentSubmissionEnabled ? (
            <FaCheck className="text-green-600" />
          ) : (
            <GrClose className="text-red-600" />
          ),
        locationAndNavigationEnabled: pack.locationAndNavigationEnabled ? (
          <FaCheck className="text-green-600" />
        ) : (
          <GrClose className="text-red-600" />
        ),
        sharingEnabled: pack.sharingEnabled ? (
          <FaCheck className="text-green-600" />
        ) : (
          <GrClose className="text-red-600" />
        ),
        file360DegreeEnabled: pack.file360DegreeEnabled ? (
          <FaCheck className="text-green-600" />
        ) : (
          <GrClose className="text-red-600" />
        ),
        displayEnabled: pack.displayEnabled ? (
          <FaCheck className="text-green-600" />
        ) : (
          <GrClose className="text-red-600" />
        ),
        updateCapabilityEnabled: pack.updateCapabilityEnabled ? (
          <FaCheck className="text-green-600" />
        ) : (
          <GrClose className="text-red-600" />
        ),
        edit: <Modal package={pack} edit={true} />,
        delete: (
          <Button
            className="!text-sm"
            onClick={() => {
              setPackageSelectId(pack.id);
              swal({
                title: "آیا از حذف پکیج اطمینان دارید؟",
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
      setData(tableData as PackagesData[]);
    }
  }, [packages]);

  const { mutate: deleteHandlerMutation, isPending: deleteHandlerPending } =
    useDeleteData(
      `/api/packages/${packageSelectId}`,
      "پکیج با موفقیت حذف شد",
      "apPackages",
    );

  return (
    <Layout className="adminPanel-packages">
      <div className="flex justify-between text-xl sm:flex-col sm:justify-between">
        <Title className="sm:justify-center" title={"پکیج ها"} />
        <Modal edit={false} />
      </div>
      <div>
        <DataTable
          responsive
          progressComponent={".... "}
          pagination
          columns={packagesColumns}
          data={data}
        />
      </div>
      {isPending && <Loader />}
      {deleteHandlerPending && <Loader />}
    </Layout>
  );
};

export default Packages;
