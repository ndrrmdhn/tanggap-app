import { NotesSVG } from "@/assets/svg/notes-svg";
import { Button } from "@/components/ui/button";
import AppLayout from "@/layouts/app-layout";
import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";

const CustomerChat = ({ isState, handleState }) => {
  return (
    <div className="fixed inset-0 bg-black pb-5 pt-[88px] lg:pr-5  bg-opacity-70 z-30 flex justify-end">
      <div className="bg-white p-5 max-w-[600px] w-full h-full flex flex-col rounded-[10px]">
        <div className="flex gap-4 px-5 py-2 rounded-[10px] items-center bg-[rgba(244,_244,_244,_1)]">
          <FaChevronLeft className="w-5 h-5 cursor-pointer" onClick={() => handleState(!isState)} />
          <div className="flex items-center w-max gap-3">
            <div className="flex justify-center items-center w-10 h-10 rounded-full bg-color-1">
              <img src="/images/icon-customer-support.svg" className="flex-shrink-0 w-[28px] h-[28px] object-cover" />
            </div>
            <div>
              <h1 className="font-medium text-text16_24">Customer Service</h1>
              <p className="text-text10_14">Online</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-grow pt-[40px] h-0">
          <div
            id="messages"
            className="flex flex-col space-y-4 p-3  overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch flex-grow"
          >
            <div className="chat-message">
              <div className="flex items-end">
                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                  <div>
                    <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-[#F4F4F4] text-gray-600">
                      ...
                    </span>
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144"
                  alt="My profile"
                  className="w-6 h-6 rounded-full order-1"
                />
              </div>
            </div>
            <div className="chat-message">
              <div className="flex items-end">
                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                  <div>
                    <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-[#F4F4F4] text-gray-600">
                      ...
                    </span>
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144"
                  alt="My profile"
                  className="w-6 h-6 rounded-full order-1"
                />
              </div>
            </div>
            <div className="chat-message">
              <div className="flex items-end justify-end">
                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                  <div>
                    <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-color-2 text-white ">
                      ...
                    </span>
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144"
                  alt="My profile"
                  className="w-6 h-6 rounded-full order-2"
                />
              </div>
            </div>
            <div className="chat-message">
              <div className="flex items-end">
                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                  <div>
                    <span className="px-4 py-2 rounded-lg inline-block bg-[#F4F4F4] text-gray-600">
                      ...
                    </span>
                  </div>
                  <div>
                    <span className="px-4 py-2 rounded-lg inline-block bg-[#F4F4F4] text-gray-600">
                      ...
                    </span>
                  </div>
                  <div>
                    <span className="px-4 py-2 rounded-lg inline-block bg-[#F4F4F4] text-gray-600">
                      ...
                    </span>
                  </div>
                  <div>
                    <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-[#F4F4F4] text-gray-600">
                      ...
                    </span>
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144"
                  alt="My profile"
                  className="w-6 h-6 rounded-full order-1"
                />
              </div>
            </div>
            <div className="chat-message">
              <div className="flex items-end justify-end">
                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                  <div>
                    <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-color-2 text-white ">
                      ...
                    </span>
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144"
                  alt="My profile"
                  className="w-6 h-6 rounded-full order-2"
                />
              </div>
            </div>
            <div className="chat-message">
              <div className="flex items-end">
                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                  <div>
                    <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-[#F4F4F4] text-gray-600">
                      ...
                    </span>
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144"
                  alt="My profile"
                  className="w-6 h-6 rounded-full order-1"
                />
              </div>
            </div>
            <div className="chat-message">
              <div className="flex items-end justify-end">
                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                  <div>
                    <span className="px-4 py-2 rounded-lg inline-block bg-color-2 text-white ">
                      ...
                    </span>
                  </div>
                  <div>
                    <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-color-2 text-white ">
                      ...
                    </span>
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144"
                  alt="My profile"
                  className="w-6 h-6 rounded-full order-2"
                />
              </div>
            </div>
            <div className="chat-message">
              <div className="flex items-end">
                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                  <div>
                    <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                      ...
                    </span>
                  </div>
                  <div>
                    <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                      ...
                    </span>
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144"
                  alt="My profile"
                  className="w-6 h-6 rounded-full order-1"
                />
              </div>
            </div>
          </div>
          <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
            <div className="relative flex">
              <input
                type="text"
                placeholder="Write your message!"
                className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-4 bg-gray-200 rounded-md py-3"
              />
              <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-color-2 hover:bg-blue-400 focus:outline-none"
                >
                  <span className="font-bold">Send</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-6 w-6 ml-2 transform rotate-90"
                  >
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CustomerServicePage = () => {
  const [isState, setState] = useState(false);

  return (
    <AppLayout>
      <section className="relative ">
        <div className="absolute 2xl:h-[480px] bg-color-2 w-full -z-10"></div>
        <img src="/images/bd-customer-service.svg" className="w-screen mt-[-110px] z-10 max-w-[1564px] mx-auto object-cover" />

        <div className="absolute px-4 md:px-5 z-30 max-w-[1200px]  w-full left-[50%] translate-x-[-50%] top-[50%] translate-y-[-40%] flex justify-between items-start">
          <img src="/images/icon-customer-service.svg" className="max-w-[500px] max-h-[300px] object-cover" />
          <div className="text-white space-y-10 pt-5 flex flex-col items-end">
            <h1 className="text-6xl font-bold">Customer Support</h1>
            <Button onClick={() => setState(true)} className="bg-[#5BC7F5] rounded-[20px] text-xl hover:bg-color-4 font-semibold w-[280px] h-[50px]">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <section className="flex justify-center flex-col items-center space-y-4 pt-[40px] py-[60px]">
        <h1 className="font-bold text-2xl ">Jangan ragu untuk menghubungi Kami!</h1>
        <p>kami akan merespons dengan cepat segala bentuk pertanyaan Anda!</p>
      </section>

      <section className="max-w-[1200px] px-4 mb-[80px] md:px-5 bg-red-500 w-full  mx-auto relative">
        {" "}
        <Button
          onClick={() => setState(true)}
          className="absolute bg-color-1 flex justify-center items-center rounded-full w-[60px] h-[60px] right-0"
        >
          <NotesSVG className={"stroke-2"} />
        </Button>
      </section>
      {isState && <CustomerChat isState={isState} handleState={setState} />}
    </AppLayout>
  );
};

export default CustomerServicePage;
