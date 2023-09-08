import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovie] = useState([]);
  // const getMovies = async () => {
  //   const res = await fetch(
  //     `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
  //   );
  //   const json = await res.json();

  //   setMovie(json.data.movies);
  //   setLoading(false);
  // }; // 아래외 같은 방법이다

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovie(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);

  return (
    <div className={styles.container}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              year={movie.year}
              mediumCoverImage={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
              id={movie.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
