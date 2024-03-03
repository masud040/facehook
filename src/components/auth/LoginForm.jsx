import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Field from "../shared/Field";
export default function LoginForm() {
  const { setAuth } = useAuth();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm();

  const navigate = useNavigate();
  async function submitForm(formData) {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_SERVER_URL}/auth/login`,
        formData
      );

      if (response.status === 200) {
        const { token, user } = response.data;
        const authToken = token.token;
        const refreshToken = token.refreshToken;
        setAuth({ user, authToken, refreshToken });
        navigate("/");
      }
    } catch (error) {
      setError("root.random", {
        type: "random",
        message: `This User ${formData.email} is not found.`,
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
    >
      <Field label="Email" error={errors.email}>
        <input
          {...register("email", {
            required: "Email ID  required.",
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
            minLength: {
              value: 6,
              message: "Your password must be at least 8 characters",
            },
          })}
          className={`auth-input ${errors.password && "border-red-500"}`}
          type="password"
          name="password"
          id="password"
        />
      </Field>
      {errors.root?.random?.message && (
        <p className="block pb-2 text-sm text-center text-red-500">
          {errors?.root?.random?.message}
        </p>
      )}
      <Field>
        <button
          className="font-bold transition-all auth-input bg-lwsGreen text-deepDark hover:opacity-90"
          type="submit"
        >
          Login
        </button>
      </Field>
    </form>
  );
}
