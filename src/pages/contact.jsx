import React, { useState } from "react";
import Navbar from "/src/components/navbar.jsx";
import Footer from "/src/components/footer.jsx";
import telephone from "/src/assets/telephone.png";
import mail from "/src/assets/mail.png";
import location from "/src/assets/location.png";
import clock from "/src/assets/clock.png";
import "/src/styles/Contact.css";

export default function Contact() {
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleFirstName = (e) => setFname(e.target.value);
  const handleLastName = (e) => setLname(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!Fname) newErrors.Fname = "First name is required";
    else if (!/^[a-zA-Z]+$/.test(Fname))
      newErrors.Fname = "First name is invalid";

    if (!Lname) newErrors.Lname = "Last name is required";
    else if (!/^[a-zA-Z]+$/.test(Lname))
      newErrors.Lname = "Last name is invalid";

    if (!email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Email is invalid";

    if (!phone) newErrors.phone = "Phone number is required";
    else if (!/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(phone))
      newErrors.phone = "Phone number is invalid";

    setErrors(newErrors);

    // If no errors, submit
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted!", { Fname, Lname, email, phone, message });
      setFname("");
      setLname("");
      setEmail("");
      setPhone("");
      setMessage("");
      setErrors({});
    }
  };

  return (
    <div>
      <Navbar />
      <main className="main-content">
        <section className="left-section">
          <div className="contact-info">
            <h1>Contact Information</h1>
            <p>If you have any questions, feel free to get in touch with us.</p>
          </div>

          <div className="contact-items">
            <div className="item">
              <img className="icon" src={telephone} alt="Telephone" />
              <span>702 773 8543</span>
            </div>

            <div className="item">
              <img className="icon" src={mail} alt="Mail" />
              <span>assistant@horizonride.org</span>
            </div>

            <div className="item">
              <img className="icon" src={location} alt="Location" />
              <span>Charlotte, NC 28202, US</span>
            </div>
          </div>

          <div className="contact-hours">
            <p>Monday - Friday</p>

            <div className="item">
              <img className="icon" src={clock} alt="Clock" />
              <span>9:00AM - 6:00PM</span>
            </div>
          </div>
        </section>

        <section className="right-section">
          <form onSubmit={handleSubmit}>
            <div className="name-row">
              <div className="name-field">
                <label htmlFor="fname">First name</label>
                <input
                  type="text"
                  name="fname"
                  placeholder="John"
                  value={Fname}
                  onChange={handleFirstName}
                />
                {errors.Fname && <p className="error">{errors.Fname}</p>}
              </div>

              <div className="name-field">
                <label htmlFor="lname">Last name</label>
                <input
                  type="text"
                  name="lname"
                  placeholder="Doe"
                  value={Lname}
                  onChange={handleLastName}
                />
                {errors.Lname && <p className="error">{errors.Lname}</p>}
              </div>
            </div>

            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="johndoe@gmail.com"
              value={email}
              onChange={handleEmail}
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <label htmlFor="phone">Phone number</label>
            <input
              type="text"
              name="phone"
              placeholder="555-000-1234"
              value={phone}
              onChange={handlePhone}
            />
            {errors.phone && <p className="error">{errors.phone}</p>}

            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              placeholder="Additional Info (optional)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button type="submit" className="submit-button">
              Send message
            </button>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}
