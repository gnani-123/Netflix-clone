import { useState, useEffect } from "react";

function Navbar({ page, setPage }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setDark(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = [
    { key: "home", label: "Home" },
    { key: "tv", label: "TV Shows" },
    { key: "movies", label: "Movies" },
    { key: "mylist", label: "My List" },
  ];

  return (
    <nav className={`navbar ${dark ? "dark" : ""}`}>
      <h1 className="logo" onClick={() => setPage("home")}>NETFLIX</h1>
      <ul>
        {items.map((item) => (
          <li
            key={item.key}
            className={page === item.key ? "active" : ""}
            onClick={() => setPage(item.key)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;