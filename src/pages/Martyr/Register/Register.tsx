import Header from "../../../components/modules/header/Header";
import { Button } from "../../../components/shadcn/ui/button";
import Images from "../../../components/templates/martyr/register/Images";
import IntroFields from "../../../components/templates/martyr/register/IntroFields";
import TextareaFields from "../../../components/templates/martyr/register/TextareaFields";
import Videos from "../../../components/templates/martyr/register/Videos";
import Voices from "../../../components/templates/martyr/register/Voices";
import LastFields from "../../../components/templates/martyr/register/lastFields";
import { martyrStore } from "../../../stores/martyrRegister";

const MartyrRegister = () => {
  const {
    fullName,
    fatherName,
    birthBorn,
    birthDead,
    placeDead,
    responsibilities,
    operations,
    biography,
    will,
    causeOfMartyrdom,
    lastResponsibility,
    gorooh,
    yegan,
    niru,
    ghesmat,
    poem,
    memories,
    images,
    voices,
    videos,
  } = martyrStore((state) => state);

  return (
    <div>
      <Header />
      <div className="register_martyr flex min-h-screen flex-col">
        <div
          className={`relative mt-20 flex-grow overflow-y-hidden rounded-t-[120px] bg-white px-24 pb-0 pt-20 text-right xs:!px-4 sm:pt-10 md:px-10`}
        >
          <div className="flex justify-center">
            <p className="relative -top-14 text-center text-2xl sm:-top-4">
              ثبت شهید
            </p>
            <img
              src="/images/02ecb2a6bbf8b10559ad6cdfbb4320d3_prev_ui.png"
              className="absolute -top-14 w-44"
              alt=""
            />
          </div>

          <IntroFields />
          <TextareaFields />
          <Images />
          <Voices />
          <Videos />
          <LastFields />
          <Button
            disabled={
              !fullName ||
              !fatherName ||
              !birthBorn ||
              !birthDead ||
              !placeDead ||
              !responsibilities ||
              !operations ||
              !biography ||
              !will ||
              !causeOfMartyrdom ||
              !lastResponsibility ||
              !gorooh ||
              !yegan ||
              !niru ||
              !ghesmat ||
              !poem ||
              !memories ||
              !images ||
              !voices ||
              !videos
            }
            className="mx-auto mb-10 mt-16 block px-6 !pb-10 text-xl"
            variant={"main"}
          >
            ثبت شهید
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MartyrRegister;
