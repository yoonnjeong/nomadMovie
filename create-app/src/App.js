import { useEffect, useState } from "react";

function App() {
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
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
      )
    ).json();
    setMovie(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);

  return <div>{loading ? <h1>Loading</h1> : null}</div>;
}

export default App;
