import { Link } from "react-router-dom";
import { Menu, Package2 } from "lucide-react";
import { MdNotifications, MdAccountCircle } from "react-icons/md";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Footer from "@/components/common/footer";
import { cn } from "@/lib/tailwind-utils";

const Navbar = () => {
  return (
    <div className="w-screen z-40 fixed top-0  bg-color-2">
      <header className=" max-w-screen-xl  justify-between mx-auto w-full flex h-16 items-center gap-4 px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-14">
          <Link to={"/"} className="flex items-center gap-2  font-semibold md:text-xl">
            <img src="/images/brand-logo.svg" alt="" srcSet="" className="h-10 w-10" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <div className="flex flex-row gap-10">
            <Link to={"/"} className="text-white text-lg transition-colors hover:underline hover:underline-offset-4">
              Home
            </Link>
            <Link to={"/pengaduan"} className="text-white text-lg transition-colors hover:underline hover:underline-offset-4">
              Pengaduan
            </Link>
            <Link to={"/berita"} className="text-white text-lg transition-colors hover:underline hover:underline-offset-4">
              Berita
            </Link>
            <Link
              to={"/customer-service"}
              className="text-white text-lg transition-colors hover:underline hover:underline-offset-4"
            >
              Customer Service
            </Link>
          </div>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="shrink-0 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Dashboard
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Orders
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Products
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Customers
              </Link>
              <Link href="#" className="hover:text-foreground">
                Settings
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-max items-center gap-4  md:gap-2 lg:gap-6">
          <Link to={"/notifikasi"} className=" cursor-pointer">
            <MdNotifications className="h-10 w-10 text-yellow-500" />
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <MdAccountCircle className="h-10 w-10 text-color-2" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Akun Saya</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to={"/profile"}>Profile Saya</Link>
              </DropdownMenuItem>

              <DropdownMenuSeparator />
              <DropdownMenuItem>Keluar</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </div>
  );
};

const AppLayout = ({ children, className }) => {
  return (
    <main>
      <Navbar />
      <div className={cn("pt-[64px] overflow-x-hidden pb-10", className)}>{children}</div>
      <Footer />
    </main>
  );
};

export default AppLayout;
