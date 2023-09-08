import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./movie.module.css";

function Movie({ mediumCoverImage, year, title, summary, genres, id }) {
  const handleError = (e) => {
    //이미지를 못찾을경우 다른 엘리먼트 생성 후에 이미지가 있던 맨 앞자리에 새로운 엘리먼트 생성하기
    e.target.style.display = "none";
    const errorText = document.createElement("h4");
    errorText.textContent = "No Img";

    const parent = e.target.parentNode;
    parent.insertBefore(errorText, e.target);
  };

  return (
    <div className={styles.movie}>
      <img
        className={styles.movie__img}
        src={mediumCoverImage}
        onError={handleError}
        alt={title}
      />
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className={styles.movie__year}>{year}</h3>
        <p className={styles.text_long}>
          {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
        </p>
        <ul className={styles.movie__genres}>
          {genres && genres.map((genre, idx) => <li key={idx}>{genre}</li>)}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  mediumCoverImage: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
  id: propTypes.number.isRequired,
};

export default Movie;
