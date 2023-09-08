import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./detail.module.css";

function Detail() {
  const { id } = useParams();
  // console.log(id);

  const [loading, setLoading] = useState(true);
  const [movieDatas, setMovieDatas] = useState([]);

  const handleError = (e) => {
    //이미지를 못찾을경우 다른 엘리먼트 생성 후에 이미지가 있던 맨 앞자리에 새로운 엘리먼트 생성하기
    e.target.style.display = "none";
    const errorText = document.createElement("p");
    errorText.classList.add("no_img");
    errorText.textContent = "No Img";
    errorText.style.cssText =
      " display: flex; justify-content: center; align-items: center; margin: 0; width: 500px; height: 750px; vertical-align: middle; background-color: rgba(0, 0, 0, .4);";

    const parent = e.target.parentNode;
    parent.insertBefore(errorText, e.target);
    parent.style.cssText =
      " display: flex; justify-content: center; align-items: center;";
  };

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
        <h1 className={styles.big_txt}>Loading...</h1>
      ) : (
        <div>
          <strong className={styles.year}>Year {movieDatas.year}</strong>
          <div className={styles.fx_wrap}>
            <h1 className={styles.datail_tit}>{movieDatas.title}</h1>
            <a href={movieDatas.url}>Go to Page↗</a>
          </div>
          <div className={styles.center}>
            <img
              src={movieDatas.large_cover_image}
              alt={movieDatas.title}
              onError={handleError}
            />
            <strong className={styles.rate}>⭐{movieDatas.rating}</strong>
            <span className={styles.time}>
              🕐RunTime: {movieDatas.runtime}(min)
            </span>
          </div>
          <p className={styles.text_sub}>{movieDatas.description_full}</p>
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
