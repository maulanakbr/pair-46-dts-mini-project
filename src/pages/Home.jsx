import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import Footer from "../components/Footer";
import requests from "../Requests";

const Home = () => {
  return (
    <>
      <Main />
      <Row rowID="1" title="Upcoming" fetchURL={requests.requestUpcoming} />
      <Row rowID="2" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowID="3" title="Trending" fetchURL={requests.requestTrending} />
      <Row rowID="4" title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row rowID="5" title="Horror" fetchURL={requests.requestHorror} />
      <Footer />
      <div className="text-gray-300 text-center m-3">
        <h6>&copy; Maulana Akbar Yudistika - 2022</h6>
      </div>
    </>
  );
};

export default Home;
