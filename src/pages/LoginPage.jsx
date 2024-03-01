import { Link } from "react-router-dom";
import AuthInustraton from "../assets/images/auth_illustration.png";
import LoginForm from "../components/auth/LoginForm";
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center min-h-screen py-8 bg-deepDark">
      <div className="max-w-[1368px] flex-1">
        <div className="container grid items-center gap-8 lg:grid-cols-2">
          <div>
            <img
              className="max-w-full mb-12 max-lg:hidden"
              src={AuthInustraton}
              alt="auth_illustration"
            />
            <div>
              <h1 className="mb-3 text-4xl font-bold lg:text-[40px]">
                Facehook
              </h1>
              <p className="max-w-[452px] text-gray-600/95 lg:text-lg">
                Create a social media app with features like, showing the post,
                post details, reactions, comments and profile.
              </p>
            </div>
          </div>

          <div className="card">
            <LoginForm />
            <div className="py-4 lg:py-6">
              <p className="text-xs text-center text-gray-600/95 lg:text-sm">
                Don’t have account?
                <Link
                  className="text-white transition-all hover:text-lwsGreen hover:underline"
                  to="/registration.html"
                >
                  Create New
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
