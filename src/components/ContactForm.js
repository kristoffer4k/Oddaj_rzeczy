import { useForm } from "react-hook-form";
import { useState } from "react";

function ContactForm() {
  
  const [success, setSuccess] = useState("");

  function sendToServer(data) {
    console.log(data, "in sendToServer")
     fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then(setSuccess(true))
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = data => {
    console.log(data);
    sendToServer(data);
    reset();
  };

  return (
    <section className="form-section">
      <div className="contact-form-message">
        {success === true && (
          <span className="success-message">
            Wiadomość została wysłana!<br></br>Wkrótce się skontaktujemy.
          </span>
        )}
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit(data => onSubmit(data))} className="form">
          <div className="personal-data">
            <div className="form-group name">
              <span>Wpisz swoje imię</span>
              <input
                type="text"
                className="input"
                placeholder="Krzysztof"
                {...register("name", {
                  required: "Imię jest wymagane",
                  pattern: {
                    value: /^[a-zA-Z]+$/,
                    message: "Niepoprawne imię",
                  },
                })}
                onKeyUp={() => {
                  trigger("name");
                }}
              />
              {errors.name && <p className="error">{errors.name.message}</p>}
            </div>

            <div className="form-group email">
              <span>Wpisz swój e-mail</span>
              <input
                type="text"
                className="input email-input"
                placeholder="abc@xyz.pl"
                {...register("email", {
                  required: "E-mail jest wymagany",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Niepoprawny adres e-mail",
                  },
                })}
                onKeyUp={() => {
                  trigger("email");
                }}
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>
          </div>
          <div className="form-group message">
            <span>Wpisz swoją wiadomość</span>
            <textarea
              className="input"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat."
              {...register("message", {
                required: "Wiadomość jest wymagana",
                minLength: {
                  value: 120,
                  message: "Minimalna ilość znaków wynosi 120",
                },
              })}
              onKeyUp={() => {
                trigger("message");
              }}
            ></textarea>
            {errors.message && (
              <p className="error">{errors.message.message}</p>
            )}
          </div>
          <div className="form-group submit">
            <input type="submit" className="button" value="Wyślij" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;