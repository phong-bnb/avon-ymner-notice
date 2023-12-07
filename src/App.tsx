import Bottom1 from "./component/bottom/bottom";
import Header from "./component/header/header";
import Content from "./component/content/content";
import Navbar from "./component/content/navbar/navbar";
import "./index.css";
import "./App.scss"
function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__content">
        <Navbar/>

        <Content />
      </div>
      <Bottom1 />
    </div>
  );
}

export default App;
