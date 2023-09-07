import propTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ mediumCoverImage, title, summary, genres, url }) {
  const handleError = (e) => {
    //이미지를 못찾을경우 다른 엘리먼트 생성 후에 이미지가 있던 맨 앞자리에 새로운 엘리먼트 생성하기
    e.target.style.display = "none";
    const errorText = document.createElement("h3");
    errorText.textContent = "No Img";

    const parent = e.target.parentNode;
    parent.insertBefore(errorText, e.target);
  };

  return (
    <div>
      <img src={mediumCoverImage} onError={handleError} alt={title} />
      <h2>
        <Link to="/movie">{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres && genres.map((genre, idx) => <li key={idx}>{genre}</li>)}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  mediumCoverImage: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;
