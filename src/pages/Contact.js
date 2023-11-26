import { toFalse } from "../redux/contactSlice";
import { useDispatch } from "react-redux";
import { IoCloseSharp } from "react-icons/io5";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const dispatch = useDispatch();
  const form = useRef()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [RFC, setRFC] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState("SEND MESSAGE");

  const sendEmail = (e) => {
    e.preventDefault();
    setTimeout(() => {
      emailjs
        .sendForm(
          "service_mpxcoag",
          "template_v8ccpu2 ",
          e.target,
          "DM5vStou4nWaUUr3r"
        )
        .then(
          (result) => {
            // console.log(result.text);
            setSending("SENDING...");
            if (result.text === "OK") {
              setTimeout(() => {
                setSending("SENT");
                setTimeout(() => {
                  setName("");
                  setNumber("");
                  setMessage("");
                  setEmail("");
                  setRFC("");
                  setSending("SEND MESSAGE");
                },2000);
              }, 2000);
            }
          },
          (error) => {
            // console.log(error.text);
            if (error) {
              setSending("ERROR");
              setTimeout(() => {
                setSending("SEND MESSAGE");
              }, 2000);
            }
          }
        );
    }, 2000);
  };

  return (
    <section className="flex flex-col text-black w-[80%] h-[80vh] mx-auto fixed z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl mt-9 bg-[#aaadac] items-center gap-6 rounded-3xl">
      <div className="flex items-center justify-between h-full w-full">
        <div className="flex flex-col items-start gap-3 bg-white h-full w-[60%] px-5 py-16 rounded-bl-3xl rounded-tl-3xl shadow-md">
          <p className="font-bold w-[70%] mx-auto text-3xl mb-16">Hello, Let's get in touch</p>
          <form ref={form} onSubmit={sendEmail} className="w-[70%] mx-auto font-semibold text-xl">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              required
              name="name"
              className="contact-input-border outline-none w-full px-1 py-2 placeholder:text-black"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
              name="email"
              className="contact-input-border outline-none my-7 w-full px-1 py-2 placeholder:text-black"
            />
            <input
              type="text"
              placeholder="Reason for contact"
              value={RFC}
              onChange={(e)=>setRFC(e.target.value)}
              required
              name="rfc"
              className="contact-input-border outline-none w-full px-1 py-2 placeholder:text-black"
            />
            <input
              type="text"
              placeholder="Phone No."
              value={number}
              onChange={(e)=>setNumber(e.target.value)}
              required
              name="number"
              className="contact-input-border outline-none my-7 w-full px-1 py-2 placeholder:text-black"
            />
            <input
              type="text"
              placeholder="Message"
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
              required
              name="message"
              className="contact-input-border outline-none w-full px-1 py-2 placeholder:text-black"
            />
            <button className="bg-[#992288] px-6 py-2 rounded-3xl mt-10 mx-auto text-white text-base">{sending}</button>
          </form>
        </div>
        <div className="flex flex-col justify-center items-center w-[40%] h-full px-8 pt-5">
          <div className="flex justify-end justify-self-start h-min w-full">
            <IoCloseSharp
              onClick={() => dispatch(toFalse())}
              className="text-black text-4xl cursor-pointer"
            />
          </div>
          <div className="w-full h-full flex flex-col gap-4 justify-center">
          <p className="text-5xl font-semibold">
            We'd love to <span className="block">Hear from you</span>
          </p>
          <p className="font-semibold text-xl">info@succeslink.com</p>
          </div>
          {/* <p>Preferred method of communication</p>
          <input
            type="checkbox"
            value="4"
            className="rounded-full block checked:text-[#992288]"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
