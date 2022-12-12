import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home/Home";
import Tweet from "./pages/tweet/Tweet";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./common/header/Header";
import UpdateData from "./component/componentTweet/UpdateData/UpdateData";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweet" element={<Tweet />} />
        <Route path={`/users/:id`} element={<UpdateData />} />
      </Routes>
    </div>
  );
}

export default App;
