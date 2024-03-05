import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import useAuth from "../hooks/useAuth";
import PostProvider from "../providers/PostProvider";
import ProfileProvider from "../providers/ProfileProvider";

export default function PrivateRoute() {
  const { auth } = useAuth();
  return (
    <>
      {auth.authToken ? (
        <PostProvider>
          <ProfileProvider>
            <Header />
            <main className="mx-auto max-w-[1020px] py-8">
              <div className="container">
                <Outlet />
              </div>
            </main>
          </ProfileProvider>
        </PostProvider>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}
