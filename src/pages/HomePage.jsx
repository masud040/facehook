import Header from "../components/shared/Header";
import useAuth from "../hooks/useAuth";

export default function HomePage() {
  const { auth, setAuth } = useAuth();
  console.log(auth);
  return (
    <div>
      <Header />
    </div>
  );
}
