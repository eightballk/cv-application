/* eslint-disable react/prop-types */
export default function CVPage({ person }) {
  return (
    <div className="bg-white col-start-2 min-h-screen sticky top-[10px]">
      <div className="general-information">
        <h1 className="font-bold text-3xl p-[20px] tracking-tight">{person.fullName}</h1>
        <div className="gap-[7px] items-start p-[20px] grid grid-cols-[1fr_2fr] w-[95%]">
          <div className="flex gap-[4px] justify-start items-center">
            <i className="fa-solid fa-envelope my-auto"></i>
            <h1>{person.birthDate}</h1>
          </div>
          <div className="flex gap-[4px] justify-end">
            <i className="fa-solid fa-envelope my-auto"></i>
            <h1>{person.email}</h1>
          </div>
          <div className="flex gap-[4px] justify-start">
            <i className="fa-solid fa-phone my-auto"></i>
            <h1>{person.phoneNumber}</h1>
          </div>
          <div className="flex gap-[4px] justify-end">
            <i className="fa-solid fa-map-marker my-auto"></i>
            <h1>{person.address}</h1>
          </div>
        </div>
      </div>
      <div className="educational-information p-[20px]">
        <h1 className="text-2xl font-bold">EDUCATION</h1>
        <hr className="bg-black h-[2px] w-[95%] mb-[10px]"></hr>
        <div className="grid grid-cols-[1.5fr_3fr] w-[95%]">
          <h1 className="font-bold">{person.studyDate}</h1>
          <div className="flex gap-[10px] items-start flex-col">
            <h1 className="font-bold">
              <span className="text-[20px]">{person.schoolName},</span> {person.schoolAddress}
            </h1>
            <h1>
              <span className="font-bold">Title of study:</span> <span className="font-semibold">{person.studyTitle}</span>
            </h1>
          </div>
        </div>
      </div>
      <div>
        <div className="practical-information p-[20px]">
          <h1 className="font-bold text-2xl">Work Experience</h1>
          <hr className="bg-black h-[2px] w-[95%] mb-[10px]"></hr>
          <div className="grid grid-cols-[1.5fr_3fr] w-[95%]">
            <h1 className="font-bold">{person.jobDate}</h1>
            <div className="flex flex-col gap-[10px] items-start">
              <h1 className="font-bold text-[20px]">{person.jobPosition}</h1>
              <h1 className="font-semibold">
                <span className="font-bold">Company Name: </span>
                {person.companyName}
              </h1>
              <p className="text-[17px] font-semibold">{person.jobDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
