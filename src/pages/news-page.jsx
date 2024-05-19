import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { news } from "@/data/dummyData";
import AppLayout from "@/layouts/app-layout";
import { Link } from "react-router-dom";

const NewsPage = () => {
  return (
    <AppLayout className={"px-4 md:px-6 space-y-10 z-30 max-w-screen-xl mx-auto "}>
      <section className="mt-[20px]">
        <Carousel className="w-full hover:cursor-pointer ">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => {
              return (
                <CarouselItem key={index + 1}>
                  <Link to={`/berita/${1}`} className="block relative">
                    <img
                      src={"/images/main-news.svg"}
                      alt={"alat"}
                      className="w-full brightness-[70%] h-full max-h-[560px] rounded-[20px]"
                    />
                    <p className="absolute bottom-10 left-10 text-[40px] leading-[60px] text-white">
                      Kendalikan Inflasi, Kota Bandung Tanam <br /> Cabai dan Bawang Serentak di Seluruh <br /> Kecamatan
                    </p>
                  </Link>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </section>

      <section className="grid grid-cols-4 gap-5">
        {news.map((item) => (
          <div
            className="rounded-[12px] border hover:bg-color-1 group hover:text-white shadow-lg px-3 py-[24px] hover:cursor-pointer"
            key={item.id}
          >
            <div className="flex flex-col gap-4">
              <Link to={`/berita/${item.id}`} className="space-y-4">
                <img src={item.img} alt={item.title} className="h-full max-h-[144px] object-cover" />
                <h3 className="text-text16_24 font-medium">{item.title}</h3>
                <p className="text-[18px]">{item.content}</p>
                <div className="flex items-center gap-2 ">
                  <img src="/images/clock-icon.svg" alt="clock" />
                  <p className="text-[#818181] group-hover:text-white text-[12px]">{item.time}</p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </section>
    </AppLayout>
  );
};

export default NewsPage;
