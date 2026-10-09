/* eslint-disable react/prop-types */
export default function Educational({ getGeneralInfo, generalInfo }) {
  return (
    <div className="flex flex-col text-white my-[50px] mx-[50px] gap-[30px] col-start-1">
      <h2 className="text-white text-3xl font-bold pl-[20px]">Educational Experience</h2>
      <div className=" bg-[#202020] p-[40px] rounded-lg gap-[20px] min-w-[100%]">
        <form className="flex flex-col gap-[50px]">
          <div className="flex flex-col gap-[10px]">
            <label className="font-semibold" htmlFor="schoolName">
              School Name <small>(Short form works)</small>
            </label>
            <input
              type="text"
              placeholder="Mrs. Puff's Boarding School"
              id="schoolName"
              onChange={(event) => getGeneralInfo({ ...generalInfo, schoolName: event.target.value })}
              className="border-2 bg-[#474747] text-white h-[40px] p-[7px] placeholder:text-[#c0c0c0]"
            ></input>
          </div>
          <div className="flex flex-col gap-[10px]">
            <label className="font-semibold" htmlFor="studyTitle">
              Title of Study
            </label>
            <input
              type="text"
              id="studyTitle"
              placeholder="Boating"
              onChange={(event) => getGeneralInfo({ ...generalInfo, studyTitle: event.target.value })}
              className="border-2 bg-[#474747] text-white h-[40px] p-[7px] placeholder:text-[#c0c0c0]"
            ></input>
          </div>
          <div className="flex flex-col gap-[10px]">
            <label className="font-semibold" htmlFor="studyDate">
              Date of Study
            </label>
            <input
              type="text"
              placeholder="1999 - Present"
              id="studyDate"
              onChange={(event) => getGeneralInfo({ ...generalInfo, studyDate: event.target.value })}
              className="border-2 bg-[#474747] text-white h-[40px] p-[7px] placeholder:text-[#c0c0c0]"
            ></input>
          </div>
          <div className="flex flex-col gap-[10px]">
            <label className="font-semibold" htmlFor="schoolAddress">
              Address
            </label>
            <input
              type="text"
              placeholder="Bikini Bottom"
              id="schoolAddress"
              onChange={(event) => getGeneralInfo({ ...generalInfo, schoolAddress: event.target.value })}
              className="border-2 bg-[#474747] text-white h-[40px] p-[7px] placeholder:text-[#c0c0c0]"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}
