function IvaForms({ sendEmail, selectedPackage, sending, form }) {
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
            <select
              value="Canada"
              onChange={(e) => e.target.value}
              name="ToCountry"
              className="w-full"
            >
              <option value="Canada">Canada</option>
              <option value="Canada">Canada</option>
              <option value="Canada">Canada</option>
            </select>
            <div className="flex items-center invisible">
              <select name="selectedPackage" className="">
                <option value={selectedPackage}>{selectedPackage}</option>
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
              <select
                value="USA"
                onChange={(e) => e.target.value}
                name="ToCountry"
                className=""
              >
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
              <select
                value="UK"
                onChange={(e) => e.target.value}
                name="ToCountry"
                className=""
              >
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
              <select
                value="Australia"
                onChange={(e) => e.target.value}
                name="ToCountry"
                className=""
              >
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
  
  function FitvfhForms({ sendEmail, selectedPackage, sending, form }) {
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
              <select
                value="Canada"
                onChange={(e) => e.target.value}
                name="ToCountry"
                className=""
              >
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
              <select
                value="USA"
                onChange={(e) => e.target.value}
                name="ToCountry"
                className=""
              >
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
              <select
                value="UK"
                onChange={(e) => e.target.value}
                name="ToCountry"
                className=""
              >
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
              <select
                value="Australia"
                onChange={(e) => e.target.value}
                name="ToCountry"
                className=""
              >
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
  
  function IsaForms({ sendEmail, selectedPackage, sending, form }) {
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
              <select
                value="Canada"
                onChange={(e) => e.target.value}
                name="ToCountry"
                className=""
              >
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
              <select
                value="USA"
                onChange={(e) => e.target.value}
                name="ToCountry"
                className=""
              >
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
              <select
                value="UK"
                onChange={(e) => e.target.value}
                name="ToCountry"
                className=""
              >
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
              <select
                value="Australia"
                onChange={(e) => e.target.value}
                name="ToCountry"
                className=""
              >
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
  
  function IrhForms({ sendEmail, selectedPackage, sending, form }) {
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
              <select
                value="Canada"
                onChange={(e) => e.target.value}
                name="ToCountry"
                className=""
              >
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
              <select
                value="USA"
                onChange={(e) => e.target.value}
                name="ToCountry"
                className=""
              >
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
              <select
                value="UK"
                onChange={(e) => e.target.value}
                name="ToCountry"
                className=""
              >
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
              <select
                value="Australia"
                onChange={(e) => e.target.value}
                name="ToCountry"
                className=""
              >
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
  
  function VvasForms({ sendEmail, selectedPackage, sending, form }) {
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
              <select
                value="Canada"
                onChange={(e) => e.target.value}
                name="ToCountry"
                className=""
              >
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
              <select
                value="USA"
                onChange={(e) => e.target.value}
                name="ToCountry"
                className=""
              >
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
              <select
                value="UK"
                onChange={(e) => e.target.value}
                name="ToCountry"
                className=""
              >
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
              <select
                value="Australia"
                onChange={(e) => e.target.value}
                name="ToCountry"
                className=""
              >
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
  
  function FthbForms({ sendEmail, selectedPackage, sending, form }) {
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
              <select
                value="Canada"
                onChange={(e) => e.target.value}
                name="ToCountry"
                className=""
              >
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
              <select
                value="USA"
                onChange={(e) => e.target.value}
                name="ToCountry"
                className=""
              >
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
              <select
                value="UK"
                onChange={(e) => e.target.value}
                name="ToCountry"
                className=""
              >
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
              <select
                value="Australia"
                onChange={(e) => e.target.value}
                name="ToCountry"
                className=""
              >
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


  function MobileIvaForms({ sendEmail, selectedPackage, form }) {
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
              <select
                value="Canada"
                onChange={(e) => e.target.value}
                name="ToCountry"
                className=""
              >
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
              <select
                value="USA"
                onChange={(e) => e.target.value}
                name="ToCountry"
                className=""
              >
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
              <select
                value="UK"
                onChange={(e) => e.target.value}
                name="ToCountry"
                className=""
              >
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
              <select
                value="Australia"
                onChange={(e) => e.target.value}
                name="ToCountry"
                className=""
              >
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
  
  function MobileFitvfhForms({ sendEmail, selectedPackage, form }) {
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
              <select
                value="Canada"
                onChange={(e) => e.target.value}
                name="ToCountry"
                className=""
              >
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
              <select
                value="USA"
                onChange={(e) => e.target.value}
                name="ToCountry"
                className=""
              >
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
              <select
                value="UK"
                onChange={(e) => e.target.value}
                name="ToCountry"
                className=""
              >
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
              <select
                value="Australia"
                onChange={(e) => e.target.value}
                name="ToCountry"
                className=""
              >
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
  
  function MobileIsaForms({ sendEmail, selectedPackage, form }) {
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
              <select
                value="Canada"
                onChange={(e) => e.target.value}
                name="ToCountry"
                className=""
              >
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
              <select
                value="USA"
                onChange={(e) => e.target.value}
                name="ToCountry"
                className=""
              >
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
              <select
                value="UK"
                onChange={(e) => e.target.value}
                name="ToCountry"
                className=""
              >
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
              <select
                value="Australia"
                onChange={(e) => e.target.value}
                name="ToCountry"
                className=""
              >
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
  
  function MobileIrhForms({ sendEmail, selectedPackage, form }) {
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
              <select
                value="Canada"
                onChange={(e) => e.target.value}
                name="ToCountry"
                className=""
              >
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
              <select
                value="USA"
                onChange={(e) => e.target.value}
                name="ToCountry"
                className=""
              >
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
              <select
                value="UK"
                onChange={(e) => e.target.value}
                name="ToCountry"
                className=""
              >
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
              <select
                value="Australia"
                onChange={(e) => e.target.value}
                name="ToCountry"
                className=""
              >
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
  
  function MobileVvasForms({ sendEmail, selectedPackage, form }) {
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
              <select
                value="Canada"
                onChange={(e) => e.target.value}
                name="ToCountry"
                className=""
              >
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
              <select
                value="USA"
                onChange={(e) => e.target.value}
                name="ToCountry"
                className=""
              >
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
              <select
                value="UK"
                onChange={(e) => e.target.value}
                name="ToCountry"
                className=""
              >
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
              <select
                value="Australia"
                onChange={(e) => e.target.value}
                name="ToCountry"
                className=""
              >
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
  
  function MobileFthbForms({ sendEmail, selectedPackage, form }) {
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
              <select
                value="Canada"
                onChange={(e) => e.target.value}
                name="ToCountry"
                className=""
              >
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
              <select
                value="USA"
                onChange={(e) => e.target.value}
                name="ToCountry"
                className=""
              >
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
              <select
                value="UK"
                onChange={(e) => e.target.value}
                name="ToCountry"
                className=""
              >
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
              <select
                value="Australia"
                onChange={(e) => e.target.value}
                name="ToCountry"
                className=""
              >
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