import { useAppStore } from "../store/appstore";

const Navbar = () => {
  const user = useAppStore((state) => state.user);
  const logout = useAppStore((state) => state.logout);
  const theme = useAppStore((state) => state.theme);
  const toggleTheme = useAppStore((state) => state.toggleTheme);

  return (
    <nav>
      <span>theme:{theme}</span>
      <button onClick={toggleTheme}>{theme}</button>
      {user ? (
        <>
          <span>Hi, {user}</span>
          <button onClick={logout}> Logout</button>
        </>
      ) : (
        <span>Guest</span>
      )}
    </nav>
  );
};

export default Navbar;
