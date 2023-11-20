import Button from "../components/shared/Button";
import PageBanner from "../components/shared/PageBanner";

const Contact = () => {
  return (
    <div>
      <PageBanner title="Contact Me" subTitle="my contact info" />
      <div className="md:mt-32 mt-20 mb-20 md:w-3/5 w-full text-center md:text-left mx-auto">
        <div className="w-[96%] md:max-xl:w-full md:w-full mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.453151702253!2d90.36443177618085!3d23.802479978634935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d0eefa3e4f%3A0x8678e76c333fa108!2sKathaltola%20Dairy%20Farm!5e0!3m2!1sen!2sbd!4v1700506284579!5m2!1sen!2sbd"
            className="border-none w-full h-[20rem] md:max-xl:h-80 md:h-[35rem]"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex flex-col-reverse md:max-xl:flex-col-reverse md:flex-row gap-10 justify-between mt-20 md:max-xl:w-full xl:max-2xl:w-full md:w-full w-[96%] mx-auto">
          <div className="py-20 px-10 bg-[#141c27] md:max-xl:w-full md:w-1/3 xl:max-2xl:w-full flex flex-col gap-5">
            <div className="bg-[#1d2837] hover:bg-[#141c27] border border-[#141c27] hover:border-[#55e6a5] transition-all ease-in duration-300 flex flex-col gap-4 px-5 py-4">
              <h1 className="text-white font-notoSans capitalize">phone:</h1>
              <p className="text-zinc-500 font-poppins">01622543390</p>
            </div>
            <div className="bg-[#1d2837] hover:bg-[#141c27] border border-[#141c27] hover:border-[#55e6a5] transition-all ease-in duration-300 flex flex-col gap-4 px-5 py-4">
              <h1 className="text-white font-notoSans capitalize">Email:</h1>
              <p className="text-zinc-500 font-poppins">
                shipanmallik95@gmail.com
              </p>
            </div>
            <div className="bg-[#1d2837] hover:bg-[#141c27] border border-[#141c27] hover:border-[#55e6a5] transition-all ease-in duration-300 flex flex-col gap-4 px-5 py-4">
              <h1 className="text-white font-notoSans capitalize">website:</h1>
              <p className="text-zinc-500 font-poppins">
                shipanmallik.example.com
              </p>
            </div>
            <div className="bg-[#1d2837] hover:bg-[#141c27] border border-[#141c27] hover:border-[#55e6a5] transition-all ease-in duration-300 flex flex-col gap-4 px-5 py-4">
              <h1 className="text-white font-notoSans capitalize">address:</h1>
              <p className="text-zinc-500 font-poppins capitalize">
                kathaltola panir pump, east monipur, mirpur-2, dhaka-1216
              </p>
            </div>
          </div>
          <div className="md:w-2/3 md:max-xl:w-full xl:max-2xl:w-full">
            <div className="flex flex-col gap-5">
              <h4 className="text-[#55e6a5] text-base font-poppins md:max-xl:text-center">
                Get in touch
              </h4>
              <h1 className="text-white text-4xl font-notoSans md:max-xl:text-center">
                If you have any project or need help. Feel free to Contact me...
              </h1>
              <div className="mt-10">
                <form className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="form-control">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="py-3 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-white"
                      />
                    </div>
                    <div className="form-control">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="py-3 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-white"
                      />
                    </div>
                    <div className="form-control">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        className="py-3 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-white"
                      />
                    </div>
                    <div className="form-control">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        className="py-3 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-white"
                      />
                    </div>
                    <div className="form-control md:col-span-2">
                      <textarea
                        name="comment"
                        cols="30"
                        rows="10"
                        className="py-3 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-white"
                      ></textarea>
                    </div>
                  </div>
                  <Button
                    text="submit message"
                    type="submit"
                    className="flex items-center justify-center gap-1 capitalize w-full"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
