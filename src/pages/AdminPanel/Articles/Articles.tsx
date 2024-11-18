import Layout from "../../../layouts/adminPanel";
import Title from "../../../components/modules/title/Title";
import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Button } from "../../../components/shadcn/ui/button";
const Articles = () => {
  const [data, setData] = useState("");

  return (
    <Layout>
      <Title className="sm:justify-center" title={"مقالات"} />

      <div>
        <p className="mb-2">تیتر</p>
        <input
          type="text"
          className="w-[300px] rounded-md border border-black px-4 py-2.5 sm:w-full lg:w-full"
        />
      </div>

      <div className="mt-10">
        <p className="mb-2">بدنه</p>
        <CKEditor
          editor={ClassicEditor}
          data={data}
          onChange={(_event, editor) => {
            const newData = editor.getData();
            setData(newData);
          }}
        />
      </div>

      <Button variant={'main'} className="mx-auto block mb-10 mt-10 px-7">ثبت</Button>
    </Layout>
  );
};

export default Articles;
