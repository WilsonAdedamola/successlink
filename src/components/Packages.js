import { useState, useRef } from "react";
import { IoCloseSharp } from "react-icons/io5";
import Loading from "./Loading";
import emailjs from '@emailjs/browser';

const Packages = (props) => {
  const [revealPackageForm, setRevealPackageForm] = useState("iva");
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState("SEND");
  const [selectedPackage, setSelectedPackage] = useState("none")

  const form = useRef()

  const handlePackagesSelection = (id) => {
    setRevealPackageForm("");
    setLoading(true);
    setTimeout(() => {
      setRevealPackageForm(id);
      setLoading(false);
    }, 2000);
  };

  const handleSetPackage = () => {
    if(revealPackageForm === "iva"){
        setSelectedPackage("International visa administration")
    }else{
        if(revealPackageForm === "fitvfh"){
            setSelectedPackage("Family/ individual tourist visa for holiday")
        }else{
            if(revealPackageForm === "isa"){
                setSelectedPackage("International student admission")
            }else{
                if(revealPackageForm === "irh"){
                    setSelectedPackage("International religious holidays")
                }else{
                    if(revealPackageForm === "vvas"){
                        setSelectedPackage("Visiting visa application support")
                    }else{
                        if(revealPackageForm === "fthb"){
                            setSelectedPackage("Flights tickets + Hotel bookings")
                        }
                    }
                }
            }
        }
    }
    // console.log(selectedPackage)
  }

  const sendEmail = (e) => {
    e.preventDefault();
    handleSetPackage()
    setTimeout(()=>{
      emailjs.sendForm('service_mpxcoag', 'template_9zvryjy', e.target, 'DM5vStou4nWaUUr3r')
        .then((result) => {
            // console.log(result.text);
            if(result.text === "OK"){
              alert("Message sent")
              setTimeout(()=>{
                window.location.reload()
              },1000)
            }
        }, (error) => {
            // console.log(error.text);
            if(error){
              alert("Error sending information")
              setTimeout(()=>{
                window.location.reload()
              },1000)
            }
        });
    },2000)
  };

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
            {revealPackageForm === "iva" && <IvaForms sendEmail={sendEmail} form={form} sending={sending} selectedPackage={selectedPackage} setSelectedPackage={setSelectedPackage} />}
            {revealPackageForm === "fitvfh" && <FitvfhForms  sendEmail={sendEmail} form={form} sending={sending} selectedPackage={selectedPackage} setSelectedPackage={setSelectedPackage}/>}
            {revealPackageForm === "isa" && <IsaForms  sendEmail={sendEmail} form={form} sending={sending} selectedPackage={selectedPackage} setSelectedPackage={setSelectedPackage}/>}
            {revealPackageForm === "irh" && <IrhForms  sendEmail={sendEmail} form={form} sending={sending} selectedPackage={selectedPackage} setSelectedPackage={setSelectedPackage}/>}
            {revealPackageForm === "vvas" && <VvasForms  sendEmail={sendEmail} form={form} sending={sending} selectedPackage={selectedPackage} setSelectedPackage={setSelectedPackage}/>}
            {revealPackageForm === "fthb" && <FthbForms  sendEmail={sendEmail} form={form} sending={sending} selectedPackage={selectedPackage} setSelectedPackage={setSelectedPackage}/>}
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
  const [selectedPackage, setSelectedPackage] = useState("none")

  const form = useRef()
  
  const handlePackagesSelection = (id) => {
    setMobilePackage("");
    setLoading(true);
    setTimeout(() => {
      setMobilePackage(id);
      setLoading(false);
    }, 2000);
  };


  const handleSetPackage = () => {
    if(mobilePackage === "iva"){
        setSelectedPackage("International visa administration")
    }else{
        if(mobilePackage === "fitvfh"){
            setSelectedPackage("Family/ individual tourist visa for holiday")
        }else{
            if(mobilePackage === "isa"){
                setSelectedPackage("International student admission")
            }else{
                if(mobilePackage === "irh"){
                    setSelectedPackage("International religious holidays")
                }else{
                    if(mobilePackage === "vvas"){
                        setSelectedPackage("Visiting visa application support")
                    }else{
                        if(mobilePackage === "fthb"){
                            setSelectedPackage("Flights tickets + Hotel bookings")
                        }
                    }
                }
            }
        }
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();
    handleSetPackage()
    setTimeout(()=>{
      emailjs.sendForm('service_mpxcoag', 'template_9zvryjy', e.target, 'DM5vStou4nWaUUr3r')
        .then((result) => {
            // console.log(result.text);
            if(result.text === "OK"){
              alert("Message sent")
              setTimeout(()=>{
                window.location.reload()
              },1000)
            }
        }, (error) => {
            // console.log(error.text);
            if(error){
              alert("Error sending information")
              setTimeout(()=>{
                window.location.reload()
              },1000)
            }
        });
    },2000)
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
            {mobilePackage === "iva" && <MobileIvaForms sendEmail={sendEmail} form={form} selectedPackage={selectedPackage} setSelectedPackage={setSelectedPackage}/>}
            {mobilePackage === "fitvfh" && <MobileFitvfhForms sendEmail={sendEmail} form={form} selectedPackage={selectedPackage} setSelectedPackage={setSelectedPackage}/>}
            {mobilePackage === "isa" && <MobileIsaForms sendEmail={sendEmail} form={form} selectedPackage={selectedPackage} setSelectedPackage={setSelectedPackage}/>}
            {mobilePackage === "irh" && <MobileIrhForms sendEmail={sendEmail} form={form} selectedPackage={selectedPackage} setSelectedPackage={setSelectedPackage}/>}
            {mobilePackage === "vvas" && <MobileVvasForms sendEmail={sendEmail} form={form} selectedPackage={selectedPackage} setSelectedPackage={setSelectedPackage}/>}
            {mobilePackage === "fthb" && <MobileFthbForms sendEmail={sendEmail} form={form} selectedPackage={selectedPackage} setSelectedPackage={setSelectedPackage}/>}
      </div>
    </div>
  );
}

function IvaForms({sendEmail, selectedPackage, sending, form}) {

  return (
    <>
      {/* Canada */}
      <div className="canada-bg flex items-end px-4 h-[550px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[350px] w-full"
        >
          <p className="font-bold text-3xl text-black mt-2">Canada</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="Canada" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="Canada">Canada</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            placeholder="Date of birth(dd/mm/yyyy)"
            name="dob"
            required
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-2 text-white text-sm">
            {sending}
          </button>
        </form>
      </div>

      {/* USA */}
      <div className="usa-bg flex items-end px-4 h-[550px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[350px] w-full"
        >
          <p className="font-bold text-3xl text-black mt-2">USA</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="USA" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="USA">USA</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            placeholder="Date of birth(dd/mm/yyyy)"
            name="dob"
            required
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-2 text-white text-sm">
            {sending}
          </button>
        </form>
      </div>

      {/* uk */}
      <div className="uk-bg flex items-end px-4 h-[550px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[350px] w-full"
        >
          <p className="font-bold text-3xl text-black mt-2">UK</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="UK" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="UK">UK</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            placeholder="Date of birth(dd/mm/yyyy)"
            name="dob"
            required
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-2 text-white text-sm">
            {sending}
          </button>
        </form>
      </div>

      {/* Australia */}
      <div className="australia-bg flex items-end px-4 h-[550px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[350px] w-full"
        >
          <p className="font-bold text-3xl text-black mt-2">Australia</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="Australia" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="Australia">Australia</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            placeholder="Date of birth(dd/mm/yyyy)"
            name="dob"
            required
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-2 text-white text-sm">
            {sending}
          </button>
        </form>
      </div>
    </>
  );
}

function FitvfhForms({sendEmail, selectedPackage, sending, form}) {
  return (
    <>
      {/* Canada */}
      <div className="canada-bg flex items-end px-4 h-[550px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[350px] w-full"
        >
          <p className="font-bold text-3xl text-black mt-2">Canada</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="Canada" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="Canada">Canada</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            placeholder="Date of birth(dd/mm/yyyy)"
            name="dob"
            required
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-2 text-white text-sm">
            {sending}
          </button>
        </form>
      </div>

      {/* USA */}
      <div className="usa-bg flex items-end px-4 h-[550px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[350px] w-full"
        >
          <p className="font-bold text-3xl text-black mt-2">USA</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="USA" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="USA">USA</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            placeholder="Date of birth(dd/mm/yyyy)"
            name="dob"
            required
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-2 text-white text-sm">
            {sending}
          </button>
        </form>
      </div>

      {/* uk */}
      <div className="uk-bg flex items-end px-4 h-[550px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[350px] w-full"
        >
          <p className="font-bold text-3xl text-black mt-2">UK</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="UK" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="UK">UK</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            placeholder="Date of birth(dd/mm/yyyy)"
            name="dob"
            required
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-2 text-white text-sm">
            {sending}
          </button>
        </form>
      </div>

      {/* Australia */}
      <div className="australia-bg flex items-end px-4 h-[550px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[350px] w-full"
        >
          <p className="font-bold text-3xl text-black mt-2">Australia</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="Australia" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="Australia">Australia</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            placeholder="Date of birth(dd/mm/yyyy)"
            name="dob"
            required
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-2 text-white text-sm">
            {sending}
          </button>
        </form>
      </div>
    </>
  );
}

function IsaForms({sendEmail, selectedPackage, sending, form}) {
  return (
    <>
      {/* Canada */}
      <div className="canada-bg flex items-end px-4 h-[550px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[350px] w-full"
        >
          <p className="font-bold text-3xl text-black mt-2">Canada</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="Canada" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="Canada">Canada</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            placeholder="Date of birth(dd/mm/yyyy)"
            name="dob"
            required
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-2 text-white text-sm">
            {sending}
          </button>
        </form>
      </div>

      {/* USA */}
      <div className="usa-bg flex items-end px-4 h-[550px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[350px] w-full"
        >
          <p className="font-bold text-3xl text-black mt-2">USA</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="USA" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="USA">USA</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            placeholder="Date of birth(dd/mm/yyyy)"
            name="dob"
            required
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-2 text-white text-sm">
            {sending}
          </button>
        </form>
      </div>

      {/* uk */}
      <div className="uk-bg flex items-end px-4 h-[550px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[350px] w-full"
        >
          <p className="font-bold text-3xl text-black mt-2">UK</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="UK" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="UK">UK</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            placeholder="Date of birth(dd/mm/yyyy)"
            name="dob"
            required
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-2 text-white text-sm">
            {sending}
          </button>
        </form>
      </div>

      {/* Australia */}
      <div className="australia-bg flex items-end px-4 h-[550px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[350px] w-full"
        >
          <p className="font-bold text-3xl text-black mt-2">Australia</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="Australia" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="Australia">Australia</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            placeholder="Date of birth(dd/mm/yyyy)"
            name="dob"
            required
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-2 text-white text-sm">
            {sending}
          </button>
        </form>
      </div>
    </>
  );
}

function IrhForms({sendEmail, selectedPackage, sending, form}) {
  return (
    <>
      {/* Canada */}
      <div className="canada-bg flex items-end px-4 h-[550px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[350px] w-full"
        >
          <p className="font-bold text-3xl text-black mt-2">Canada</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="Canada" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="Canada">Canada</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            placeholder="Date of birth(dd/mm/yyyy)"
            name="dob"
            required
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-2 text-white text-sm">
            {sending}
          </button>
        </form>
      </div>

      {/* USA */}
      <div className="usa-bg flex items-end px-4 h-[550px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[350px] w-full"
        >
          <p className="font-bold text-3xl text-black mt-2">USA</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="USA" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="USA">USA</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            placeholder="Date of birth(dd/mm/yyyy)"
            name="dob"
            required
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-2 text-white text-sm">
            {sending}
          </button>
        </form>
      </div>

      {/* uk */}
      <div className="uk-bg flex items-end px-4 h-[550px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[350px] w-full"
        >
          <p className="font-bold text-3xl text-black mt-2">UK</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="UK" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="UK">UK</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            placeholder="Date of birth(dd/mm/yyyy)"
            name="dob"
            required
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-2 text-white text-sm">
            {sending}
          </button>
        </form>
      </div>

      {/* Australia */}
      <div className="australia-bg flex items-end px-4 h-[550px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[350px] w-full"
        >
          <p className="font-bold text-3xl text-black mt-2">Australia</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="Australia" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="Australia">Australia</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            placeholder="Date of birth(dd/mm/yyyy)"
            name="dob"
            required
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-2 text-white text-sm">
            {sending}
          </button>
        </form>
      </div>
    </>
  );
}

function VvasForms({sendEmail, selectedPackage, sending, form}) {
  return (
    <>
      {/* Canada */}
      <div className="canada-bg flex items-end px-4 h-[550px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[350px] w-full"
        >
          <p className="font-bold text-3xl text-black mt-2">Canada</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="Canada" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="Canada">Canada</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            placeholder="Date of birth(dd/mm/yyyy)"
            name="dob"
            required
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-2 text-white text-sm">
            {sending}
          </button>
        </form>
      </div>

      {/* USA */}
      <div className="usa-bg flex items-end px-4 h-[550px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[350px] w-full"
        >
          <p className="font-bold text-3xl text-black mt-2">USA</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="USA" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="USA">USA</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            placeholder="Date of birth(dd/mm/yyyy)"
            name="dob"
            required
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-2 text-white text-sm">
            {sending}
          </button>
        </form>
      </div>

      {/* uk */}
      <div className="uk-bg flex items-end px-4 h-[550px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[350px] w-full"
        >
          <p className="font-bold text-3xl text-black mt-2">UK</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="UK" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="UK">UK</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            placeholder="Date of birth(dd/mm/yyyy)"
            name="dob"
            required
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-2 text-white text-sm">
            {sending}
          </button>
        </form>
      </div>

      {/* Australia */}
      <div className="australia-bg flex items-end px-4 h-[550px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[350px] w-full"
        >
          <p className="font-bold text-3xl text-black mt-2">Australia</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="Australia" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="Australia">Australia</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            placeholder="Date of birth(dd/mm/yyyy)"
            name="dob"
            required
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-2 text-white text-sm">
            {sending}
          </button>
        </form>
      </div>
    </>
  );
}

function FthbForms({sendEmail, selectedPackage, sending, form}) {
  return (
    <>
      {/* Canada */}
      <div className="canada-bg flex items-end px-4 h-[550px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[350px] w-full"
        >
          <p className="font-bold text-3xl text-black mt-2">Canada</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="Canada" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="Canada">Canada</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            placeholder="Date of birth(dd/mm/yyyy)"
            name="dob"
            required
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-2 text-white text-sm">
            {sending}
          </button>
        </form>
      </div>

      {/* USA */}
      <div className="usa-bg flex items-end px-4 h-[550px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[350px] w-full"
        >
          <p className="font-bold text-3xl text-black mt-2">USA</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="USA" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="USA">USA</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            placeholder="Date of birth(dd/mm/yyyy)"
            name="dob"
            required
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-2 text-white text-sm">
            {sending}
          </button>
        </form>
      </div>

      {/* uk */}
      <div className="uk-bg flex items-end px-4 h-[550px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[350px] w-full"
        >
          <p className="font-bold text-3xl text-black mt-2">UK</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="UK" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="UK">UK</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            placeholder="Date of birth(dd/mm/yyyy)"
            name="dob"
            required
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-2 text-white text-sm">
            {sending}
          </button>
        </form>
      </div>

      {/* Australia */}
      <div className="australia-bg flex items-end px-4 h-[550px] rounded-2xl mt-5 pb-4 w-full">
        <form
          action=""
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start justify-center gap-2 text-[#595959] bg-white rounded-3xl p-3 h-[350px] w-full"
        >
          <p className="font-bold text-3xl text-black mt-2">Australia</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="Australia" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="Australia">Australia</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            placeholder="Date of birth(dd/mm/yyyy)"
            name="dob"
            required
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 mt-2 text-white text-sm">
            {sending}
          </button>
        </form>
      </div>
    </>
  );
}

function MobileIvaForms({sendEmail, selectedPackage, form}) {
  return (
    <>
    {/* canada */}
      <div className="canada-bg flex items-center justify-center px-4 w-full sm:w-[400px] rounded-2xl mt-5 py-4">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start gap-2 text-xs bg-white text-[#595959] w-full rounded-3xl p-3 h-max"
        >
          <p className="font-bold text-2xl text-black">Canada</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="Canada" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="Canada">Canada</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="dob"
            placeholder="Date of Birth(dd/mm/yyyy)"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 text-white text-xs">
            SEND
          </button>
        </form>
      </div>

      {/* usa */}
      <div className="usa-bg flex items-center justify-center px-4 w-full sm:w-[400px] rounded-2xl mt-5 py-4">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start gap-2 text-xs bg-white text-[#595959] w-full rounded-3xl p-3 h-max"
        >
          <p className="font-bold text-2xl text-black">USA</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="USA" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="USA">USA</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="dob"
            placeholder="Date of Birth(dd/mm/yyyy)"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 text-white text-xs">
            SEND
          </button>
        </form>
      </div>
      {/* UK */}
      <div className="uk-bg flex items-center justify-center px-4 w-full sm:w-[400px] rounded-2xl mt-5 py-4">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start gap-2 text-xs bg-white text-[#595959] w-full rounded-3xl p-3 h-max"
        >
          <p className="font-bold text-2xl text-black">UK</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="UK" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="UK">UK</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="dob"
            placeholder="Date of Birth(dd/mm/yyyy)"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 text-white text-xs">
            SEND
          </button>
        </form>
      </div>

      {/* australia */}
      <div className="australia-bg flex items-center justify-center px-4 w-full sm:w-[400px] rounded-2xl mt-5 py-4">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start gap-2 text-xs bg-white text-[#595959] w-full rounded-3xl p-3 h-max"
        >
          <p className="font-bold text-2xl text-black">Australia</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="Australia" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="Australia">Australia</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="dob"
            placeholder="Date of Birth(dd/mm/yyyy)"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 text-white text-xs">
            SEND
          </button>
        </form>
      </div>
    </>
  );
}

function MobileFitvfhForms({sendEmail, selectedPackage, form}) {
  return (
    <>
      {/* canada */}
      <div className="canada-bg flex items-center justify-center px-4 w-full sm:w-[400px] rounded-2xl mt-5 py-4">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start gap-2 text-xs bg-white text-[#595959] w-full rounded-3xl p-3 h-max"
        >
          <p className="font-bold text-2xl text-black">Canada</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="Canada" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="Canada">Canada</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="dob"
            placeholder="Date of Birth(dd/mm/yyyy)"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 text-white text-xs">
            SEND
          </button>
        </form>
      </div>

      {/* usa */}
      <div className="usa-bg flex items-center justify-center px-4 w-full sm:w-[400px] rounded-2xl mt-5 py-4">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start gap-2 text-xs bg-white text-[#595959] w-full rounded-3xl p-3 h-max"
        >
          <p className="font-bold text-2xl text-black">USA</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="USA" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="USA">USA</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="dob"
            placeholder="Date of Birth(dd/mm/yyyy)"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 text-white text-xs">
            SEND
          </button>
        </form>
      </div>
      {/* UK */}
      <div className="uk-bg flex items-center justify-center px-4 w-full sm:w-[400px] rounded-2xl mt-5 py-4">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start gap-2 text-xs bg-white text-[#595959] w-full rounded-3xl p-3 h-max"
        >
          <p className="font-bold text-2xl text-black">UK</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="UK" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="UK">UK</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="dob"
            placeholder="Date of Birth(dd/mm/yyyy)"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 text-white text-xs">
            SEND
          </button>
        </form>
      </div>

      {/* australia */}
      <div className="australia-bg flex items-center justify-center px-4 w-full sm:w-[400px] rounded-2xl mt-5 py-4">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start gap-2 text-xs bg-white text-[#595959] w-full rounded-3xl p-3 h-max"
        >
          <p className="font-bold text-2xl text-black">Australia</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="Australia" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="Australia">Australia</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="dob"
            placeholder="Date of Birth(dd/mm/yyyy)"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 text-white text-xs">
            SEND
          </button>
        </form>
      </div>
    </>
  );
}

function MobileIsaForms({sendEmail, selectedPackage, form}) { 
  return (
    <>
      {/* canada */}
      <div className="canada-bg flex items-center justify-center px-4 w-full sm:w-[400px] rounded-2xl mt-5 py-4">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start gap-2 text-xs bg-white text-[#595959] w-full rounded-3xl p-3 h-max"
        >
          <p className="font-bold text-2xl text-black">Canada</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="Canada" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="Canada">Canada</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="dob"
            placeholder="Date of Birth(dd/mm/yyyy)"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 text-white text-xs">
            SEND
          </button>
        </form>
      </div>

      {/* usa */}
      <div className="usa-bg flex items-center justify-center px-4 w-full sm:w-[400px] rounded-2xl mt-5 py-4">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start gap-2 text-xs bg-white text-[#595959] w-full rounded-3xl p-3 h-max"
        >
          <p className="font-bold text-2xl text-black">USA</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="USA" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="USA">USA</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="dob"
            placeholder="Date of Birth(dd/mm/yyyy)"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 text-white text-xs">
            SEND
          </button>
        </form>
      </div>
      {/* UK */}
      <div className="uk-bg flex items-center justify-center px-4 w-full sm:w-[400px] rounded-2xl mt-5 py-4">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start gap-2 text-xs bg-white text-[#595959] w-full rounded-3xl p-3 h-max"
        >
          <p className="font-bold text-2xl text-black">UK</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="UK" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="UK">UK</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="dob"
            placeholder="Date of Birth(dd/mm/yyyy)"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 text-white text-xs">
            SEND
          </button>
        </form>
      </div>

      {/* australia */}
      <div className="australia-bg flex items-center justify-center px-4 w-full sm:w-[400px] rounded-2xl mt-5 py-4">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start gap-2 text-xs bg-white text-[#595959] w-full rounded-3xl p-3 h-max"
        >
          <p className="font-bold text-2xl text-black">Australia</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="Australia" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="Australia">Australia</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="dob"
            placeholder="Date of Birth(dd/mm/yyyy)"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 text-white text-xs">
            SEND
          </button>
        </form>
      </div>
    </>
  );
}

function MobileIrhForms({sendEmail, selectedPackage, form}) {
  return (
    <>
      {/* canada */}
      <div className="canada-bg flex items-center justify-center px-4 w-full sm:w-[400px] rounded-2xl mt-5 py-4">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start gap-2 text-xs bg-white text-[#595959] w-full rounded-3xl p-3 h-max"
        >
          <p className="font-bold text-2xl text-black">Canada</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="Canada" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="Canada">Canada</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="dob"
            placeholder="Date of Birth(dd/mm/yyyy)"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 text-white text-xs">
            SEND
          </button>
        </form>
      </div>

      {/* usa */}
      <div className="usa-bg flex items-center justify-center px-4 w-full sm:w-[400px] rounded-2xl mt-5 py-4">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start gap-2 text-xs bg-white text-[#595959] w-full rounded-3xl p-3 h-max"
        >
          <p className="font-bold text-2xl text-black">USA</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="USA" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="USA">USA</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="dob"
            placeholder="Date of Birth(dd/mm/yyyy)"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 text-white text-xs">
            SEND
          </button>
        </form>
      </div>
      {/* UK */}
      <div className="uk-bg flex items-center justify-center px-4 w-full sm:w-[400px] rounded-2xl mt-5 py-4">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start gap-2 text-xs bg-white text-[#595959] w-full rounded-3xl p-3 h-max"
        >
          <p className="font-bold text-2xl text-black">UK</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="UK" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="UK">UK</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="dob"
            placeholder="Date of Birth(dd/mm/yyyy)"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 text-white text-xs">
            SEND
          </button>
        </form>
      </div>

      {/* australia */}
      <div className="australia-bg flex items-center justify-center px-4 w-full sm:w-[400px] rounded-2xl mt-5 py-4">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start gap-2 text-xs bg-white text-[#595959] w-full rounded-3xl p-3 h-max"
        >
          <p className="font-bold text-2xl text-black">Australia</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="Australia" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="Australia">Australia</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="dob"
            placeholder="Date of Birth(dd/mm/yyyy)"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 text-white text-xs">
            SEND
          </button>
        </form>
      </div>
    </>
  );
}

function MobileVvasForms({sendEmail, selectedPackage, form}) {
  return (
    <>
      {/* canada */}
      <div className="canada-bg flex items-center justify-center px-4 w-full sm:w-[400px] rounded-2xl mt-5 py-4">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start gap-2 text-xs bg-white text-[#595959] w-full rounded-3xl p-3 h-max"
        >
          <p className="font-bold text-2xl text-black">Canada</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="Canada" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="Canada">Canada</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="dob"
            placeholder="Date of Birth(dd/mm/yyyy)"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 text-white text-xs">
            SEND
          </button>
        </form>
      </div>

      {/* usa */}
      <div className="usa-bg flex items-center justify-center px-4 w-full sm:w-[400px] rounded-2xl mt-5 py-4">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start gap-2 text-xs bg-white text-[#595959] w-full rounded-3xl p-3 h-max"
        >
          <p className="font-bold text-2xl text-black">USA</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="USA" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="USA">USA</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="dob"
            placeholder="Date of Birth(dd/mm/yyyy)"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 text-white text-xs">
            SEND
          </button>
        </form>
      </div>
      {/* UK */}
      <div className="uk-bg flex items-center justify-center px-4 w-full sm:w-[400px] rounded-2xl mt-5 py-4">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start gap-2 text-xs bg-white text-[#595959] w-full rounded-3xl p-3 h-max"
        >
          <p className="font-bold text-2xl text-black">UK</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="UK" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="UK">UK</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="dob"
            placeholder="Date of Birth(dd/mm/yyyy)"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 text-white text-xs">
            SEND
          </button>
        </form>
      </div>

      {/* australia */}
      <div className="australia-bg flex items-center justify-center px-4 w-full sm:w-[400px] rounded-2xl mt-5 py-4">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start gap-2 text-xs bg-white text-[#595959] w-full rounded-3xl p-3 h-max"
        >
          <p className="font-bold text-2xl text-black">Australia</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="Australia" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="Australia">Australia</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="dob"
            placeholder="Date of Birth(dd/mm/yyyy)"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 text-white text-xs">
            SEND
          </button>
        </form>
      </div>
    </>
  );
}

function MobileFthbForms({sendEmail, selectedPackage, form}) {
  return (
    <>
      {/* canada */}
      <div className="canada-bg flex items-center justify-center px-4 w-full sm:w-[400px] rounded-2xl mt-5 py-4">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start gap-2 text-xs bg-white text-[#595959] w-full rounded-3xl p-3 h-max"
        >
          <p className="font-bold text-2xl text-black">Canada</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="Canada" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="Canada">Canada</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="dob"
            placeholder="Date of Birth(dd/mm/yyyy)"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 text-white text-xs">
            SEND
          </button>
        </form>
      </div>

      {/* usa */}
      <div className="usa-bg flex items-center justify-center px-4 w-full sm:w-[400px] rounded-2xl mt-5 py-4">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start gap-2 text-xs bg-white text-[#595959] w-full rounded-3xl p-3 h-max"
        >
          <p className="font-bold text-2xl text-black">USA</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="USA" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="USA">USA</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="dob"
            placeholder="Date of Birth(dd/mm/yyyy)"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 text-white text-xs">
            SEND
          </button>
        </form>
      </div>
      {/* UK */}
      <div className="uk-bg flex items-center justify-center px-4 w-full sm:w-[400px] rounded-2xl mt-5 py-4">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start gap-2 text-xs bg-white text-[#595959] w-full rounded-3xl p-3 h-max"
        >
          <p className="font-bold text-2xl text-black">UK</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="UK" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="UK">UK</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="dob"
            placeholder="Date of Birth(dd/mm/yyyy)"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 text-white text-xs">
            SEND
          </button>
        </form>
      </div>

      {/* australia */}
      <div className="australia-bg flex items-center justify-center px-4 w-full sm:w-[400px] rounded-2xl mt-5 py-4">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start gap-2 text-xs bg-white text-[#595959] w-full rounded-3xl p-3 h-max"
        >
          <p className="font-bold text-2xl text-black">Australia</p>
          <div className="flex items-center invisible">
          <select name="selectedPackage" className="">
            <option value={selectedPackage}>{selectedPackage}</option>
          </select>
          <select value="Australia" onChange={(e)=>e.target.value} name="ToCountry" className="">
            <option value="Australia">Australia</option>
          </select>
          </div>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="number"
            required
            name="passportNumber"
            placeholder="Passport number"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="country"
            placeholder="Country"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 placeholder:text-xs pb-1"
          />
          <input
            type="text"
            required
            name="dob"
            placeholder="Date of Birth(dd/mm/yyyy)"
            className="packages-input-border w-full border-none bg-inherit outline-none px-1 text-xs pb-1"
          />
          <button className="self-center outline-none border-none bg-[#992288] px-6 rounded-3xl shadow py-2 text-white text-xs">
            SEND
          </button>
        </form>
      </div>
    </>
  );
}
