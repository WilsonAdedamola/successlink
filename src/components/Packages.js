import { IoCloseSharp } from "react-icons/io5";

const Packages = (props) => {
  return (
    <>
      <div className="md:hidden">
        {<MobilePackages setShowPackages={props.setShowPackages} />}
      </div>
      <div className="hidden md:flex w-max h-[80vh] mx-auto fixed z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-y-hidden shadow-xl mt-9 bg-[#F9FFFD] items-center gap-6 rounded-xl">
        <div className="bg-white flex flex-col items-center justify-center gap-4 shadow text-[#777777] h-full">
          <div className="packages-border px-4 font-semibold w-full py-4">
            International visa administration
          </div>
          <div className="packages-border px-4 font-semibold w-full py-4">
            Family/ individual tourist visa for holiday
          </div>
          <div className="packages-border px-4 font-semibold w-full py-4">
            International student admission
          </div>
          <div className="packages-border px-4 font-semibold w-full py-4">
            International religious holidays
          </div>
          <div className="packages-border px-4 font-semibold w-full py-4">
            Visiting visa application support
          </div>
          <div className="packages-border px-4 font-semibold w-full py-4">
            Flights tickets + Hotel bookings
          </div>
        </div>
        <div className="flex flex-col h-full items-start pr-4 text-black mt-7 pb-6">
          <div className="flex items-center justify-between w-full">
            <p className="before font-semibold text-lg">PACKAGES</p>
            <IoCloseSharp
              onClick={() => props.setShowPackages(false)}
              className="text-black text-4xl cursor-pointer"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 h-full overflow-y-scroll hide-scrollbar">
            {/* Canada */}
            <div className="canada-bg flex items-end px-4 h-[450px] rounded-2xl mt-5 pb-4">
              <form
                action=""
                className="flex flex-col items-start gap-2 bg-white rounded-3xl p-3 h-max"
              >
                <p className="font-bold text-3xl">Canada</p>
                <input
                  type="text"
                  placeholder="Full name"
                  className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-3"
                />
                <input
                  type="number"
                  placeholder="Passport number"
                  className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-3"
                />
                <input
                  type="text"
                  placeholder="Country"
                  className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-3"
                />
                <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 text-white text-sm">
                  For Enquiry
                </button>
              </form>
            </div>

            {/* usa */}
            <div className="usa-bg flex items-end px-4 h-[450px] rounded-2xl mt-5 pb-4">
              <form
                action=""
                className="flex flex-col items-start gap-2 bg-white rounded-3xl p-3 h-max"
              >
                <p className="font-bold text-3xl">USA</p>
                <input
                  type="text"
                  placeholder="Full name"
                  className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-3"
                />
                <input
                  type="number"
                  placeholder="Passport number"
                  className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-3"
                />
                <input
                  type="text"
                  placeholder="Country"
                  className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-3"
                />
                <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 text-white text-sm">
                  For Enquiry
                </button>
              </form>
            </div>

            {/* uk */}
            <div className="uk-bg flex items-end px-4 h-[450px] rounded-2xl mt-5 pb-4">
              <form
                action=""
                className="flex flex-col items-start gap-2 bg-white rounded-3xl p-3 h-max"
              >
                <p className="font-bold text-3xl">UK</p>
                <input
                  type="text"
                  placeholder="Full name"
                  className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-3"
                />
                <input
                  type="number"
                  placeholder="Passport number"
                  className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-3"
                />
                <input
                  type="text"
                  placeholder="Country"
                  className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-3"
                />
                <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 text-white text-sm">
                  For Enquiry
                </button>
              </form>
            </div>

            {/* australia */}
            <div className="australia-bg flex items-end px-4 h-[450px] rounded-2xl mt-5 pb-4">
              <form
                action=""
                className="flex flex-col items-start gap-2 bg-white rounded-3xl p-3 h-max"
              >
                <p className="font-bold text-3xl">Australia</p>
                <input
                  type="text"
                  placeholder="Full name"
                  className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-3"
                />
                <input
                  type="number"
                  placeholder="Passport number"
                  className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-3"
                />
                <input
                  type="text"
                  placeholder="Country"
                  className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-3"
                />
                <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 text-white text-sm">
                  For Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Packages;

function MobilePackages(props) {
  return (
    <div className="flex flex-col items-center justify-start px-2 pt-2 pb-3 h-screen bg-white w-max mx-auto mt-7 rounded-lg">
      <IoCloseSharp
        onClick={() => props.setShowPackages(false)}
        className="self-end mb-2 text-black text-3xl cursor-pointer"
      />
      <select className="shadow rounded w-full py-2 text-black text-sm">
        <option value="iva">International visa administration</option>
        <option value="fitvfh">
          Family/individual tourist visa for holiday
        </option>
        <option value="isa">International student admission</option>
        <option value="irh">International religious holidays</option>
        <option value="vva">Visiting visa application support</option>
        <option value="fthb">Flights tickets + Hotel bookings</option>
      </select>
      <div className="flex flex-col items-center gap-2 w-full h-full overflow-y-scroll hide-scrollbar">
        {/* Canada */}
        <div className="canada-bg flex items-center justify-center px-4 w-full sm:w-[400px] rounded-2xl mt-5 py-4">
          <form
            action=""
            className="flex flex-col items-start gap-2 bg-white rounded-3xl p-3 h-max"
          >
            <p className="font-bold text-2xl text-black">Canada</p>
            <input
              type="text"
              placeholder="Full name"
              className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-3"
            />
            <input
              type="number"
              placeholder="Passport number"
              className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-3"
            />
            <input
              type="text"
              placeholder="Country"
              className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-3"
            />
            <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 text-white text-xs">
              For Enquiry
            </button>
          </form>
        </div>

        {/* usa */}
        <div className="usa-bg flex items-center justify-center px-4 w-full sm:w-[400px] rounded-2xl mt-5 py-4">
          <form
            action=""
            className="flex flex-col items-start gap-2 bg-white rounded-3xl p-3 h-max"
          >
            <p className="font-bold text-2xl text-black">USA</p>
            <input
              type="text"
              placeholder="Full name"
              className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-3"
            />
            <input
              type="number"
              placeholder="Passport number"
              className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-3"
            />
            <input
              type="text"
              placeholder="Country"
              className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-3"
            />
            <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 text-white text-xs">
              For Enquiry
            </button>
          </form>
        </div>

        {/* UK */}
        <div className="uk-bg flex items-center justify-center px-4 w-full sm:w-[400px] rounded-2xl mt-5 py-4">
          <form
            action=""
            className="flex flex-col items-start gap-2 bg-white rounded-3xl p-3 h-max"
          >
            <p className="font-bold text-2xl text-black">UK</p>
            <input
              type="text"
              placeholder="Full name"
              className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-3"
            />
            <input
              type="number"
              placeholder="Passport number"
              className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-3"
            />
            <input
              type="text"
              placeholder="Country"
              className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-3"
            />
            <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 text-white text-xs">
              For Enquiry
            </button>
          </form>
        </div>

        {/* australia */}
        <div className="australia-bg flex items-center justify-center px-4 w-full sm:w-[400px] rounded-2xl mt-5 py-4">
          <form
            action=""
            className="flex flex-col items-start gap-2 bg-white rounded-3xl p-3 h-max"
          >
            <p className="font-bold text-2xl text-black">Australia</p>
            <input
              type="text"
              placeholder="Full name"
              className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-3"
            />
            <input
              type="number"
              placeholder="Passport number"
              className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-3"
            />
            <input
              type="text"
              placeholder="Country"
              className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-3"
            />
            <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 text-white text-xs">
              For Enquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
