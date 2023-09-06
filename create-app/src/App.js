import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
    )
      .then((res) => res.json())
      .then((json) => {
        setMovie(json.data.movies);
        setLoading(false);
      });
  }, []);
  console.log(movies);

  return <div>{loading ? <h1>Loading</h1> : null}</div>;
}

export default App;
