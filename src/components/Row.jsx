function Row({ title, movies, onSelect }) {
  return (
    <section className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map((movie) => (
          <div key={movie.id} className="card" onClick={() => onSelect(movie)}>
            <img src={movie.img} alt={movie.title} className="poster" />
            <p className="card-title">{movie.title}</p>
            <p className="card-year">{movie.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Row;