import { toFalse } from "../redux/contactSlice";
import { useDispatch } from "react-redux";

const Contact = () => {

 const dispatch = useDispatch()

  return (
    <section className="flex w-[80%] h-[80vh] mx-auto fixed z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl mt-9 bg-[#aaadac] items-center gap-6 rounded-xl">
      contact
    </section>
  );
};

export default Contact;
