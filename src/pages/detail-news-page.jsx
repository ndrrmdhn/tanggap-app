import { news } from "@/data/dummyData";
import AppLayout from "@/layouts/app-layout";
import React from "react";
import { Link, useParams } from "react-router-dom";

function DetailNewsPage() {
  const { id } = useParams();

  const newsId = parseInt(id, 10);

  const otherNews = news.filter((item) => item.id !== newsId);
  const randomNews = otherNews.sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <AppLayout>
      <div className='relative mx-40 my-10'>
        <section className='my-10'>
          {news.map((item) => (
            <div className='w-full '>
              {item.id == id && (
                <div className='relative'>
                  <img
                    src={item.img}
                    alt={item.title}
                    className='w-full h-[563px]'
                  />
                  <div className='absolute bottom-0 left-0 w-full bg-black bg-opacity-20 p-4 rounded-b-[70px] mb-6'>
                    <p className='text-[40px] text-white px-2'>{item.title}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </section>

        <section className='my-10'>
          {news.map((item) => (
            <div>
              {item.id == id && (
                <div>
                  <h2 className='text-[15px] font-bold mb-3'>
                    Penulis: {item.penulis}
                  </h2>
                  <p
                    className='text-[14px] text-justify'
                    dangerouslySetInnerHTML={{ __html: item.desc }}
                  />
                </div>
              )}
            </div>
          ))}
        </section>

        <section className='my-40'>
          <h1 className='text-[40px] font-bold'>Rekomendasi Berita</h1>
          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[12px]'>
            {randomNews.map((item) => (
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
      </div>
    </AppLayout>
  );
}

export default DetailNewsPage;
