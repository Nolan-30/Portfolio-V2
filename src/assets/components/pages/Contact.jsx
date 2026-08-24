import React, { useRef, useState } from "react"; // #!!!!!!!!!!!!!!!! Importation des hooks useRef et useState
import emailjs from "@emailjs/browser"; // #!!!!!!!!!!!!!!!! Importation d'EmailJS
import "./css/Contact.css";

const Contact = () => {
  // #!!!!!!!!!!!!!!!! Création de la référence du formulaire et des états de chargement/message
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  // #!!!!!!!!!!!!!!!! Fonction de gestion de l'envoi de l'e-mail
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    // #!!!!!!!!!!!!!!!! Vos clés EmailJS intégrées
    const SERVICE_ID = "service_pt0wilp";
    const TEMPLATE_ID = "template_hlqgz28";
    const PUBLIC_KEY = "dJQ_EgGvhSFV0nufM";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setLoading(false);
          setStatusMessage("✅ Message envoyé avec succès !");
          formRef.current.reset(); // #!!!!!!!!!!!!!!!! Remise à zéro des champs après envoi
        },
        (error) => {
          setLoading(false);
          setStatusMessage("❌ Erreur lors de l'envoi. Réessayez.");
          console.error("Erreur EmailJS :", error.text);
        },
      );
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* COTE GAUCHE */}
        <div className="contact-left">
          <h1>Me contacter</h1>
          <img src="images/contact.png" width={400} alt="Contact" />
        </div>

        {/* COTE DROIT */}
        <div className="contact-right">
          {/* #!!!!!!!!!!!!!!!! Attachement de la ref et de l'événement onSubmit au formulaire */}
          <form ref={formRef} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <label htmlFor="user_email">Email</label>
              <input
                type="email"
                id="user_email"
                name="user_email" /* #!!!!!!!!!!!!!!!! Attribut name indispensable pour EmailJS */
                placeholder="Votre adresse mail"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message" /* #!!!!!!!!!!!!!!!! Attribut name indispensable pour EmailJS */
                rows="5"
                placeholder="Votre message"
                required
              ></textarea>
            </div>

            {/* #!!!!!!!!!!!!!!!! Gestion dynamique de l'état du bouton */}
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Envoi..." : "Envoyer"}
            </button>

            {/* #!!!!!!!!!!!!!!!! Message de confirmation ou d'erreur */}
            {statusMessage && (
              <p
                style={{
                  marginTop: "1rem",
                  fontSize: "0.9rem",
                  color: statusMessage.includes("✅") ? "#4ade80" : "#f87171",
                }}
              >
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
