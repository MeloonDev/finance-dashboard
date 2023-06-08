import "./App.scss";
import Contents from "./areas/Contents";
import LeftSideBar from "./areas/LeftSideBar";
import RightSideBar from "./areas/RightSideBar";

function App() {
  return (
    <div className="App">
      <LeftSideBar />
      <Contents />
      <RightSideBar />
    </div>
  );
}

export default App;
