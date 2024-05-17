import { Link } from "react-router-dom";
import { Input } from "../ui/input";

const Footer = () => {
  return (
    <div className="bg-color-2 w-full z-30 ">
      <div className="max-w-[1200px] py-[50px]     mx-auto">
        <div className="grid grid-cols-5 text-white">
          <div className="text-white flex  flex-col justify-center items-center w-max">
            <img src="/images/brand-logo.svg" alt="" srcSet="" className="h-[100px] w-[100px]" />
            <h1 className="text-2xl font-bold ">TANGGAP</h1>
          </div>
          <div className="space-y-5">
            <h1 className="font-bold">Layanan Kami</h1>
            <div className="flex flex-col">
              <Link to={"/bantuan"}>Bantuan</Link>
              <Link to={"/notifikasi"}>Notifikasi</Link>
              <Link to={"/contact-us"}>Kontak Kami</Link>
            </div>
          </div>
          <div className="space-y-5">
            <h1 className="font-bold">Kategori</h1>
            <div>
              <Link to={"/sosial-media"}>Sosial</Link>
            </div>
          </div>
          <div className="space-y-5">
            <h1 className="font-bold">Fitur</h1>
            <div className="flex flex-col">
              <Link to={"/pengaduan"}>Pengaduan</Link>
              <Link to={"/berita"}>Berita</Link>
              <Link to={"/profile"}>Profile</Link>
            </div>
          </div>
          <div className="space-y-5">
            <h1 className="font-bold">Cari</h1>
            <div>
              <Input placeholder="Cari" />
            </div>
          </div>
          <div className="col-start-2">
            <h1>Tentang Aplikasi</h1>
          </div>
          <div className="">
            <h1>Hubungi Kami</h1>
          </div>
          <div className="">
            <Link to={"/kebijakan-privasi"}>Kebijakan Privasi</Link>
          </div>
          <div className="col-start-2 mt-[30px] col-span-3  flex justify-center">
            <h1>© 2024 Jenderal Soedirman. All Rights Reserved</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
