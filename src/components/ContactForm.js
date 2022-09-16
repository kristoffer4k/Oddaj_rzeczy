import { useForm } from "react-hook-form";

function ContactForm() {
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
    alert('Wiadomość wysłana poprawnie')
  };

  return (
    
    <section className="form-section">
        <div className='form'>
          <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <div className="form-group name">
                <input
                  type="text"
                  className='input'
                  placeholder='Krzysztof'
                  {...register("name", { required: "Imię jest wymagane",
                  minLength: {
                    value: 2,
                    message: "Minimalna ilość znaków wynosi 2",
                  }})}
                  onKeyUp={() => {
                    trigger("name");
                  }}
                />
                {errors.name && (
                  <p className="error">{errors.name.message}</p>
                )}
              </div>

              <div className="form-group email">
                <input
                  type="text"
                  className='input email-input'
                  placeholder='abc@xyz.pl'
                  {...register("email", { required: "E-mail jest wymagany" ,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Niepoprawny adres e-mail",
                  }})}
                  onKeyUp={() => {
                    trigger("email");
                  }}
                />
                {errors.email && (
                  <p className="error">{errors.email.message}</p>
                )}
              </div>
                
              <div className="form-group">
                <textarea
                  className='input'
                  placeholder='Your message'
                  {...register("message", { required: "Wiadomość jest wymagana",
                  minLength: {
                    value: 120,
                    message: "Minimalna ilość znaków wynosi 120",
                  },
                  maxLength: {
                    value: 500,
                    message: "Maksymalna ilość znaków wynosi 500",
                  }
                 })}
                 onKeyUp={() => {
                  trigger("message");
                }}
                ></textarea>
                {errors.message && (
                  <p className="error">{errors.message.message}</p>
                )}
              </div>
              <div className='form-group submit'>
                <input
                  type="submit"
                  className="button"
                  value="Wyślij"
                />
              </div>
            </form>
          </div>
          </div>
    </section>
  
  );
}

export default ContactForm;