import React from "react";
import "./css/Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* COTE GAUCHE */}
        <div className="contact-left">
          <h1>Me contacter</h1>
          <img src="images/contact.png" width={400} />
        </div>

        {/* COTE DROIT */}
        <div className="contact-right">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Votre adresse mail"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Votre message"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
