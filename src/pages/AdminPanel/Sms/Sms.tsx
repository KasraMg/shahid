import Layout from "../../../layouts/adminPanel";
import Title from "../../../components/modules/title/Title";
import { Button } from "../../../components/shadcn/ui/button";
import { useEffect, useState } from "react";
import useGetData from "../../../hooks/useGetData";
import { getSms } from "../../../utils/fetchs";
import Loader from "../../../components/modules/loader/Loader";
import usePostData from "../../../hooks/usePostData";

const Sms = () => {
  const [status, setStatus] = useState("Authentication");
  const [message, setMessage] = useState("");
  const [sms, setSms] = useState<{
    message: string;
    id: number;
    messageTypeFa: string;
    messageType: string;
  } | null>(null);
  const { data, isPending } = useGetData<any>(["sms"], getSms);
  console.log(data);

  useEffect(() => {
    const sms = data?.data.find(
      (sms: { messageType: string }) => sms.messageType === status,
    );
    setSms(sms);
  }, [data, status]);

  const { mutate: mutation, isPending: updatePending } = usePostData<{}>(
    `/api/SmsTemplate/${sms?.id}`,
    "اطلاعات کاربر با موفقیت بروزرسانی شد",
    true,
    (data) => {
      if (data.statusCode === 200) {
        setMessage("");
      }
    },
    false,
    "sms",
  );
  return (
    <Layout>
      <div>
        <Title
          className="sm:justify-center"
          title={"قالب مد نظر را انتخاب کنید"}
        />
        <div className="mb-8 flex flex-wrap gap-4 sm:grid sm:grid-cols-[1fr,1fr] sm:gap-2">
          {data?.data.map(
            (sms: { messageTypeFa: string; messageType: string }) => (
              <div
                className={`${status === sms.messageType ? "border-DoubleSpanishWhite bg-white" : "border-transparent bg-DoubleSpanishWhite"} cursor-pointer rounded-lg border p-2 text-center transition-colors hover:border-DoubleSpanishWhite hover:bg-white sm:p-1`}
                onClick={() => {
                  setStatus(sms.messageType);
                }}
              >
                <p className="sm:!text-sm">{sms.messageTypeFa}</p>
              </div>
            ),
          )}
        </div>

        <div className="mb-20 sm:mb-14">
          <Title
            className="sm:justify-center sm:!text-xl"
            title={`پیامک جدید برای قالب ${sms?.messageTypeFa}`}
          />

          <div className="flex items-end gap-3 sm:flex-col">
            <input
              placeholder="سلام..."
              type="text"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="w-[300px] border-b border-black p-3 outline-none sm:w-full"
            />
            <Button
              disabled={!message}
              variant={"main"}
              className="!text-xl sm:w-full"
              onClick={() =>
                mutation({
                  id: sms?.id,
                  messageType: sms?.messageType,
                  message: message,
                })
              }
            >
              ثبت
            </Button>
          </div>
        </div>

        <Title
          className="sm:justify-center"
          title={` پیامک فعلی قالب ${sms?.messageTypeFa}`}
        />

        {sms && (
          <div className="mb-5 flex justify-center bg-DoubleSpanishWhite py-3 text-black">
            <p className="!text-2xl sm:!text-xl">{sms.message}</p>
          </div>
        )}

        {isPending || (updatePending && <Loader />)}
      </div>
    </Layout>
  );
};

export default Sms;
