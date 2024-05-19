import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ProfileLayout from "@/layouts/profile-layout";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

const ProfilePage = () => {
  return (
    <ProfileLayout className={"px-4 md:px-5  z-30 max-w-[1200px] mx-auto "}>
      <div className="px-[64px] ">
        <h1 className="font-bold text-2xl">Profile Saya</h1>
      </div>
      <div className="bg-color-2 text-white mt-[10px]">
        <div className="px-[64px] py-6">
          <h1 className="font-medium text-sm">Kelola informasi profil Anda untuk mengontrol, melindungi dan mengamankan akun</h1>
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
            <Textarea className="border-slate-400 focus-visible:ring-color-2 focus-visible:border-color-2 text-text16_24" />
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
            <Textarea className="border-slate-400 focus-visible:ring-color-2 focus-visible:border-color-2 text-text16_24" />
          </div>
          <div className="flex items-center w-full gap-x-5">
            <Button className="w-full max-w-[100px] h-[40px]">Edit</Button>
            <Button className="w-full max-w-[100px] h-[40px]">Simpan</Button>
          </div>
        </form>
      </div>
    </ProfileLayout>
  );
};

export default ProfilePage;
