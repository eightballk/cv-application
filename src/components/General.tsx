/* eslint-disable react/prop-types */
export default function General({ getGeneralInfo, generalInfo }) {
  return (
    <div className="text-white flex flex-col my-[50px] mx-[50px] gap-[30px] col-start-1">
      <h2 className="pl-[20px] text-3xl font-bold">General Information</h2>
      <div className=" bg-[#202020] p-[40px] rounded-lg gap-[20px] min-w-[100%]">
        <form className="flex flex-col gap-[50px]">
          <div className="flex flex-col gap-[10px]">
            <label className="font-semibold" htmlFor="fullname">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Spongebob Squarepants"
              onChange={(event) => getGeneralInfo({ ...generalInfo, fullName: event.target.value })}
              id="fullname"
              className="border-2 bg-[#474747] text-white h-[40px] p-[7px] placeholder:text-[#c0c0c0]"
            ></input>
          </div>
          <div className="flex flex-col gap-[10px]">
            <label className="font-semibold" htmlFor="birthDate">
              Birth Date
            </label>
            <input
              type="text"
              placeholder="July 14th, 1986"
              onChange={(event) => getGeneralInfo({ ...generalInfo, birthDate: event.target.value })}
              id="birthDate"
              className="border-2 bg-[#474747] text-white h-[40px] p-[7px] placeholder:text-[#c0c0c0]"
            ></input>
          </div>
          <div className="flex flex-col gap-[10px]">
            <label className="font-semibold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              placeholder="spongebob123@gmail.com"
              id="email"
              autoComplete="off"
              onChange={(event) => getGeneralInfo({ ...generalInfo, email: event.target.value })}
              className="border-2 bg-[#474747] text-white h-[40px] p-[7px] placeholder:text-[#c0c0c0]"
            ></input>
          </div>
          <div className="flex flex-col gap-[10px]">
            <label className="font-semibold" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="707 663 GARY"
              pattern="[0-9]{3}-[0-9]{3}-[A-Z]{4}"
              id="phone"
              autoComplete="off"
              maxLength={22}
              onChange={(event) => getGeneralInfo({ ...generalInfo, phoneNumber: event.target.value })}
              className="border-2 bg-[#474747] text-white h-[40px] p-[7px] placeholder:text-[#c0c0c0]"
            ></input>
          </div>
          <div className="flex flex-col gap-[10px]">
            <label className="font-semibold" htmlFor="address">
              Address
            </label>
            <input
              type="text"
              placeholder="Bikini Bottom, Pacific Ocean"
              id="address"
              autoComplete="off"
              onChange={(event) => getGeneralInfo({ ...generalInfo, address: event.target.value })}
              className="border-2 bg-[#474747] text-white h-[40px] p-[7px] placeholder:text-[#c0c0c0]"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}
