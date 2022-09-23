import { useForm } from "react-hook-form";
import { HashLink as Link } from "react-router-hash-link";

function LoginForm() {
  const {
    register,
    handleSubmit,
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
      <div className="form-upper">
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

          <div className="form-group name">
            <span>Hasło</span>
            <input
              type="text"
              className="input"
              {...register("name", {
                required: "Podane hasło jest za krótkie!",
                minLength: {
                  value: 6,
                  message: "Podane hasło jest za krótkie!",
                },
              })}
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>
        </form>
      </div>
      <div className="buttons">
        <div className="buttons-inner">
          <Link to="/register">Załóż konto</Link>
          <button
            type="button"
            className="validation-button"
            onClick={async () => {
              await trigger("email");
              await trigger("name");
            }}
          >
            Zaloguj się
          </button>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
