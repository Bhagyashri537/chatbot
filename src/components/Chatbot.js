import React, { useState } from "react";
import { BsLightningCharge } from "react-icons/bs";
import { BiError, BiSun, BiSolidUserCircle, BiMessageRoundedDetail } from "react-icons/bi";
import { AiOutlineSend } from "react-icons/ai";
import { SendMsgToOpenai,  } from "./Openai";

const Chatbot = () => {

const [input, setInput] = useState("")
const [messages, setMessages] = useState([])

const handlesent = async () => {
  const response = await SendMsgToOpenai(input)
  

  setMessages([
    ...messages,
    {text:input, isUser:true},
    {text:response, isUser:false}
  ])
  setInput("");
  console.log(response);
}

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

  // const chats = [
  //   {
  //     role: "user",
  //     message: "how to send mail",
  //   },
  //   {
  //     role: "ai assistant",
  //     message: "here is the answer",
  //   },
  //   {
  //     role: "user",
  //     message: "how to send mail",
  //   },
  //   {
  //     role: "ai assistant",
  //     message: "here is the answer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxx",
  //   },
  //   {
  //     role: "user",
  //     message: "how to send mail",
  //   },
  //   {
  //     role: "ai assistant",
  //     message: "here is the answer",
  //   },
  //   {
  //     role: "user",
  //     message: "how to send mail",
  //   },
  //   {
  //     role: "ai assistant",
  //     message: "here is the answer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxx",
  //   },
  //   {
  //     role: "user",
  //     message: "how to send mail",
  //   },
  //   {
  //     role: "ai assistant",
  //     message: "here is the answer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxx",
  //   },
  // ];

  return (
    <div className="h-screen  w-screen flex bg-gradient-to-b from-gray-800 to-gray-700 fixed">
      <div className="w-[20%] bg-black h-screen ">
        <div className="p-4">
          <button className="w-full h-8 flex items-center text-white border-gray-400 border-2 rounded-lg py-6 px-4">
            {" "}
            + New Chat{" "}
          </button>
        </div>
        <div className="h-[75%] border-b-2 border-gray-700  ">
          <ul className=" mt-2 text-sm text-gray-600 hover:scale-95 text-center">
            My chat History
            {[1, 2, 3, 4, 5, 6, 7,8,8,10,11,12,12,14,15].map((item, index) => (
              <li key={index} className="w-full ">
                <h2 className="text-center text-white p-4">{item}</h2>
              </li>
            ))}
          </ul>
        </div>
        <div></div>
      </div>
      <div className="w-[80%]  ">
        {messages.length === 0 ? (
          <div><div className=" h-[80%] flex flex-col justify-center top-6 text-center text-white px-52">
          <h1 className="text-4xl font-bold text  pt-20">ChatGPT</h1>
          <div className="flex grid-cols-3 sm:grid-cols-9">
            <div>
              <div className="flex justify-center items-center">
                <BiSun size={30} />
              </div>
              <h2 className="text-lg "> Examples</h2>
              {exmaples.map((item, index) => (
                <div key={index} className="p-3 items-center">
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
                <div key={index} className="p-3 items-center">
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
                <div key={index} className="p-3 items-center">
                  <h3 className="bg-gray-700 rounded-lg py-3 border-gray-300 font-medium text-sm p-2">
                    {item}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div></div>
        ) : (
          <div className="flex flex-col h-screen pt-10 px-48 overflow-scroll pb-32 ">
          {messages.map(( msg, index ) => (
            <div className="flex justify-start items-center"> { msg.isUser ?  < BiSolidUserCircle size={25}/> : <BiMessageRoundedDetail size={25}/>}
            <div key={index} className={msg.isUser ?   "bg-slate-600 rounded-lg p-2 m-4 text-white w-full" : "bg-slate-500 rounded-lg p-2 text-white w-full m-4"}>
            <h2  className={msg.isUser ? "user-message" : "bot-message"} >{msg.text}</h2>
            </div>
            </div>
          ))}
          
        </div>
        )}
        
        
          <div className=" h-[20%] mx-48  ">
            <div className="flex w-3/4 items-center pb-10 fixed bottom-0">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-[60%] p-5  bg-gray-600 rounded-l-2xl outline-none"
              placeholder="send message"
            />

            <button className="bg-gray-600 rounded-r-2xl p-5" onClick={handlesent}>
              {" "}
              <AiOutlineSend size={25} className="fill-green-400" />
            </button>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Chatbot;
