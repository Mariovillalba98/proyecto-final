import React from "react";
import { Home, About } from "../sections";
import Paginated from "../components/Pagination/Pagination";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getGames } from "../redux/actions/videoGame";

const MainHome = () => {
  //   const games = useSelector((state) => state.games);
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(getGames())
  //   }, []);

  
  return (
    <div>
      <Home />
      <About />
      <Paginated/>
    </div>
  );
};

export default MainHome;
