import { Header } from "./Components/Header";
import Slider from "./Components/Slider";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Zagolovok } from "./Components/MainPage";
import { Links } from "./Components/Links";


function App() {
  return (
    <div className="App">
      <Header />
      <Links />
      <div className="main_slider">
        <Slider />
      </div>
      <Zagolovok />

    </div>
  );
}

export default App;
