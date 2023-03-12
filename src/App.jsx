import {Header} from "./components/Header/Header";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AppRoutes from "./routes/UI/AppRoutes";


function App() {
    return (
        <div className="App">
            <Header/>
            <AppRoutes/>
        </div>
    );
}

export default App;
