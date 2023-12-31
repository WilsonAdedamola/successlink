import { toFalse } from "../redux/contactSlice";
import { useDispatch } from "react-redux";
import { IoCloseSharp } from "react-icons/io5";
import { useRef, useState, useLayoutEffect } from "react";
import emailjs from "@emailjs/browser";
import gsap from "gsap";

const Contact = () => {
  const dispatch = useDispatch();
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [RFC, setRFC] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState("SEND MESSAGE");

  const sendEmail = (e) => {
    e.preventDefault();
    setSending("SENDING...");
    setTimeout(() => {
      emailjs
        .sendForm(
          "service_3aqqugj",
          "template_mjska54",
          e.target,
          "CVJS1Z4Q3Zoo6wADN"
        )
        .then(
          (result) => {
            // console.log(result.text);
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
                }, 2000);
              }, 2000);
            }
          },
          (error) => {
            // console.log(error.text);
            if (error) {
              setSending("ERROR");
              setTimeout(() => {
                setName("");
                setNumber("");
                setMessage("");
                setEmail("");
                setRFC("");
                setSending("SEND MESSAGE");
              }, 2000);
            }
          }
        );
    }, 2000);
  };

   // gsap animations
   const comp = useRef(null);
  
   useLayoutEffect(() => {
     let ctx = gsap.context(() => {
       const tl = gsap.timeline();
       tl.from("#input", {
         y: "-50px",
         duration: .7,
         opacity: 0,
         stagger: .2
       }).from("#contact", {
        x: "-100%",
        duration: 1,
        opacity: 0
      })
     }, comp);
 
 
     return () => ctx.revert();
   }, []);

  return (
    <section ref={comp} className="flex flex-col text-black w-[90%] lg:w-[80%] h-[80vh] mx-auto fixed z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl mt-9 bg-[#aaadac] items-center gap-6 rounded-3xl">
      <div className="flex items-center justify-between h-full w-full">
        <div className="flex flex-col items-start justify-center gap-3 bg-white h-full w-full md:w-[60%] p-5 md:py-16 rounded-3xl md:rounded-tr-none md:rounded-br-none md:rounded-bl-3xl md:rounded-tl-3xl shadow-md">
          <div className="flex justify-end justify-self-start h-min w-full md:hidden">
            <IoCloseSharp
              onClick={() => dispatch(toFalse())}
              className="text-black text-2xl cursor-pointer"
            />
          </div>
          <p className="font-semibold md:font-bold w-[70%] md:mx-auto text-2xl xl:text-3xl mb-7 md:mb-10 xl:mb-16">
            Hello, Let's get in touch
          </p>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full md:w-[70%] mx-auto font-semibold md:text-lg xl:text-xl"
          >
            <input
            id="input"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              name="name"
              className="contact-input-border outline-none w-full px-1 py-2 placeholder:text-black"
            />
            <input
            id="input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              name="email"
              className="contact-input-border outline-none my-4 w-full px-1 py-2 placeholder:text-black"
            />
            <input
            id="input"
              type="text"
              placeholder="Reason for contact"
              value={RFC}
              onChange={(e) => setRFC(e.target.value)}
              required
              name="rfc"
              className="contact-input-border outline-none w-full px-1 py-2 placeholder:text-black"
            />
            <input
            id="input"
              type="text"
              placeholder="Phone No."
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
              name="number"
              className="contact-input-border outline-none my-4 w-full px-1 py-2 placeholder:text-black"
            />
            <input
            id="input"
              type="text"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              name="message"
              className="contact-input-border outline-none w-full px-1 py-2 placeholder:text-black"
            />
            <button id="input" className="bg-[#992288] px-4 py-2 md:px-6 rounded-3xl mt-5 md:mt-7 xl:mt-10 mx-auto text-white text-xs xl:text-base">
              {sending}
            </button>
          </form>
        </div>
        <div className="hidden md:flex flex-col overflow-hidden justify-center items-center w-[40%] h-full px-8 pt-5">
          <div className="flex justify-end justify-self-start h-min w-full">
            <IoCloseSharp
              onClick={() => dispatch(toFalse())}
              className="text-black md:text-3xl xl:text-4xl cursor-pointer"
            />
          </div>
          <div id="contact" className="w-full h-full flex flex-col gap-4 justify-center">
            <p className="text-xl font-semibold md:text-2xl xl:text-5xl">
              We'd love to <span className="block">Hear from you</span>
            </p>
            <p className="font-semibold text-base md:text-lg xl:text-xl">
              contact@successlinkhub.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
