import React from "react";
import Todo from "./components/Todo"
import { makeStyles, createStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) =>
  createStyles({
    navHeading: {
      fontFamily: "'Lucida Console', Monaco, monospace",
      color: "white !important",
      fontSize: "165%",
    },
    myNavigationBar: {
      height: "10vh",
      position: "relative",
    },
    myMainCOntainer: {
      height: "90vh",
      width: "60vw",
      position: "relative",
      overflowY: "hidden",
    },
  })
);

function App() {
  const styleClasses = useStyles();
  return (
    <div>
      <div className={`w3-bar w3-black w3-top ${styleClasses.myNavigationBar}`}>
        <span className="w3-bar-item">
          <h3>
            <b className={`w3-cursive ${styleClasses.navHeading}`}>
              My Todo
            </b>
          </h3>
        </span>
      </div>
      <div className={`container ${styleClasses.myMainCOntainer}`}>
        <Todo />
      </div>
    </div>
  );
}

export default App;
