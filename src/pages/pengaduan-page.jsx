import { AdministrasiSVG } from "@/assets/svg/administrasi-svg";
import { InfrastrukturSVG } from "@/assets/svg/infrastuktur-svg";
import { KesehatanSVG } from "@/assets/svg/kesehatan-svg";
import { KorupsiSVG } from "@/assets/svg/korupsi-svg";
import { KriminalSVG } from "@/assets/svg/kriminal-svg";
import { LainnyaSVG } from "@/assets/svg/lainnya-svg";
import { PendidikanSVG } from "@/assets/svg/pendidikan-svg";
import { PertanianSVG } from "@/assets/svg/pertanian-svg";
import AppLayout from "@/layouts/app-layout";
import { cn } from "@/lib/tailwind-utils";

import { useEffect, useRef, useState } from "react";

const CHECKOUT_STEPS = [
  {
    name: "Pilih Kategori",
    Component: () => <div>Provide your contact details.</div>,
  },
  {
    name: "Tulis Pengaduan",
    Component: () => <div>Enter your shipping address.</div>,
  },
  {
    name: "Pratinjau",
    Component: () => <div>Complete payment for your order.</div>,
  },
];

const CheckoutStepper = ({ stepsConfig = [] }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });
  const stepRef = useRef([]);

  useEffect(() => {
    setMargins({
      marginLeft: stepRef.current[0].offsetWidth / 2,
      marginRight: stepRef.current[stepsConfig.length - 1].offsetWidth / 2,
    });
  }, [stepRef, stepsConfig.length]);

  if (!stepsConfig.length) {
    return <></>;
  }

  console.log("MARGIN: ", margins);

  const handleNext = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === stepsConfig.length) {
        setIsComplete(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };

  const calculateProgressBarWidth = () => {
    console.log(((currentStep - 1) / (stepsConfig.length - 1)) * 100);
    return ((currentStep - 1) / (stepsConfig.length - 1)) * 100;
  };

  const ActiveComponent = stepsConfig[currentStep - 1]?.Component;

  return (
    <>
      <div className="stepper flex-shrink-0  w-full">
        {stepsConfig.map((step, index) => {
          return (
            <div
              key={step.name}
              ref={(el) => (stepRef.current[index] = el)}
              className={`step ${currentStep > index + 1 || isComplete ? "complete" : ""} ${
                currentStep === index + 1 ? "active" : ""
              } `}
            >
              <div className="step-number">{currentStep > index + 1 || isComplete ? <span>&#10003;</span> : index + 1}</div>
              <div className="step-name">{step.name}</div>
            </div>
          );
        })}

        <div
          className="progress-bar"
          style={{
            width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`,
            marginLeft: margins.marginLeft,
            marginRight: margins.marginRight,
          }}
        >
          <div className="progress" style={{ width: `${calculateProgressBarWidth()}%` }}></div>
        </div>
      </div>

      {/* <ActiveComponent /> */}

      {/* {!isComplete && (
        <button className="btn" onClick={handleNext}>
          {currentStep === stepsConfig.length ? "Finish" : "Next"}
        </button>
      )} */}
    </>
  );
};

const Tests = ({ className }) => {
  return (
    <svg viewBox="0 0 111 110" xmlns="http://www.w3.org/2000/svg" className={cn(className)}>
      <path d="M18.565 44L55.25 66L110.25 33L55.25 0L0.25 33H55.25V44H18.565ZM0.25 44V88L11.25 75.79V50.6L0.25 44ZM55.25 110L27.75 93.5L16.75 86.9V53.9L55.25 77L93.75 53.9V86.9L55.25 110Z" />
    </svg>
  );
};

const PengaduanPage = () => {
  return (
    <AppLayout>
      <div className="max-w-[1200px] mx-auto py-[60px]">
        <h1 className="text-3xl font-bold">Pengaduan</h1>

        <div className=" mt-[23px] rounded-[20px] shadow-high py-[26px] px-[64px] h-[100px] flex items-center  ">
          <CheckoutStepper stepsConfig={CHECKOUT_STEPS} />
        </div>
        <div className="pt-[32px]">
          <h1 className="pb-[32px]">Pilih kategori pengaduan Anda.</h1>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-[rgba(204,_237,_250,_1)] flex justify-center items-center flex-col h-[240px] gap-4 rounded-[32px]">
              <KesehatanSVG className={"w-[130px] h-[130px]"} />
              <p className="font-semibold text-2xl text-[rgba(0,_163,_232,_1)] ">Kesehatan</p>
            </div>
            <div className="bg-[rgba(204,_237,_250,_1)] flex justify-center items-center flex-col h-[240px] gap-4 rounded-[32px]">
              <PendidikanSVG className={"w-[130px] h-[130px]"} />
              <p className="font-semibold text-2xl text-[rgba(0,_163,_232,_1)] ">Pendidikan</p>
            </div>
            <div className="bg-[rgba(204,_237,_250,_1)] flex justify-center items-center flex-col h-[240px] gap-4 rounded-[32px]">
              <AdministrasiSVG className={"w-[130px] h-[130px]"} />
              <p className="font-semibold text-2xl text-[rgba(0,_163,_232,_1)] ">Administrasi</p>
            </div>
            <div className="bg-[rgba(204,_237,_250,_1)] flex justify-center items-center flex-col h-[240px] gap-4 rounded-[32px]">
              <PertanianSVG className={"w-[130px] h-[130px]"} />
              <p className="font-semibold text-2xl text-[rgba(0,_163,_232,_1)] ">Pertanian</p>
            </div>
            <div className="bg-[rgba(204,_237,_250,_1)] flex justify-center items-center flex-col h-[240px] gap-4 rounded-[32px]">
              <InfrastrukturSVG className={"w-[130px] h-[130px]"} />
              <p className="font-semibold text-2xl text-[rgba(0,_163,_232,_1)] ">Infrastruktur</p>
            </div>
            <div className="bg-[rgba(204,_237,_250,_1)] flex justify-center items-center flex-col h-[240px] gap-4 rounded-[32px]">
              <KorupsiSVG className={"w-[130px] h-[130px]"} />
              <p className="font-semibold text-2xl text-[rgba(0,_163,_232,_1)] ">Korupsi</p>
            </div>
            <div className="bg-[rgba(204,_237,_250,_1)] flex justify-center items-center flex-col h-[240px] gap-4 rounded-[32px]">
              <KriminalSVG className={"w-[130px] h-[130px]"} />
              <p className="font-semibold text-2xl text-[rgba(0,_163,_232,_1)] ">Kriminal</p>
            </div>
            <div className="bg-[rgba(204,_237,_250,_1)] flex justify-center items-center flex-col h-[240px] gap-4 rounded-[32px]">
              <LainnyaSVG className={"w-[130px] h-[130px]"} />
              <p className="font-semibold text-2xl text-[rgba(0,_163,_232,_1)] ">Lainnya</p>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default PengaduanPage;
