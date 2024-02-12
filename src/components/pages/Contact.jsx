import React, { useRef } from "react";
import { Heading } from "../common/Heading";
import { contact } from "../data/dummydata";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pnjdamr",
        "template_a3rsb6d",
        form.current,
        "b5NITZj929XVO8TOx"
      )
      .then(
        function (response) {
          console.log("Sent successfuly:", response);

          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="contact">
        <div className="container">
          <Heading title="Keep In Touch" />
          <div className="content flexsb">
            <div className="right">
              <form ref={form} onSubmit={sendEmail}>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Name"
                    name="from_name"
                    data-aos="flip-left"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    name="from_mail"
                    data-aos="flip-right"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  data-aos="flip-up"
                />
                <textarea
                  type="text"
                  placeholder="Message..."
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                  data-aos="flip-down"
                ></textarea>
                <button type="submit" value="Send" data-aos="zoom-in-up">
                  Submit
                </button>
              </form>
            </div>
            <div className="left">
              {contact.map((item) => (
                <div className="box" data-aos="zoom-in">
                  <i>{item.icon}</i>
                  <p>{item.text1}</p>
                  <p>{item.text2}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
