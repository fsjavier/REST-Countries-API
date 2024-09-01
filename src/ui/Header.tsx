import { useTheme } from "../context/ThemeContext";

const Header = function () {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex justify-between z-10 px-4 sm:px-10 py-5 bg-elements shadow-lg">
      <h1>Where is in the world?</h1>
      <button onClick={toggleTheme}>
        {theme === "dark" ? "light" : "dark"} mode
      </button>
    </header>
  );
};

export default Header;
