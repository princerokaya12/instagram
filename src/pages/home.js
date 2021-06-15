import "../styless/App.scss";
import Navigation from "../components/Navigation";
import Cards from "../components/Cards";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <div className="container">
          <Cards />
          <Sidebar />
        </div>
      </main>
    </div>
  );
}

export default Home;
