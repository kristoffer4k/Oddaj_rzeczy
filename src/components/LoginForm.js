import { useForm } from "react-hook-form";

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
            onKeyUp={() => {
              trigger("email");
            }}
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
            onKeyUp={() => {
              trigger("name");
            }}
          />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>
      </form>
    </section>
  );
}

export default LoginForm;
