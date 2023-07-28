import { useEffect } from "react";

const Header = () => {
  const getThemePreference = () => {
    return localStorage.getItem("themePreference") || "light-theme";
  };

  const setThemePreference = (theme) => {
    localStorage.setItem("themePreference", theme);
  };

  const changeTheme = () => {
    const currentTheme = getThemePreference();
    const newTheme =
      currentTheme === "light-theme" ? "dark-theme" : "light-theme";
    setThemePreference(newTheme);

    applyTheme(newTheme);
  };

  const applyTheme = (theme) => {
    const header = document.querySelector(".header");
    const input = document.querySelector("input");
    const select = document.querySelector("select");
    const info = document.querySelectorAll(".info");
    const uls = document.querySelectorAll("ul");

    info.forEach((inf) => {
      inf.classList.toggle("light-theme", theme === "light-theme");
    });
    header.classList.toggle("light-theme", theme === "light-theme");
    uls.forEach((ul) => {
      ul.classList.toggle("light-theme", theme === "light-theme");
    });
    document.body.classList.toggle("light-theme", theme === "light-theme");
    input.classList.toggle("light-theme", theme === "light-theme");
    select.classList.toggle("light-theme", theme === "light-theme");
  };

  useEffect(() => {
    const currentTheme = getThemePreference();
    applyTheme(currentTheme);
  }, []);

  return (
    <>
      <header className="header">
        <div>
          <h1>Where in the world?</h1>
        </div>
        <div>
          <i className="fa-solid fa-moon" onClick={() => changeTheme()}></i>{" "}
          Dark Mode
        </div>
      </header>
    </>
  );
};

export default Header;
