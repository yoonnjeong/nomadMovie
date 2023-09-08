import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  // console.log(id);

  const [loading, setLoading] = useState(true);
  const [movieDatas, setMovieDatas] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovieDatas(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <strong className="year">Year {movieDatas.year}</strong>
          <div className="fx_wrap">
            <h1 className="datail_tit">{movieDatas.title}</h1>
            <a href={movieDatas.url}>Go to Page↗</a>
          </div>
          <div className="center">
            <img src={movieDatas.large_cover_image} alt={movieDatas.title} />
            <strong className="rate">⭐{movieDatas.rating}</strong>
            <span className="time">🕐RunTime: {movieDatas.runtime}(min)</span>
          </div>
          <p>{movieDatas.description_full}</p>
          <ul>
            {movieDatas.genres.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Detail;
