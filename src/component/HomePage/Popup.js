import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlineMail, AiOutlineUser, AiOutlineMessage } from "react-icons/ai";
import { BiLoaderCircle } from "react-icons/bi";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ContactUsPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShowPopup(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");

    emailjs
      .send(
        "service_hbzevvo",
        "template_bvynfqg",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "SqT44vVqpwTb018cW"
      )
      .then(
        () => {
          setLoading(false);
          setSuccessMessage("Your message has been sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setLoading(false);
          setSuccessMessage("An error occurred. Please try again.");
        }
      );
  };

  return (
    <>
      {showPopup && (
        <div className="popup-overlay position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center">
          <div
            className="popup-content p-5 rounded-4 shadow-lg position-relative"
            style={{
              maxWidth: "500px",
              width: "100%",
              background: "linear-gradient(135deg, #d9e4ff, #f1f9ff)",
            }}
          >
            <button
              className="btn-close position-absolute top-0 end-0 m-3"
              onClick={() => setShowPopup(false)}
            ></button>

            <h2 className="text-primary fw-bold text-center mb-3">
              Your Vision, Our Code & Turning Ideas into Reality
            </h2>

            <p className="text-muted text-center mb-4">
              Let’s work together to bring your ideas to life. Contact us below.
            </p>

            {successMessage && (
              <p
                className={`text-center ${
                  successMessage.includes("successfully")
                    ? "text-success"
                    : "text-danger"
                } fw-bold mb-3`}
              >
                {successMessage}
              </p>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3 input-group">
                <span className="input-group-text bg-light">
                  <AiOutlineUser className="text-primary" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3 input-group">
                <span className="input-group-text bg-light">
                  <AiOutlineMail className="text-primary" />
                </span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3 input-group">
                <span className="input-group-text bg-light">
                  <AiOutlineMessage className="text-primary" />
                </span>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 mt-3"
                style={{
                  backgroundColor: "#3a6fd0",
                  border: "none",
                  padding: "10px 15px",
                }}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <BiLoaderCircle className="me-2 spinner-border-sm" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>

            <p className="text-center mt-3">
              Visit our{" "}
              <a href="/contact" className="text-primary text-decoration-underline">
                Contact Page
              </a>{" "}
              for more options.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
