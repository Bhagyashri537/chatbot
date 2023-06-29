import React from "react";
import { BsLightningCharge } from "react-icons/bs";
import { BiError, BiSun } from "react-icons/bi";

const Chatbot = () => {
  const exmaples = [
    "Explain Newton's laws of motion and its principle ",
    "How to start learning web development",
    "How to make react js project and how to deploy",
  ];
  const Capabilities = [
    "Remembers what user said earlier in the conversation",
    "Allows user to provide follow-up corrections",
    "Trained to decline inappropriate requests",
  ];
  const Limitations = [
    "May occasionally generate incorrect information",
    "May occasionally produce harmful instructions ",
    "Limited knowledge of world and events after 2021",
  ];
  return (
    <div className="h-screen w-screen flex bg-gradient-to-b from-gray-800 to-gray-700">
      <div className="w-[20%] bg-black h-screen">
        <div className="p-4">
          <button className="w-full h-8 flex items-center text-white border-gray-400 border-2 rounded-lg py-6 px-4">
            {" "}
            + New Chat{" "}
          </button>
        </div>
        <div className="h-[75%] border-b-2 border-gray-700 overflow-scroll md:overflow-hidden">
          <ul className=" mt-2 text-sm text-gray-600 hover:scale-95 text-center">
            My chat History
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <li key={index} className="w-full ">
                <h2 className="text-center text-white p-4">{item}</h2>
              </li>
            ))}
          </ul>
        </div>
        <div></div>
      </div>
      <div className="w-[80%] h-full flex flex-col justify-center top-6 text-center text-white px-52">
        <h1 className="text-5xl font-bold text pb-24">ChatGPT</h1>
        <div className="flex grid-cols-3">
          <div>
            <div className="flex justify-center items-center">
              <BiSun size={30} />
            </div>
            <h2 className="text-lg "> Examples</h2>
            {exmaples.map((item, index) => (
              <div className="p-3 items-center">
                <h3 className="bg-gray-700 rounded-lg py-3 border-gray-300 text-sm font-medium p-2">
                  "{item}"
                </h3>
              </div>
            ))}
          </div>
          <div>
            <div className="flex justify-center items-center">
              <BsLightningCharge size={30} />
            </div>
            <h2>Capabilities</h2>
            {Capabilities.map((item, index) => (
              <div className="p-3 items-center">
                <h3 className="bg-gray-700 rounded-lg py-3 border-gray-300 font-medium text-sm p-2">
                  {item}
                </h3>
              </div>
            ))}
          </div>
          <div>
            <div className="flex justify-center items-center">
              <BiError size={30} />
            </div>
            <h2>Limitations</h2>
            {Limitations.map((item, index) => (
              <div className="p-3 items-center">
                <h3 className="bg-gray-700 rounded-lg py-3 border-gray-300 font-medium text-sm p-2">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
        <div className=" ">
        <input type="text" na/>
        </div>
      </div>
      
    </div>
  );
};

export default Chatbot;
