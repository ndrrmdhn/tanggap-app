import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { news } from "@/data/dummyData";
import AppLayout from "@/layouts/app-layout";
import { Link } from "react-router-dom";

const NewsPage = () => {
  return (
    <AppLayout>
      <section className='relative mx-40 my-10'>
        <Carousel className='w-full hover:cursor-pointer'>
          <CarouselContent>
            {news.map((item) => (
              <CarouselItem key={item.id}>
                <div className='relative'>
                  <Link to={`/berita/${item.id}`} className='block'>
                    <img
                      src={item.img}
                      alt={item.title}
                      className='w-full h-[563px]'
                    />
                    <div className='absolute bottom-0 left-0 w-full bg-black bg-opacity-20 p-4 rounded-b-[70px] mb-6'>
                      <p className='text-[40px] text-white px-2'>
                        {item.title}
                      </p>
                    </div>
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      <section>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[12px] mx-40 mb-28'>
          {news.map((item) => (
            <div
              className='rounded-[12px] shadow-lg px-3 py-[24px] hover:cursor-pointer'
              key={item.id}
            >
              <div className='flex flex-col gap-4'>
                <Link to={`/berita/${item.id}`}>
                  <img src={item.img} alt={item.title} />
                  <h3 className='text-xl font-bold'>{item.title}</h3>
                  <p className='text-[18px]'>{item.content}</p>
                  <div className='flex items-center gap-2'>
                    <img src='/images/clock-icon.svg' alt='clock' />
                    <p className='text-[#818181] text-[12px]'>{item.time}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </AppLayout>
  );
};

export default NewsPage;
