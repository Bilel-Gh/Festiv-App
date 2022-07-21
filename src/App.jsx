import "./App.scss"
import Home from "./pages/home/Home";
import NavBar from "./components/navbar/NavBar";
import Profile from "./pages/Profile/Profile";
import Auth from "./pages/Auth/Auth";


function App() {
  return (
    <div className="App">
      <div>
        {/* <NavBar/>
        <Home/> */}
        <Profile/>
      </div>
        {/* <Auth/> */}
    </div>
  );
}

export default App;
