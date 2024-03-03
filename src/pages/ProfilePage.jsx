import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";

export default function ProfilePage() {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { auth } = useAuth();
  const { api } = useAxios();
  console.log(user, posts);
  useEffect(() => {
    setLoading(true);
    async function getUserProfile() {
      try {
        const { data } = await api.get(`/profile/${auth.user?.id}`);
        setUser(data.user);
        setPosts(data.posts);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getUserProfile();
  }, []);

  return <div>Profile</div>;
}
