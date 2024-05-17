import AppLayout from "@/layouts/app-layout";
import { FaRegUser } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import { FaChevronRight } from "react-icons/fa6";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { FaHourglassHalf, FaCircleCheck } from "react-icons/fa6";
import { Separator } from "@/components/ui/separator";

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
  return (
    <AppLayout className={"px-4 md:px-5  z-30 max-w-[1200px] mx-auto "}>
      <div className="pt-[60px] grid grid-cols-3 gap-x-[64px]">
        <div className="col-span-1 ">
          <PengaduanSayaPage />
        </div>
        <div className="col-span-2 border rounded-[20px] py-[40px]">
          <div className="px-[64px] ">
            <h1 className="font-medium text-lg">Pengaduan Saya</h1>
          </div>

          <div className="pt-[22px] px-[64px] space-y-10">
            <div className="space-y-5">
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
                <Button className="w-full">Batalkan pengaduan</Button>
                <Button className="w-full">Tinjau Pengaduan</Button>
              </div>
            </div>
            <Separator />
            <div className="space-y-5">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3 text-[rgba(76,_175,_80,_1)]">
                  {" "}
                  <FaHourglassHalf className="w-6 h-6" />
                  <span>Pengaduan dalam proses</span>
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
              {/* <div className="flex  items-center gap-x-5">
                <Button className="w-full">Batalkan pengaduan</Button>
                <Button className="w-full">Tinjau Pengaduan</Button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ProfilePage;
