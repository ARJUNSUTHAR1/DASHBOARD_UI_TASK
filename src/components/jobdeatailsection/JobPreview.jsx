import locationsvg from "../../assets/location.svg";
import pricesvg from "../../assets/price.svg";
import companyimg from "../../assets/company.svg";
import {
  RequiredSkills,
  aboutthejob,
  benefits,
  companyDetail,
  crudbarelements,
  crudbuttons,
  schedule,
  supplementalpaytype,
} from "../../constants/Constant";
const JobPreview = () => {
  return (
    <div className="detail md:flex md:flex-row flex-col w-full h-fit">
      <div className="w-[100%] md:[75%] border-[1px] border-[#E7E7E7]">
        <div className="md:pl-[5.5rem] pl-[1rem] w-full  border-b border-[#E7E7E7] py-[20px] flex flex-col gap-4 ">

          <div className="heading lg:flex-row lg:flex justify-start items-center gap-3 py-2 flex-col">
            <h1 className="font-bold text-[25px] capitalize text-[#3D3D3D]">
              senior product designer
            </h1>
            <div className="status flex justify-start items-center gap-3">
              <span className="dot w-1 h-1 rounded-full bg-[#D1D1D1]"></span>
              <h6 className="text-[#888888] text-[10px] font-[500]">
                posted 2 days ago
              </h6>
              <div className="flex justify-center items-center gap-[5px] w-[45px] h-[20px] rounded-[35px] border-[1px] border-[#ABEFC6] bg-[#ECFDF3]">
                <div className="dot w-1 h-1 rounded-full bg-[#17B26A]"></div>
                <h6 className="font-[500] text-[9px] text-[#067647]">Open</h6>
              </div>
            </div>
          </div>

          <div className="flex justify-start items-center gap-2">
            <div className="location flex gap-1">
              <img width={13} height={13} src={locationsvg} alt="" />
              <span className="text-[#5D5D5D] text-[15px] font-[500]">
                Delaware,USA
              </span>
            </div>

            <span className="dot w-1.5 h-1.5 rounded-full bg-[#D1D1D1]"></span>

            <div className="price flex gap-1">
              <img width={20} height={20} src={pricesvg} alt="" />
              <span className="text-[#5D5D5D] text-[15px] font-[500]">
                $300k-$400k
              </span>
            </div>
          </div>
        </div>

        {/* //requirements */}

        <div className=" md:pl-[5.5rem] pl-[1rem] w-3/4 flex-col md:flex md:flex-row md:items-start justify-between  py-5  ">
          <div className="skill flex flex-col gap-2 ">
            <h6 className="text-[#6E6D6D] text-[10px] font-[500]">
              Skill required
            </h6>
            {RequiredSkills.map((item) => (
              <div className="w-fit gap-0.5 flex justify-center items-center border-[1px] border-[#D0D5DD] rounded-md p-0.5">
                <img src={item.img} alt="" />
                <h6 className="font-[500] text-[#344054] text-[10px]">
                  {item.title}
                </h6>
              </div>
            ))}
          </div>
          <div className="language  ">
            <h6 className="text-[#6E6D6D] text-[10px] font-[500]  mb-1">
              Preferred Language
            </h6>
            <h5 className="text-[#3D3D3D] text-[12px] font-[600]">English</h5>
          </div>
          <div className="type ">
            <h6 className="text-[#6E6D6D] text-[10px] font-[500] mb-1">Type</h6>
            <h5 className="text-[#3D3D3D] text-[12px] font-[600]">Full time</h5>
          </div>
          <div className="experience ">
            <h6 className="text-[#6E6D6D] text-[10px] font-[500] mb-1">
              Years of Experience
            </h6>
            <h5 className="text-[#3D3D3D] text-[12px] font-[600]">
              3+ Years of Experience
            </h5>
          </div>
        </div>

        {/* about the job */}
        <div className="w-full md:pl-[5.5rem] pl-[1rem] border-t border-[#E7E7E7] py-5">
          <h5 className="text-[#6E6D6D] font-[500] text-[10px] leading-5 ">
            About the job
          </h5>
          {aboutthejob.map((item) => (
            <li className="list-decimal text-[12px] font-[500] leading-6 text-[#3D3D3D]">
              {item.p}
            </li>
          ))}
          <h4 className="text-[12px] font-[500] text-[#3D3D3D] leading-6">Benefits:</h4>
          {benefits.map((benefit) => (
            <li className="list-disc text-[12px] leading-6 font-[500] text-[#3D3D3D]">
              {benefit.p}
            </li>
          ))}

          <h4 className="text-[12px] font-[500] text-[#3D3D3D] leading-6">Schedule:</h4>

          {schedule.map((s) => (
            <li className="list-disc text-[12px] leading-6 font-[500] text-[#3D3D3D]">
              {s.p}
            </li>
          ))}

          <h4 className="text-[12px] font-[500] text-[#3D3D3D] leading-6">
            Supplemental pay type:
          </h4>

          {supplementalpaytype.map((sup) => (
            <li className="list-disc text-[12px] font-[500] leading-6 text-[#3D3D3D]">
              {sup.p}
            </li>
          ))}
          <div className="flex gap-1">
            <h4 className="text-[12px] font-[500] text-[#3D3D3D] leading-6">
              Work Location:{" "}
            </h4>
            <span className="text-[12px] inline font-[500] text-[#3D3D3D] leading-6 ">
              {" "}
              In person
            </span>
          </div>
        </div>

        {/* company detail */}
        <div className="py-10 company w-full  md:pl-[5.5rem] pl-[1rem] border-t border-[#E7E7E7]">
          <div className="company-name flex justify-start items-center gap-2 mb-4">
            <img width={30} height={30} src={companyimg} alt="" />
            <h2 className="text-[14px] text-[#4F4F4F] font-[500]">Atlassian</h2>
          </div>

          <div className="grid grid-cols-2 grid-rows-3 gap-5 w-3/5">
            {companyDetail.map((com) => (
              <div className="flex flex-col gap-2">
                <h5 className="text-[#6E6D6D] font-[500] text-[10px] ">
                  {com.title}
                </h5>
                <h4 className="list-disc text-[12px] font-[500] text-[#3D3D3D]">
                  {com.p}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* sideeditbar */}
      <div className="sideeditbar w-full md:w-[30%]  border-[1px] border-[#E7E7E7] flex  flex-col px-5 items-center    bg-[#FCFCFC] ">
        <div className="btns flex-col xl:flex xl:flex-row  justify-center items-center  gap-2 mt-8 w-full ">
          {crudbuttons.map((btn, index) => (
            <button
              className={`${
                index === 0
                  ? "border-[0.8px] rounded-md border-[#DC4A2D] bg-[#FEF4F2] text-[#DC4A2D] "
                  : "text-[#FFFFFF] rounded-md border-[2px] border-[#FED3CA]  bg-[#DC4A2D] "
              }w-[90%] xl:w-[50%] mb-2 mx-auto flex justify-center items-center gap-1 outline-none  text-[12px] font-[500]  px-[18px] py-[10px] hover:translate-y-1 `}
            >
              <img src={btn.svg} alt="" />
              {btn.title}
            </button>
          ))}
        </div>

        {crudbarelements.map((bar, index) => (
          <div
            className={`h-[65px] key-value flex justify-between items-center border-b-[1px] border-[#E7E7E7] w-[95%] ${
              index === 3 && "border-none"
            }`}
          >
            <div className="flex justify-center items-center gap-2">
              <img width={15} height={15} src={bar.svg} alt="" />
              <h6 className="text-[12px] font-[500] text-[#4F4F4F]">
                {bar.name}
              </h6>
            </div>

            <h3 className="value text-[15px] font-[600] text-[#3D3D3D]">
              {bar.value}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobPreview;
