import { useState } from "react";
import Cards from "./components/Cards";
import "./style/App.css";

function App() {
  const [toggleIsActive, setToggleisActive] = useState<boolean>(false);

  const handleTheme = () => {
    setToggleisActive(!toggleIsActive);
    /* console.log(toggleIsActive) */
  };

  return (
    <>
      <div className={toggleIsActive ? "app theme-dark" : "app theme-light"}>
        <div className="container">
          <header className="header">
            <div >
              <h2>Social Media Dashboard</h2>
              <h5>Total Followers: 23,004 </h5>
            </div>
            <hr />
            <div className="theme-options">
              <h3>Dark Mode</h3>
              <div
                onClick={handleTheme}
                className={toggleIsActive ? "toggle" : "toggle active"}
              >
                <div className={toggleIsActive ? "circle" : "circle active"} />
              </div>
            </div>
          </header>
          <main>
            <Cards toggleIsActive={toggleIsActive}  />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
