"use client";
import { useState } from "react";
import { contactItems } from "@/data/contact";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // to hold success or error message

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send data to the backend (Google Apps Script or custom endpoint)
    try {
      const response = await fetch("/api/submitContactForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.result === "success") {
        setStatus("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setStatus("There was an error sending your message.");
      }
    } catch (error) {
      setStatus("There was an error sending your message.");
    }
  };

  return (
    <div className="container">
      <div className="row mb-90 mb-sm-50">
        <div className="col-lg-5 col-xl-4 mb-md-90 mb-sm-50 wow fadeInUp">
          <h4 className="section-title-strong mb-40">
            Get in Touch with <span className="font-alt">SquareCom IT Solutions</span>
          </h4>
          <p className="mb-0">
            Need reliable IT support? Whether it’s development, networking, or troubleshooting, SquareCom IT Solutions has the expertise you need.
          </p>
        </div>
        <div className="col-lg-7 offset-xl-1">
          <div className="round overflow-hidden">
            <Image
              width={1080}
              height={516}
              src="/assets/images/demo-strong/gettouch.png"
              alt="Image Description"
              className="wow scaleOutIn"
              data-wow-offset={110}
            />
          </div>
        </div>
      </div>
      <div className="row wow fadeInUp" data-wow-delay="0.27s">
        {/* Contact Info */}
        <div className="col-lg-5 col-xl-4 mb-md-90 mb-sm-50">
          <div className="contact-2">
            {/* Contact Info Item */}
            {contactItems.map((elm, i) => (
              <div key={i} className="contact-2-item">
                <div className="contact-2-icon">
                  <i className={elm.iconClass} />
                </div>
                <div className="contat-2-intro">
                  <h4 className="contact-2-title">
                    {elm.link.text.split(" ")[0]}{" "}
                    <span className="font-alt">
                      {elm.link.text.split(" ")[1]}
                    </span>
                  </h4>
                  <div className="contact-2-text">
                    <a href={elm.link.url}>{elm.link.text}</a>
                  </div>
                </div>
              </div>
            ))}
            {/* End Contact Info Item */}
          </div>
        </div>
        {/* End Contact Info */}
        {/* Contact Form */}
        <div className="col-lg-7 offset-xl-1">
          <form
            onSubmit={handleSubmit}
            className="form contact-form"
            id="contact_form"
          >
            <div className="row">
              <div className="col-md-6">
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="input-lg round form-control"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  />
                </div>
              </div>
              <div className="col-md-6">
                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="input-lg round form-control"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  />
                </div>
              </div>
            </div>
            {/* Message */}
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                className="input-lg round form-control"
                style={{ height: 130 }}
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="row">
              <div className="col-sm-6">
                {/* Inform Tip */}
                <div className="form-tip pt-20 pt-sm-0">
                  <i className="icon-info size-16" />
                  All the fields are required. By sending the form you agree to
                  the <a href="terms&condition">Terms &amp; Conditions</a> and{" "}
                  <a href="privacypolicy">Privacy Policy</a>.
                </div>
              </div>
              <div className="col-sm-6">
                {/* Send Button */}
                <div className="text-end pt-20">
                  <button
                    type="submit"
                    id="submit_btn"
                    className="submit_btn btn btn-mod btn-white btn-large btn-round btn-hover-anim align-middle"
                  >
                    <span> Send Message </span>
                  </button>
                </div>
              </div>
            </div>
            <div
              id="result"
              role="region"
              aria-live="polite"
              aria-atomic="true"
            >
              {status && <p>{status}</p>}
            </div>
          </form>
        </div>
        {/* End Contact Form */}
      </div>
    </div>
  );
}
