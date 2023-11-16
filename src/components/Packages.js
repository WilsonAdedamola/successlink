import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import Loading from "./Loading";

const Packages = (props) => {
  const [revealPackageForm, setRevealPackageForm] = useState("iva");
  const [loading, setLoading] = useState(false);

  const handlePackagesSelection = (id) => {
    setRevealPackageForm("");
    setLoading(true);
    setTimeout(() => {
      setRevealPackageForm(id);
      setLoading(false);
    }, 2000);
  };

  const [fullName, setFullName] = useState("")
  const [passportNumber, setPassportNumber] = useState("")
  const [country, setCountry] = useState("")
  const [dob, setDob] = useState("")

  const handleFormSubmit = () => {

  }

  return (
    <>
      <div className="md:hidden">
        {<MobilePackages setShowPackages={props.setShowPackages} />}
      </div>
      <div className="hidden md:flex w-max h-[80vh] mx-auto fixed z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-y-hidden shadow-xl mt-9 bg-[#F9FFFD] items-center gap-6 rounded-xl">
        <div className="bg-white flex flex-col items-center justify-center gap-4 shadow text-[#777777] h-full">
          <div
            onClick={() => handlePackagesSelection("iva")}
            className={
              revealPackageForm === "iva"
                ? "packages-border px-4 font-semibold w-full py-4 cursor-pointer"
                : "px-4 font-semibold w-full py-4 cursor-pointer"
            }
          >
            International visa administration
          </div>
          <div
            onClick={() => handlePackagesSelection("fitvfh")}
            className={
              revealPackageForm === "fitvfh"
                ? "packages-border px-4 font-semibold w-full py-4 cursor-pointer"
                : "px-4 font-semibold w-full py-4 cursor-pointer"
            }
          >
            Family/ individual tourist visa for holiday
          </div>
          <div
            onClick={() => handlePackagesSelection("isa")}
            className={
              revealPackageForm === "isa"
                ? "packages-border px-4 font-semibold w-full py-4 cursor-pointer"
                : "px-4 font-semibold w-full py-4 cursor-pointer"
            }
          >
            International student admission
          </div>
          <div
            onClick={() => handlePackagesSelection("irh")}
            className={
              revealPackageForm === "irh"
                ? "packages-border px-4 font-semibold w-full py-4 cursor-pointer"
                : "px-4 font-semibold w-full py-4 cursor-pointer"
            }
          >
            International religious holidays
          </div>
          <div
            onClick={() => handlePackagesSelection("vvas")}
            className={
              revealPackageForm === "vvas"
                ? "packages-border px-4 font-semibold w-full py-4 cursor-pointer"
                : "px-4 font-semibold w-full py-4 cursor-pointer"
            }
          >
            Visiting visa application support
          </div>
          <div
            onClick={() => handlePackagesSelection("fthb")}
            className={
              revealPackageForm === "fthb"
                ? "packages-border px-4 font-semibold w-full py-4 cursor-pointer"
                : "px-4 font-semibold w-full py-4 cursor-pointer"
            }
          >
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
          <div className="grid grid-cols-1 gap-5 h-full md:w-[22rem] lg:w-[32rem] overflow-y-scroll hide-scrollbar">
            {loading && <Loading />}
            {revealPackageForm === "iva" && <IvaForms />}
            {revealPackageForm === "fitvfh" && <FitvfhForms />}
            {revealPackageForm === "isa" && <IsaForms />}
            {revealPackageForm === "irh" && <IrhForms />}
            {revealPackageForm === "vvas" && <VvasForms />}
            {revealPackageForm === "fthb" && <FthbForms />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Packages;

function MobilePackages(props) {
  const [mobilePackage, setMobilePackage] = useState("iva");
  const [loading, setLoading] = useState(false);

  const handlePackagesSelection = (id) => {
    setMobilePackage("");
    setLoading(true);
    setTimeout(() => {
      setMobilePackage(id);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-start px-2 pt-2 pb-3 h-screen bg-white w-max mx-auto mt-7 rounded-lg">
      <IoCloseSharp
        onClick={() => props.setShowPackages(false)}
        className="self-end mb-2 text-black text-3xl cursor-pointer"
      />
      <select value={mobilePackage} onChange={(e)=>handlePackagesSelection(e.target.value)} className="shadow outline-none rounded w-full py-2 mb-2 text-black text-sm">
        <option value="iva">International visa administration</option>
        <option value="fitvfh">
          Family/individual tourist visa for holiday
        </option>
        <option value="isa">International student admission</option>
        <option value="irh">International religious holidays</option>
        <option value="vvas">Visiting visa application support</option>
        <option value="fthb">Flights tickets + Hotel bookings</option>
      </select>
      <div className="flex flex-col items-center gap-2 w-full h-full overflow-y-scroll hide-scrollbar">
      {loading && <Loading />}
            {mobilePackage === "iva" && <MobileIvaForms />}
            {mobilePackage === "fitvfh" && <MobileFitvfhForms />}
            {mobilePackage === "isa" && <MobileIsaForms />}
            {mobilePackage === "irh" && <MobileIrhForms />}
            {mobilePackage === "vvas" && <MobileVvasForms />}
            {mobilePackage === "fthb" && <MobileFthbForms />}
      </div>
    </div>
  );
}

function IvaForms() {
  return (
    <>
      {/* Canada */}
      <div className="canada-bg flex items-end px-4 h-[550px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[300px] w-full"
        >
          <p className="font-bold text-3xl text-black mb-4">Canada</p>
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
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-3"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-4 text-white text-sm">
            SEND
          </button>
        </form>
      </div>

      {/* USA */}
      <div className="usa-bg flex items-end px-4 h-[550px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[300px] w-full"
        >
          <p className="font-bold text-3xl text-black mb-4">USA</p>
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
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-3"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-4 text-white text-sm">
            SEND
          </button>
        </form>
      </div>

      {/* uk */}
      <div className="uk-bg flex items-end px-4 h-[550px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[300px] w-full"
        >
          <p className="font-bold text-3xl text-black mb-4">UK</p>
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
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-3"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-4 text-white text-sm">
            SEND
          </button>
        </form>
      </div>

      {/* Australia */}
      <div className="australia-bg flex items-end px-4 h-[550px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[300px] w-full"
        >
          <p className="font-bold text-3xl text-black mb-4">Australia</p>
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
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-3"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-4 text-white text-sm">
            SEND
          </button>
        </form>
      </div>
    </>
  );
}

function FitvfhForms() {
  return (
    <>
      {/* Canada */}
      <div className="canada-bg flex items-end px-4 h-[600px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[300px] w-full"
        >
          <p className="font-bold text-3xl text-black mb-4">Canada</p>
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
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-3"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-4 text-white text-sm">
            SEND
          </button>
        </form>
      </div>

      {/* USA */}
      <div className="usa-bg flex items-end px-4 h-[600px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[300px] w-full"
        >
          <p className="font-bold text-3xl text-black mb-4">USA</p>
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
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-3"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-4 text-white text-sm">
            SEND
          </button>
        </form>
      </div>

      {/* uk */}
      <div className="uk-bg flex items-end px-4 h-[600px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[300px] w-full"
        >
          <p className="font-bold text-3xl text-black mb-4">UK</p>
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
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-3"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-4 text-white text-sm">
            SEND
          </button>
        </form>
      </div>

      {/* Australia */}
      <div className="australia-bg flex items-end px-4 h-[600px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[300px] w-full"
        >
          <p className="font-bold text-3xl text-black mb-4">Australia</p>
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
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-3"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-4 text-white text-sm">
            SEND
          </button>
        </form>
      </div>
    </>
  );
}

function IsaForms() {
  return (
    <>
      {/* Canada */}
      <div className="canada-bg flex items-end px-4 h-[600px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[300px] w-full"
        >
          <p className="font-bold text-3xl text-black mb-4">Canada</p>
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
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-3"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-4 text-white text-sm">
            SEND
          </button>
        </form>
      </div>

      {/* USA */}
      <div className="usa-bg flex items-end px-4 h-[600px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[300px] w-full"
        >
          <p className="font-bold text-3xl text-black mb-4">USA</p>
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
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-3"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-4 text-white text-sm">
            SEND
          </button>
        </form>
      </div>

      {/* uk */}
      <div className="uk-bg flex items-end px-4 h-[600px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[300px] w-full"
        >
          <p className="font-bold text-3xl text-black mb-4">UK</p>
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
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-3"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-4 text-white text-sm">
            SEND
          </button>
        </form>
      </div>

      {/* Australia */}
      <div className="australia-bg flex items-end px-4 h-[600px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[300px] w-full"
        >
          <p className="font-bold text-3xl text-black mb-4">Australia</p>
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
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-3"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-4 text-white text-sm">
            SEND
          </button>
        </form>
      </div>
    </>
  );
}

function IrhForms() {
  return (
    <>
      {/* Canada */}
      <div className="canada-bg flex items-end px-4 h-[600px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[300px] w-full"
        >
          <p className="font-bold text-3xl text-black mb-4">Canada</p>
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
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-3"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-4 text-white text-sm">
            SEND
          </button>
        </form>
      </div>

      {/* USA */}
      <div className="usa-bg flex items-end px-4 h-[600px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[300px] w-full"
        >
          <p className="font-bold text-3xl text-black mb-4">USA</p>
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
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-3"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-4 text-white text-sm">
            SEND
          </button>
        </form>
      </div>

      {/* uk */}
      <div className="uk-bg flex items-end px-4 h-[600px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[300px] w-full"
        >
          <p className="font-bold text-3xl text-black mb-4">UK</p>
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
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-3"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-4 text-white text-sm">
            SEND
          </button>
        </form>
      </div>

      {/* Australia */}
      <div className="australia-bg flex items-end px-4 h-[600px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[300px] w-full"
        >
          <p className="font-bold text-3xl text-black mb-4">Australia</p>
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
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-3"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-4 text-white text-sm">
            SEND
          </button>
        </form>
      </div>
    </>
  );
}

function VvasForms() {
  return (
    <>
      {/* Canada */}
      <div className="canada-bg flex items-end px-4 h-[600px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[300px] w-full"
        >
          <p className="font-bold text-3xl text-black mb-4">Canada</p>
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
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-3"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-4 text-white text-sm">
            SEND
          </button>
        </form>
      </div>

      {/* USA */}
      <div className="usa-bg flex items-end px-4 h-[600px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[300px] w-full"
        >
          <p className="font-bold text-3xl text-black mb-4">USA</p>
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
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-3"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-4 text-white text-sm">
            SEND
          </button>
        </form>
      </div>

      {/* uk */}
      <div className="uk-bg flex items-end px-4 h-[600px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[300px] w-full"
        >
          <p className="font-bold text-3xl text-black mb-4">UK</p>
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
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-3"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-4 text-white text-sm">
            SEND
          </button>
        </form>
      </div>

      {/* Australia */}
      <div className="australia-bg flex items-end px-4 h-[600px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[300px] w-full"
        >
          <p className="font-bold text-3xl text-black mb-4">Australia</p>
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
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-3"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-4 text-white text-sm">
            SEND
          </button>
        </form>
      </div>
    </>
  );
}

function FthbForms() {
  return (
    <>
      {/* Canada */}
      <div className="canada-bg flex items-end px-4 h-[600px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[300px] w-full"
        >
          <p className="font-bold text-3xl text-black mb-4">Canada</p>
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
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-3"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-4 text-white text-sm">
            SEND
          </button>
        </form>
      </div>

      {/* USA */}
      <div className="usa-bg flex items-end px-4 h-[600px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[300px] w-full"
        >
          <p className="font-bold text-3xl text-black mb-4">USA</p>
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
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-3"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-4 text-white text-sm">
            SEND
          </button>
        </form>
      </div>

      {/* uk */}
      <div className="uk-bg flex items-end px-4 h-[600px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[300px] w-full"
        >
          <p className="font-bold text-3xl text-black mb-4">UK</p>
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
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-3"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-4 text-white text-sm">
            SEND
          </button>
        </form>
      </div>

      {/* Australia */}
      <div className="australia-bg flex items-end px-4 h-[600px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[300px] w-full"
        >
          <p className="font-bold text-3xl text-black mb-4">Australia</p>
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
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-3"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-4 text-white text-sm">
            SEND
          </button>
        </form>
      </div>
    </>
  );
}

function MobileIvaForms() {
  return (
    <>
      <div className="canada-bg flex items-center justify-center px-4 w-full sm:w-[400px] rounded-2xl mt-5 py-4">
        <form
          action=""
          className="flex flex-col items-start gap-2 bg-white text-[#595959] rounded-3xl p-3 h-max"
        >
          <p className="font-bold text-2xl text-black">Canada</p>
          <input
            type="text"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
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
          className="flex flex-col items-start gap-2 bg-white text-[#595959] rounded-3xl p-3 h-max"
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
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
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
          className="flex flex-col items-start gap-2 bg-white text-[#595959] rounded-3xl p-3 h-max"
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
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
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
          className="flex flex-col items-start gap-2 bg-white text-[#595959] rounded-3xl p-3 h-max"
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
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 text-white text-xs">
            For Enquiry
          </button>
        </form>
      </div>
    </>
  );
}

function MobileFitvfhForms() {
  return (
    <>
      <div className="canada-bg flex items-center justify-center px-4 w-full sm:w-[400px] rounded-2xl mt-5 py-4">
        <form
          action=""
          className="flex flex-col items-start gap-2 bg-white text-[#595959] rounded-3xl p-3 h-max"
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
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
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
          className="flex flex-col items-start gap-2 bg-white text-[#595959] rounded-3xl p-3 h-max"
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
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
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
          className="flex flex-col items-start gap-2 bg-white text-[#595959] rounded-3xl p-3 h-max"
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
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
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
          className="flex flex-col items-start gap-2 bg-white text-[#595959] rounded-3xl p-3 h-max"
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
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 text-white text-xs">
            For Enquiry
          </button>
        </form>
      </div>
    </>
  );
}

function MobileIsaForms() { 
  return (
    <>
      <div className="canada-bg flex items-center justify-center px-4 w-full sm:w-[400px] rounded-2xl mt-5 py-4">
        <form
          action=""
          className="flex flex-col items-start gap-2 bg-white text-[#595959] rounded-3xl p-3 h-max"
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
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
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
          className="flex flex-col items-start gap-2 bg-white text-[#595959] rounded-3xl p-3 h-max"
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
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
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
          className="flex flex-col items-start gap-2 bg-white text-[#595959] rounded-3xl p-3 h-max"
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
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
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
          className="flex flex-col items-start gap-2 bg-white text-[#595959] rounded-3xl p-3 h-max"
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
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 text-white text-xs">
            For Enquiry
          </button>
        </form>
      </div>
    </>
  );
}

function MobileIrhForms() {
  return (
    <>
      <div className="canada-bg flex items-center justify-center px-4 w-full sm:w-[400px] rounded-2xl mt-5 py-4">
        <form
          action=""
          className="flex flex-col items-start gap-2 bg-white text-[#595959] rounded-3xl p-3 h-max"
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
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
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
          className="flex flex-col items-start gap-2 bg-white text-[#595959] rounded-3xl p-3 h-max"
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
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
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
          className="flex flex-col items-start gap-2 bg-white text-[#595959] rounded-3xl p-3 h-max"
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
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
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
          className="flex flex-col items-start gap-2 bg-white text-[#595959] rounded-3xl p-3 h-max"
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
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 text-white text-xs">
            For Enquiry
          </button>
        </form>
      </div>
    </>
  );
}

function MobileVvasForms() {
  return (
    <>
      <div className="canada-bg flex items-center justify-center px-4 w-full sm:w-[400px] rounded-2xl mt-5 py-4">
        <form
          action=""
          className="flex flex-col items-start gap-2 bg-white text-[#595959] rounded-3xl p-3 h-max"
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
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
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
          className="flex flex-col items-start gap-2 bg-white text-[#595959] rounded-3xl p-3 h-max"
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
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
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
          className="flex flex-col items-start gap-2 bg-white text-[#595959] rounded-3xl p-3 h-max"
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
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
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
          className="flex flex-col items-start gap-2 bg-white text-[#595959] rounded-3xl p-3 h-max"
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
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 text-white text-xs">
            For Enquiry
          </button>
        </form>
      </div>
    </>
  );
}

function MobileFthbForms() {
  return (
    <>
      <div className="canada-bg flex items-center justify-center px-4 w-full sm:w-[400px] rounded-2xl mt-5 py-4">
        <form
          action=""
          className="flex flex-col items-start gap-2 bg-white text-[#595959] rounded-3xl p-3 h-max"
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
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
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
          className="flex flex-col items-start gap-2 bg-white text-[#595959] rounded-3xl p-3 h-max"
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
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
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
          className="flex flex-col items-start gap-2 bg-white text-[#595959] rounded-3xl p-3 h-max"
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
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
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
          className="flex flex-col items-start gap-2 bg-white text-[#595959] rounded-3xl p-3 h-max"
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
          <input
            type="date"
            placeholder="DOB"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 text-white text-xs">
            For Enquiry
          </button>
        </form>
      </div>
    </>
  );
}
