function Banner() {
  return (
    <header
      className="banner"
      style={{ backgroundImage: "url(https://picsum.photos/id/1015/1600/800)" }}
    >
      <div className="banner-content">
        <h1>Featured Movie</h1>
        <div>
          <button className="btn play">▶ Play</button>
          <button className="btn">+ My List</button>
        </div>
        <p>
          Watch this amazing story unfold. Edit this text to describe your own
          featured movie.
        </p>
      </div>
    </header>
  );
}

export default Banner;