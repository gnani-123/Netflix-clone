import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Row from "./components/Row";
import { telugu2018, trending, tvShows } from "./data";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [selected, setSelected] = useState(null);
  const [myList, setMyList] = useState([]);

  const inList = (m) => myList.some((x) => x.id === m.id);
  const toggleList = (m) =>
    setMyList(inList(m) ? myList.filter((x) => x.id !== m.id) : [...myList, m]);

  // Rows shown on each page
  const pages = {
    home: [
      { title: "Telugu Movies (2018)", movies: telugu2018 },
      { title: "Trending Now", movies: trending },
      { title: "TV Shows", movies: tvShows },
    ],
    movies: [
      { title: "Telugu Movies (2018)", movies: telugu2018 },
      { title: "Trending Movies", movies: trending },
    ],
    tv: [{ title: "TV Shows", movies: tvShows }],
    mylist: [{ title: "My List", movies: myList }],
  };

  return (
    <div className="app">
      <Navbar page={page} setPage={setPage} />

      {page === "home" ? <Banner /> : <div className="spacer" />}

      {page === "mylist" && myList.length === 0 && (
        <p className="empty">Your list is empty. Open a movie and click "+ My List".</p>
      )}

      {pages[page]
        .filter((row) => row.movies.length > 0)
        .map((row) => (
          <Row key={row.title} title={row.title} movies={row.movies} onSelect={setSelected} />
        ))}

      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <img src={selected.img} alt={selected.title} />
            <div className="modal-info">
              <h2>{selected.title}</h2>
              <p className="card-year">Released: {selected.year}</p>
              <p>{selected.desc}</p>
              <button className="btn play">▶ Play</button>
              <button className="btn" onClick={() => toggleList(selected)}>
                {inList(selected) ? "✓ In My List" : "+ My List"}
              </button>
              <button className="btn" onClick={() => setSelected(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;