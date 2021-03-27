import "./App.css";
import Row from "./Row";
import Banner from "./Banner";
import request from "./requests";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      ></Row>
      <Row title="TRENDING NOW" fetchUrl={request.fetchTrending}></Row>
      <Row title="TOP RATED" fetchUrl={request.fetchTopRated}></Row>
      <Row title="ACTION MOVIES" fetchUrl={request.fetchActionMovies}></Row>
      <Row title="HORROR MOVIES" fetchUrl={request.fetchHorrorMovies}></Row>
      <Row title="DOCUMENTARIES" fetchUrl={request.fetchDocumentaries}></Row>
      <Row title="ROMANCE MOVIES" fetchUrl={request.fetchRomanceMovies}></Row>
      <Row title="COMEDY MOVIES" fetchUrl={request.fetchComedyMovies}></Row>
    </div>
  );
}

export default App;
