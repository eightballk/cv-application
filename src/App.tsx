import General from "./components/General";
import Educational from "./components/Educational";
import Practical from "./components/Practical";
import CVPage from "./components/CVPage";
import { useState } from "react";

export default function App() {
  const [info, setInfo] = useState({
    fullName: "Spongebob Squarepants",
    birthDate: "July 14th, 1986",
    email: "spongebob123@gmail.com",
    phoneNumber: "707 663 GARY",
    address: "Bikini Bottom, Pacific Ocean",
    schoolName: "Mrs. Puff's Boating School",
    studyTitle: "Boating",
    studyDate: "1999-Present",
    schoolAddress: "Bikini Bottom",
    companyName: "The Krusty Krab",
    jobPosition: "Fry cook",
    jobDescription:
      "I have to cook burgers which tastes extremely good on taste buds of your tongue. I also have to clean the floor sometimes.",
    jobDate: "1998 - Present",
  });
  const [cv, showCv] = useState(false);
  return (
    <>
      {!cv ? (
        <div className="grid grid-cols-[1.3fr_2fr] min-h-screen min-w-full bg-[#171717]">
          <div className="left-side">
            {!cv && <General getGeneralInfo={setInfo} generalInfo={info} />}
            {!cv && <Educational getGeneralInfo={setInfo} generalInfo={info} />}
            {!cv && <Practical getGeneralInfo={setInfo} generalInfo={info} />}
          </div>
          <div className="right-side my-[115px] mx-[50px]">
            <CVPage person={info} />
          </div>
          <button
            onClick={() => showCv(!cv)}
            className="bg-white text-black w-1/2 m-auto py-[10px] mb-[30px] font-bold rounded transition-[0.3s] hover:scale-105 hover:bg-slate-100"
          >
            Submit
          </button>
        </div>
      ) : (
        <>
          <CVPage person={info} />
          <button
            onClick={() => {
              window.print();
            }}
            className="bg-black text-white absolute w-[100px] right-[40px] bottom-[20px] m-auto py-[10px] mb-[30px] font-bold rounded transition-[0.3s] hover:scale-105 hover:bg-gray-800 print:hidden"
          >
            Print
          </button>
          <button
            onClick={() => showCv(!cv)}
            className="bg-black text-white absolute w-[100px] left-[40px] bottom-[20px] m-auto py-[10px] mb-[30px] font-bold rounded transition-[0.3s] hover:scale-105 hover:bg-gray-800 print:hidden"
          >
            Edit
          </button>
        </>
      )}
    </>
  );
}
