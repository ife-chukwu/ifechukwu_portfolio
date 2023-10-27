import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <div className="w-full h-auto overflow-x-hidden" id="contact">
      <div className="w-full flex justify-start mt-[5%]  mb-20 ml-20">
        <div>
          <aside className="w-full flex ">
            <h1 className="text-4xl font-medium  text-start mb-5 w-3/5 bg-gradient-to-tr from-[white] via-[rgb(211,192,132)] to-[#f7edc0] bg-clip-text text-transparent tracking-wide">
              For further information you email or contact me.
            </h1>
          </aside>

          <div className="flex w-full  items-center gap-1 text-xl font-light mb-5">
            <AiOutlineMail />
            <Link
              to="https://mail.google.com/mail/u/0/?ogbl#starred"
              className="flex gap-4  w-[50%]"
            >
              <span> Email:</span>
              <span>dopeskiez399@gmail.com</span>
            </Link>
          </div>
          <div className="gap-1 flex   w-full  text-xl font-light">
            <BsTelephone />
            <aside className="gap-4 flex w-[50%]  justify-start">
              <span>Phone:</span>
              <span>09157398241</span>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};
