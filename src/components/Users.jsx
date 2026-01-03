import { useEffect } from "react";
import { usePostStore } from "../store/postStore";

const Users = () => {
  const { posts, loading, error, fetchPost } = usePostStore();

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  if (loading) return <p>Loading....</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
      ;
    </div>
  );
};

export default Users;
