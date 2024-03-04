import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Field from "../shared/Field";

const RegistrationForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm();
  const navigate = useNavigate();
  async function submitForm(formData) {
    try {
      if (formData?.password.length < 8) {
        throw new Error("Password must be at least 8 characters.");
      }

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_SERVER_URL}/auth/register`,
        formData
      );
      if (response.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      setError("root.random", {
        type: "random",
        message: error.message,
      });
    }
  }
  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="border-b border-[#3F3F3F] pb-10 lg:pb-[30px]"
    >
      <Field label="First Name" error={errors.firstName}>
        <input
          {...register("firstName", {
            required: "First Name is required.",
          })}
          className={`auth-input ${errors.firstName && "border-red-500"}`}
          type="text"
          name="firstName"
          id="firstName"
        />
      </Field>
      <Field label="Last Name" error={errors.lastName}>
        <input
          {...register("lastName", {
            required: "Last Name is required.",
          })}
          className={`auth-input ${errors.lastName && "border-red-500"}`}
          type="text"
          name="lastName"
          id="lastName"
        />
      </Field>
      <Field label="Email" error={errors.email}>
        <input
          {...register("email", {
            required: "Email ID required.",
          })}
          className={`auth-input ${errors.email && "border-red-500"}`}
          type="email"
          name="email"
          id="email"
        />
      </Field>
      <Field label="Password" error={errors.password}>
        <input
          {...register("password", {
            required: "Password is required.",
          })}
          className={`auth-input ${errors.password && "border-red-500"}`}
          type="password"
          name="password"
          id="password"
        />
      </Field>

      {errors?.root?.random?.message && (
        <p className="block pb-2 text-sm text-center text-red-500">
          {errors?.root?.random?.message}
        </p>
      )}
      <button
        className="font-bold transition-all auth-input bg-lwsGreen text-deepDark hover:opacity-90"
        type="submit"
      >
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
