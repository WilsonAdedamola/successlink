import { useState, useRef } from "react";
import { IoCloseSharp } from "react-icons/io5";
import Loading from "./Loading";
import emailjs from "@emailjs/browser";

const Packages = (props) => {
  const [revealPackageForm, setRevealPackageForm] = useState("iva");
  const [loading, setLoading] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [toCountry, setToCountry] = useState("");
  const [sending, setSending] = useState("SEND");
  const [selectedPackage, setSelectedPackage] = useState("none");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [country, setCountry] = useState("");

  const form = useRef();

  const handlePackagesSelection = (id) => {
    setRevealPackageForm("");
    setLoading(true);
    setTimeout(() => {
      setRevealPackageForm(id);
      setLoading(false);
    }, 2000);
  };

  const handleSetPackage = () => {
    if (revealPackageForm === "iva") {
      setSelectedPackage("International visa administration");
    } else {
      if (revealPackageForm === "fitvfh") {
        setSelectedPackage("Family/ individual tourist visa for holiday");
      } else {
        if (revealPackageForm === "isa") {
          setSelectedPackage("International student admission");
        } else {
          if (revealPackageForm === "irh") {
            setSelectedPackage("International religious holidays");
          } else {
            if (revealPackageForm === "vvas") {
              setSelectedPackage("Visiting visa application support");
            } else {
              if (revealPackageForm === "fthb") {
                setSelectedPackage("Flights tickets + Hotel bookings");
              }
            }
          }
        }
      }
    }
    // console.log(selectedPackage)
  };

  const countries = ["Canada", "United States", "United Kingdom", "Australia", "Austria", "Belgium", "Czech Republic", "Croatia", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Iceland", "Italy", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Netherlands", "Norway", "Poland", "Portugal", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland"]

  const sendEmail = (e) => {
    e.preventDefault();
    handleSetPackage();
    setSending("SENDING...");
    setTimeout(() => {
      emailjs
        .sendForm(
          "service_mpxcoag",
          "template_9zvryjy",
          e.target,
          "DM5vStou4nWaUUr3r"
        )
        .then(
          (result) => {
            // console.log(result.text);
            if (result.text === "OK") {
              setTimeout(() => {
                setSending("SENT");
                setTimeout(() => {
                  setFullName("");
                  setDob("");
                  setCountry("");
                  setEmail("");
                  setSending("SEND");
                },2000);
              }, 2000);
            }
          },
          (error) => {
            // console.log(error.text);
            if (error) {
              setSending("ERROR");
              setTimeout(() => {
                setSending("SEND");
              }, 2000);
            }
          }
        );
    }, 2000);
  };

  return (
    <>
      <div className="md:hidden">
        {<MobilePackages setShowPackages={props.setShowPackages} countries={countries}/>}
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
        <div className="flex flex-col h-full items-start pr-4 text-black mt-7 pb-10">
          <div className="flex items-center justify-between w-full">
            <p className="before font-semibold text-lg">PACKAGES</p>
            <IoCloseSharp
              onClick={() => props.setShowPackages(false)}
              className="text-black text-4xl cursor-pointer"
            />
          </div>

          <form
            action=""
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col items-center justify-center text-[#595959] min-w-[350px] w-full"
          >
            {loading ? (
              <Loading />
            ) : (
              <>
                <select
                  onChange={(e) => {
                    setToCountry(e.target.value);
                    setFormLoading(true);
                    setTimeout(() => {
                      setFormLoading(false);
                    }, 1000);
                  }}
                  value={toCountry}
                  name="toCountry"
                  className="w-full py-3 px-1 shadow mt-5 outline-none md:w-[350px] lg:w-[500px]"
                >
                  {
              revealPackageForm === "irh" ? (
                <>
                <option value="">Select Country</option>
                <option value="Jerusalem">Jerusalem</option>
                <option value="Mecca">Mecca</option>
                </>
              ) : (
                <>
                <option value="">Select Country</option>
                {
                  countries.map((country, id)=>(
                    <option key={id} value={country}>{country}</option>
                  ))
                }
                </>
              )
            }
                </select>
                {formLoading ? (
                  <Loading />
                ) : (
                  <div
                    className={
                      toCountry === ""
                        ? "hidden canada-bg flex-col items-end justify-end px-4 h-[500px] rounded-2xl mt-5 pb-4 w-full"
                        : "canada-bg flex flex-col items-end justify-end px-4 h-[500px] rounded-2xl mt-5 pb-4 w-full"
                    }
                  >
                    <div className="flex items-center invisible">
                      <select name="selectedPackage" className="">
                        <option value={selectedPackage}>
                          {selectedPackage}
                        </option>
                      </select>
                    </div>
                    <div className="transparent-bg flex flex-col gap-4 px-2 md:w-[350px] lg:w-[500px] text-black h-max py-8 rounded-3xl">
                      <input
                        type="text"
                        required
                        name="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Full name"
                        className="packages-input-border w-full border-none bg-transparent outline-none px-1 placeholder:text-gray-600 placeholder:text-sm pb-1"
                      />
                      <input
                        type="text"
                        required
                        name="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder="Country"
                        className="packages-input-border w-full border-none bg-transparent outline-none px-1 placeholder:text-gray-600 placeholder:text-sm pb-1"
                      />
                      <input
                        type="email"
                        required
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="packages-input-border w-full border-none bg-transparent outline-none px-1 placeholder:text-gray-600 placeholder:text-sm pb-1"
                      />
                      <input
                        type="text"
                        placeholder="Date of birth(dd/mm/yyyy)"
                        name="dob"
                        required
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        className="packages-input-border w-full border-none bg-transparent outline-none px-1 placeholder:text-gray-600 placeholder:text-sm pb-1"
                      />
                      <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-2 text-white text-sm">
                        {sending}
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Packages;

// MOBILE VIEW PACKAGES

function MobilePackages({setShowPackages, countries}) {
  const [mobilePackage, setMobilePackage] = useState("iva");
  const [loading, setLoading] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("none");

  const [formLoading, setFormLoading] = useState(false);
  const [toCountry, setToCountry] = useState("");
  const [sending, setSending] = useState("SEND");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [country, setCountry] = useState("");

  const form = useRef();

  const handlePackagesSelection = (id) => {
    setMobilePackage("");
    setLoading(true);
    setTimeout(() => {
      setMobilePackage(id);
      setLoading(false);
    }, 2000);
  };

  const handleSetPackage = () => {
    if (mobilePackage === "iva") {
      setSelectedPackage("International visa administration");
    } else {
      if (mobilePackage === "fitvfh") {
        setSelectedPackage("Family/ individual tourist visa for holiday");
      } else {
        if (mobilePackage === "isa") {
          setSelectedPackage("International student admission");
        } else {
          if (mobilePackage === "irh") {
            setSelectedPackage("International religious holidays");
          } else {
            if (mobilePackage === "vvas") {
              setSelectedPackage("Visiting visa application support");
            } else {
              if (mobilePackage === "fthb") {
                setSelectedPackage("Flights tickets + Hotel bookings");
              }
            }
          }
        }
      }
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    handleSetPackage();
    setSending("SENDING...");
    setTimeout(() => {
      emailjs
        .sendForm(
          "service_mpxcoag",
          "template_9zvryjy",
          e.target,
          "DM5vStou4nWaUUr3r"
        )
        .then(
          (result) => {
            // console.log(result.text);
            if (result.text === "OK") {
              setTimeout(() => {
                setSending("SENT");
                setTimeout(() => {
                  setFullName("");
                  setDob("");
                  setCountry("");
                  setEmail("");
                  setSending("SEND");
                },2000);
              }, 2000);
            }
          },
          (error) => {
            // console.log(error.text);
            if (error) {
              setSending("ERROR");
              setTimeout(() => {
                setSending("SEND");
              }, 2000);
            }
          }
        );
    }, 2000);
  };

  return (
    <div className="height flex flex-col items-center justify-start px-2 pt-2 pb-3 bg-white w-max mx-auto mt-7 rounded-lg fixed z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl overflow-y-auto">
      <IoCloseSharp
        onClick={() => setShowPackages(false)}
        className="self-end mb-2 text-black text-3xl cursor-pointer"
      />
      <select
        value={mobilePackage}
        onChange={(e) => handlePackagesSelection(e.target.value)}
        className="shadow outline-none rounded w-full py-2 mb-2 text-black font-semibold text-sm"
      >
        <option value="iva">International visa administration</option>
        <option value="fitvfh">
          Family/individual tourist visa for holiday
        </option>
        <option value="isa">International student admission</option>
        <option value="irh">International religious holidays</option>
        <option value="vvas">Visiting visa application support</option>
        <option value="fthb">Flights tickets + Hotel bookings</option>
      </select>
      <div className="flex flex-col items-center gap-2 w-full h-full">
        {loading && <Loading />}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-center justify- text-xs text-[#595959] h-full w-full"
        >
          <select
            onChange={(e) => {
              setToCountry(e.target.value);
              setFormLoading(true);
              setTimeout(() => {
                setFormLoading(false);
              }, 1000);
            }}
            value={toCountry}
            name="toCountry"
            className="w-full py-3 px-1 text-sm shadow mt-3 outline-none"
          >
            {
              mobilePackage === "irh" ? (
                <>
                <option value="">Select Country</option>
                <option value="Jerusalem">Jerusalem</option>
                <option value="Mecca">Mecca</option>
                </>
              ) : (
                <>
                <option value="">Select Country</option>
                {
                  countries.map((country, id)=>(
                    <option key={id} value={country}>{country}</option>
                  ))
                }
                </>
              )
            }
          </select>

         { formLoading ? (<Loading />) : (<div
            className={
              toCountry === ""
                ? "canada-bg hidden flex-col items-center justify-end px-4 w-full sm:w-[400px] h-full rounded-2xl mt-5 py-4"
                : "canada-bg flex flex-col items-center justify-end justify-self-end min-h-[60vh] px-4 w-full sm:w-[400px] h-full rounded-2xl mt-5 py-4"
            }
          >
            <div className="flex items-center invisible">
              <select name="selectedPackage" className="">
                <option value={selectedPackage}>{selectedPackage}</option>
              </select>
            </div>
            <div className="transparent-bg flex flex-col justify-around gap-1 self-end rounded-3xl px-3 py-5 h-[35vh] w-full">
              <input
                type="text"
                required
                name="fullName"
                value={fullName}
                onChange={(e)=>setFullName(e.target.value)}
                placeholder="Full name"
                className="packages-input-border w-full border-none bg-transparent outline-none px-1 placeholder:text-gray-600 placeholder:text-xs pb-1"
              />
              <input
                type="text"
                required
                name="country"
                value={country}
                onChange={(e)=>setCountry(e.target.value)}
                placeholder="Country"
                className="packages-input-border w-full border-none bg-transparent outline-none px-1 placeholder:text-gray-600 placeholder:text-xs pb-1"
              />
              <input
                type="email"
                required
                name="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Email"
                className="packages-input-border w-full border-none bg-transparent outline-none px-1 placeholder:text-gray-600 placeholder:text-xs pb-1"
              />
              <input
                type="text"
                required
                name="dob"
                value={dob}
                onChange={(e)=>setDob(e.target.value)}
                placeholder="Date of Birth(dd/mm/yyyy)"
                className="packages-input-border w-full border-none bg-transparent outline-none px-1 placeholder:text-gray-600 text-xs pb-1"
              />
              <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 text-white text-xs">
                {sending}
              </button>
            </div>
          </div>)}
        </form>
      </div>
    </div>
  );
}
