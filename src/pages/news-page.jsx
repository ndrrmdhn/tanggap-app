import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AppLayout from "@/layouts/app-layout";

const NewsPage = () => {
  const news = [
    {
      img: "/images/Berita/berita1.svg",
      title:
        "Kendalikan Inflasi, Kota Bandung Tanam Cabai dan Bawang Serentak di Seluruh Kecamatan",
      time: "10 Jam yang lalu",
    },
    {
      img: "/images/Berita/berita2.svg",
      title: "Belum ke Bandung kalo belum ke CFD Dago (Bandung)",
      time: "1 Hari yang lalu",
    },
    {
      img: "/images/Berita/berita3.svg",
      title:
        "Bandung Week Market 2024 Siap Guncang Beachwalk Shopping Center di Bali",
      time: "2 Hari yang lalu",
    },
    {
      img: "/images/Berita/berita4.svg",
      title: "Disbudpar Kota Bandung Ajak Warga Nyeni di Braga!",
      time: "3 Hari yang lalu",
    },
    {
      img: "/images/Berita/berita5.svg",
      title:
        "Nikmati Kuliner Legendaris: Mie Kocok Bandung di Gang Ibu Eunice!",
      time: "1 Minggu yang lalu",
    },
    {
      img: "/images/Berita/berita6.svg",
      title: "Banyak Pasangan Nikah Muda di bandung, Ini Penyebabnya !",
      time: "5 Jam yang lalu",
    },
  ];

  return (
    <AppLayout>
      <section className='relative mx-40 my-10'>
        <Carousel className='w-full'>
          <CarouselContent>
            {news.map((news, index) => (
              <CarouselItem key={index}>
                <div className='relative'>
                  <img
                    src={news.img}
                    alt={news.title}
                    className='w-full h-[563px]'
                  />
                  <div className='absolute bottom-0 left-0 w-full bg-black bg-opacity-20 p-4 rounded-b-[70px] mb-6'>
                    <p className='text-[40px] text-white px-2'>{news.title}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      <section>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[12px] mx-40 mb-28'>
          {news.map((news, index) => (
            <div
              className='rounded-[12px] shadow-lg px-3 py-[24px]'
              key={index}
            >
              <div className='flex flex-col gap-4'>
                <img src={news.img} alt={news.title} />
                <h3 className='text-xl font-bold'>{news.title}</h3>
                <p className='text-[18px]'>{news.content}</p>
                <div className='flex items-center gap-2'>
                  <img src='/images/clock-icon.svg' alt='clock' />
                  <p className='text-[#818181] text-[12px]'>{news.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </AppLayout>
  );
};

export default NewsPage;
