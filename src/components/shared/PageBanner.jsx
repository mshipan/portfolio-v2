const PageBanner = ({ title, subTitle }) => {
  return (
    <div className="projectsBannerImage h-[20rem] md:h-[30rem] flex flex-col gap-5 items-center justify-center">
      <h1 className="font-notoSans text-5xl text-white mt-7">{title}</h1>
      <p className="font-poppins capitalize text-[#55e6a5]">{subTitle}</p>
    </div>
  );
};

export default PageBanner;
