import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import useAuth from "../hooks/useAuth";

export default function PrivateRoute() {
  const { auth } = useAuth();
  return (
    <>
      {auth.user ? (
        <main className="mx-auto max-w-[1020px] py-8">
          <div className="container">
            <Header />
            <Outlet />
          </div>
        </main>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}
