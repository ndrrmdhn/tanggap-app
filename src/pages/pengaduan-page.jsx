import AppLayout from "@/layouts/app-layout";

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
      <div className="stepper flex-shrink-0">
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

      <ActiveComponent />

      {!isComplete && (
        <button className="btn" onClick={handleNext}>
          {currentStep === stepsConfig.length ? "Finish" : "Next"}
        </button>
      )}
    </>
  );
};

const PengaduanPage = () => {
  return (
    <AppLayout>
      <div className="max-w-[1200px] mx-auto pt-[60px]">
        <h1 className="text-xl font-bold">Pengaduan</h1>

        <CheckoutStepper stepsConfig={CHECKOUT_STEPS} />
        {/* <div className="h-[120px] w-full mt-[20px] rounded-[10px] shadow-xl shadow-[rgba(0,_0,_0,_0.25)] gap-5 flex border items-center justify-between px-[60px]">
          <div className="flex flex-col flex-shrink-0 justify-center items-center">
            <div className="w-7 h-7 rounded-full bg-slate-700"></div>
            <p>Pilih Kategori</p>
          </div>
          <div className="w-full h-[1px] bg-black"></div>
          <div className="flex flex-col flex-shrink-0 justify-center items-center">
            <div className="w-7 h-7 rounded-full bg-slate-700"></div>
            <p>Tulis Pengaduan</p>
          </div>
          <div className="w-full h-[1px] bg-black"></div>
          <div className="flex flex-col flex-shrink-0 justify-center items-center">
            <div className="w-7 h-7 rounded-full bg-slate-700"></div>
            <p>Pratinjau</p>
          </div>
        </div> */}
      </div>
    </AppLayout>
  );
};

export default PengaduanPage;
