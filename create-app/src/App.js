import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./Detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

// react-router-dom
// npm i react-router-dom@5.3.0
// https://v5.reactrouter.com/web/guides/quick-start

// react-router-dom 5버전 -> 버전6 바뀐 부분

// 1. Switch컴포넌트가 Routes컴포넌트로 대체되었습니다.
// Switch -> Routes

// 2. Route컴포넌트 사이에 자식 컴포넌트를 넣지 않고, element prop에 자식 컴포넌트를 할당하도록 바뀌었습니다.
// Route path="/" element={< Home / >}

// react-router-dom 6버전 문서
// https://reactrouter.com/docs/en/v6/getting-started/overview
