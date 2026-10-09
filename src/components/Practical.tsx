/* eslint-disable react/prop-types */
export default function Practical({ getGeneralInfo, generalInfo }) {
  return (
    <div className="flex flex-col text-white my-[50px] mx-[50px] gap-[30px] col-start-1">
      <h2 className="text-white text-3xl font-bold pl-[20px]">Practical Experience</h2>
      <div className=" bg-[#202020] p-[40px] rounded-lg gap-[20px] min-w-[100%]">
        <form className="flex flex-col gap-[50px]">
          <div className="flex flex-col gap-[10px]">
            <label className="font-semibold" htmlFor="companyName">
              Company Name <small>(Short form works)</small>
            </label>
            <input
              type="text"
              placeholder="The Krusty Krab"
              id="companyName"
              onChange={(event) => getGeneralInfo({ ...generalInfo, companyName: event.target.value })}
              className="border-2 bg-[#474747] text-white h-[40px] p-[7px] placeholder:text-[#c0c0c0]"
            ></input>
          </div>
          <div className="flex flex-col gap-[10px]">
            <label className="font-semibold" htmlFor="positionTitle">
              Position Title
            </label>
            <input
              type="text"
              placeholder="Fry cook"
              id="positionTitle"
              onChange={(event) => getGeneralInfo({ ...generalInfo, jobPosition: event.target.value })}
              className="border-2 bg-[#474747] text-white h-[40px] p-[7px] placeholder:text-[#c0c0c0]"
            ></input>
          </div>
          <div className="flex flex-col gap-[10px]">
            <label className="font-semibold" htmlFor="jobResponsibility">
              Main Responsibilty of your jobs
            </label>
            <textarea
              type=""
              placeholder="Describe your job role in brief"
              id="jobResponsibility"
              onChange={(event) => getGeneralInfo({ ...generalInfo, jobDescription: event.target.value })}
              className="border-2 bg-[#474747] text-white min-h-[150px] p-[7px] placeholder:text-[#c0c0c0]"
            ></textarea>
          </div>
          <div className="flex flex-col gap-[10px]">
            <label className="font-semibold" htmlFor="jobDate">
              Date From and Until
            </label>
            <input
              type="text"
              placeholder="1998 - Present"
              id="jobDate"
              onChange={(event) => getGeneralInfo({ ...generalInfo, jobDate: event.target.value })}
              className="border-2 bg-[#474747] text-white h-[40px] p-[7px] placeholder:text-[#c0c0c0]"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}
