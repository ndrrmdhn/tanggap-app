import AppLayout from "@/layouts/app-layout";
import { FaRegUser } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import { FaChevronRight } from "react-icons/fa6";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

export const UserProfile = () => {
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
          <UserProfile />
        </div>
        <div className="col-span-2 border rounded-[20px] py-[40px]">
          <div className="px-[64px] ">
            <h1 className="font-medium text-lg">Profile Saya</h1>
          </div>
          <div className="bg-color-2 text-white mt-[10px]">
            <div className="px-[64px] py-6">
              <h1 className="font-medium text-sm">
                Kelola informasi profil Anda untuk mengontrol, melindungi dan mengamankan akun
              </h1>
            </div>
          </div>
          <div className="pt-5 px-[64px]">
            <form className="space-y-6">
              <div className="grid gap-2">
                <Label>Nama Panjang</Label>
                <Input />
              </div>
              <div className="grid gap-2">
                <Label>Email</Label>
                <Input />
              </div>
              <div className="grid gap-2">
                <Label>Alamat</Label>
                <Textarea />
              </div>
              <div className="grid gap-2">
                <Label>Nomor Telepon</Label>
                <Input />
              </div>
              <div className="grid gap-4">
                <Label>Jenis Kelamin</Label>
                <RadioGroup defaultValue="option-one" className="flex gap-x-12">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-one" id="option-one" />
                    <Label htmlFor="option-one">Laki-laki</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-two" id="option-two" />
                    <Label htmlFor="option-two">Perempuan</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="grid gap-2">
                <Label>Tanggal lahir</Label>
                <Input type="date" />
              </div>
              <div className="grid gap-2">
                <Label>Dekripsi</Label>
                <Textarea />
              </div>

              <div className="flex items-center gap-x-5">
                <Button>Edit</Button>
                <Button>Simpan</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ProfilePage;
