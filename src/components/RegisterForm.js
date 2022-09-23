import { useRef } from "react";
import { useForm } from "react-hook-form";
import { HashLink as Link } from "react-router-hash-link";

function LoginForm() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <section className="form-section">
      <div className="form-upper2">
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div className="form-group email">
            <span>Email</span>
            <input
              type="text"
              className="input email-input"
              {...register("email", {
                required: "Podany email jest nieprawidłowy!",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Podany email jest nieprawidłowy!",
                },
              })}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div className="form-group password">
            <span>Hasło</span>
            <input
              type="password"
              className="input"
              {...register("password", {
                required: "Podane hasło jest za krótkie!",
                minLength: {
                  value: 6,
                  message: "Podane hasło jest za krótkie!",
                },
              })}
            />
            {errors.password && <p className="error">{errors.password.message}</p>}
          </div>

          <div className="form-group password2">
            <span>Powtórz hasło</span>
            <input
              type="password"
              className="input"
              {...register("password2", {
                required: "Hasło nie jest takie samo!",
                validate: value =>
                value === password.current || "Hasło nie jest takie samo!"
              })}
            />
            {errors.password2 && <p className="error">{errors.password2.message}</p>}
          </div>

        </form>
      </div>
      <div className="buttons">
        <div className="buttons-inner">
        <Link to="/login">Zaloguj się</Link>
        <button
            type="button"
            className="validation-button"
            onClick={async () => {
              await trigger("email");
              await trigger("password");
              await trigger("password2");
            }}
          >
            Załóż konto
          </button>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
