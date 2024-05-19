import AppLayout from "@/layouts/app-layout";
import { FaRegUser } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import { FaChevronRight } from "react-icons/fa6";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/tailwind-utils";
import ProfileLayout from "@/layouts/profile-layout";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { FaHourglassHalf, FaCircleCheck } from "react-icons/fa6";
import { Separator } from "@/components/ui/separator";
import { useEffect, useRef, useState } from "react";

const PENGADUAN_STEPS = [
  {
    name: "Pengaduan Diajukan",
    desc: "Pengaduan kamu diterima pada jam 15.30",
  },
  {
    name: "Pengaduan Diajukan",
    desc: "Pengaduan kamu diterima pada jam 17.30",
  },
  {
    name: "Pengaduan Diajukan",
    desc: "Pengaduan kamu diterima pada jam 20.30",
  },
  {
    name: "Pengaduan Selesai",
  },
];

const PengaduanStepper = ({ stepsConfig = [], currentStep = 1, isComplete = false, className }) => {
  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });
  const stepRef = useRef([]);

  useEffect(() => {
    setMargins({
      marginLeft: stepRef.current[0].offsetHeight / 2,
      marginRight: stepRef.current[stepsConfig.length - 1].offsetHeight / 2,
    });
  }, [stepRef, stepsConfig.length]);

  if (!stepsConfig.length) {
    return <></>;
  }

  const calculateProgressBarWidth = () => {
    return ((currentStep - 1) / (stepsConfig.length - 1)) * 100;
  };

  return (
    <>
      <div className={cn("stepper-horizontal flex-shrink-0  w-full", className)}>
        {stepsConfig.map((step, index) => {
          return (
            <div
              key={step.name}
              ref={(el) => (stepRef.current[index] = el)}
              className={`step-horizontal ${currentStep > index + 1 || isComplete ? "complete-horizontal" : ""} ${
                currentStep === index + 1 ? "active-horizontal" : ""
              } `}
            >
              <div className="step-number-horizontal ">
                {currentStep > index + 1 || isComplete ? (
                  <span>&#10003;</span>
                ) : currentStep === index + 1 ? (
                  <FaHourglassHalf className="w-5 h-5 " />
                ) : (
                  ""
                )}
              </div>
              <div>
                <div className="text-text16_20 font-light font-medium">{step.name}</div>
                <div className="step-name-horizontal text-sm text-slate-500">{step.desc}</div>
              </div>
            </div>
          );
        })}

        <div
          className="progress-bar-horizontal"
          style={{
            height: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`,
          }}
        >
          <div className="progress-horizontal" style={{ height: `${calculateProgressBarWidth()}%` }}></div>
        </div>
      </div>
    </>
  );
};

export const PengaduanSayaPage = () => {
  return (
    <div className="space-y-[24px]">
      <div className="flex items-center gap-x-[24px]">
        <img src="/images/hana.png" className="w-[60px] h-[60px]" />
        <div>
          <h1 className="text-lg font-medium">Hana Mardini</h1>
          <p className="text-sm">Perempuan</p>
        </div>
      </div>
      <div className="border rounded-[20px] p-5 space-y-5">
        <div className=" cursor-pointer flex rounded-[10px] items-center justify-between border py-2 px-4 ">
          <div className="gap-x-2 flex items-center">
            <div className="flex items-center justify-center w-12 h-12  bg-color-1 text-white rounded-full">
              <FaRegUser className="w-6 h-6 flex-shrink-0" />
            </div>
            <h1>Profil Saya</h1>
          </div>
          <FaChevronRight className="w-6 h-6" />
        </div>
        <div className="flex cursor-pointer items-center justify-between rounded-[10px] border py-2 px-4 ">
          <div className="gap-x-2 flex items-center">
            <div className="flex items-center justify-center w-12 h-12  bg-color-1 text-white rounded-full">
              <FaRegUser className="w-6 h-6 flex-shrink-0" />
            </div>
            <h1>Pengaduan Saya</h1>
          </div>
          <FaChevronRight className="w-6 h-6" />
        </div>
        <div className="flex rounded-[10px] cursor-pointer items-center justify-between border py-2 px-4 ">
          <div className="gap-x-2 flex items-center">
            <div className="flex items-center justify-center w-12 h-12  bg-color-1 text-white rounded-full">
              <TbLogout2 className="w-6 h-6 flex-shrink-0" />
            </div>
            <h1>Keluar</h1>
          </div>
          <FaChevronRight className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

const ProfilePage = () => {
  const [currentStep, setCurrentStep] = useState(3);
  const [isComplete, setIsComplete] = useState(false);
  const [isNextForm, setIsNextForm] = useState(false);
  const [tinjauId, setTinjauId] = useState(null); //pengaduan
  const [isState, setIsState] = useState(false);
  const [choosedLayananAduan, setChoosedLayananAduan] = useState({
    name: "",
    code: "",
  });

  const handleStep = () => {
    setCurrentStep((prevStep) => {
      if (choosedLayananAduan?.name) {
        return prevStep;
      }
      if (prevStep === 3) {
        setIsComplete(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };

  const handleIsState = (isState) => {
    setIsState(isState);
    setChoosedLayananAduan({
      name: "",
      code: "",
    });
    setCurrentStep(1);
    setIsComplete(false);
    setIsNextForm(false);
  };

  const handleAduan = (layananAduan) => {
    setChoosedLayananAduan({
      name: layananAduan?.name,
      code: layananAduan?.code,
    });
    handleStep();
  };
  return (
    <ProfileLayout>
      <div className="px-[64px] ">
        <h1 className="font-bold text-2xl">Pengaduan Saya</h1>
      </div>

      <div className="pt-[22px] px-[64px] space-y-10">
        <div className=" space-y-5 flex flex-col items-end">
          <div className="space-y-5 w-full">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3 text-[rgba(0,_163,_232,_1)]">
                {" "}
                <FaHourglassHalf className="w-6 h-6" />
                <span>Pengaduan dalam proses</span>
              </div>
              <span className="text-slate-500">05 Mei 2024</span>
            </div>
            <div className="flex items-center gap-x-6">
              <img src="/images/jalan-rusak.svg" className="w-[120px] h-[90px]" />
              <div className="space-y-2">
                <h1 className="text-xl font-bold">Jalan Rusak</h1>
                <p className="text-sm">Setiap hari aku melewati jalan raya Cileunyi selalu macet karena</p>
              </div>
            </div>
            <div className="flex  items-center gap-x-5">
              <Button className="w-full" variant="destructive">
                Batalkan pengaduan
              </Button>
              <Button onClick={() => setTinjauId((prev) => !prev)} className="w-full">
                {tinjauId ? "Tutup Tinjau Pengaduan" : "Tinjau Pengaduan"}
              </Button>
            </div>
          </div>
          {tinjauId && (
            <div className="max-w-[500px] border rounded-[8px] p-5  space-y-5 w-full">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3 text-[rgba(0,_163,_232,_1)]">
                  {" "}
                  <FaHourglassHalf className="w-4 h-4" />
                  <span className="text-sm">Pengaduan dalam proses</span>
                </div>
                <span className="text-slate-500 text-sm">05 Mei 2024</span>
              </div>

              <div className="flex items-center gap-5">
                <img src="/images/foto_aduan.svg" className="object-cover w-[80px] h-[80px] rounded-[10px]" />
                <div>
                  <h1 className="text-text16_24 font-semibold">Jalan Rusak</h1>
                  <p className="text-sm">
                    Setiap hari aku melewati jalan raya Cileunyi selalu macet karena adanya jalan rusak, mohon diperhatikan untuk
                    pemerintah setempat semoga jalan cepat di perbaiki.
                  </p>
                </div>
              </div>

              <Separator />

              <div>
                <PengaduanStepper stepsConfig={PENGADUAN_STEPS} currentStep={currentStep} isComplete={isComplete} />
              </div>
            </div>
          )}
        </div>

        <Separator className="h-2 rounded-md" />
        <div className="space-y-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 text-[rgba(76,_175,_80,_1)]">
              {" "}
              <FaCircleCheck className="w-6 h-6" />
              <span>Pengaduan selesai</span>
            </div>
            <span className="text-slate-500">05 Mei 2024</span>
          </div>
          <div className="flex items-center gap-x-6">
            <img src="/images/trotoar-ancur.svg" className="w-[120px] h-[90px]" />
            <div className="space-y-2">
              <h1 className="text-xl font-bold">Trotoar Ancur</h1>
              <p className="text-sm">Trotoar dijalan pahlawan ancur tidak enak dipandang mohon segera....</p>
            </div>
          </div>
          <Button className="w-full">Buka Kembali Pengaduan</Button>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default ProfilePage;
