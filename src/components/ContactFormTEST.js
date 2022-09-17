import { useForm } from "react-hook-form";
import { useState } from "react";

function ContactForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
  // e.preventDefault();
  const data = {name, email, message}

  fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  }).then(() => {
    console.log('Wiadomość wysłana')
  })
}

  const {
    register,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <section className="form-section">
      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div className="personal-data">
            <div className="form-group name">
              <span>Wpisz swoje imię</span>
              <input
                type="text"
                // value={name}
                className="input"
                placeholder="Krzysztof"
                onChange={(e) => setName(e.target.value)}
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
                // value={email}
                className="input email-input"
                placeholder="abc@xyz.pl"
                onChange={(e) => setEmail(e.target.value)}
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
              // value={message}
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              onChange={(e) => setMessage(e.target.value)}
              {...register("message", {
                required: "Wiadomość jest wymagana",
                minLength: {
                  value: 120,
                  message: "Minimalna ilość znaków wynosi 120",
                },
                maxLength: {
                  value: 500,
                  message: "Maksymalna ilość znaków wynosi 500",
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
