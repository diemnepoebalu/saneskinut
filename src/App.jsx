import {Header} from "./components/Header/Header";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AppRoutes from "./routes/UI/AppRoutes";
import Footer from "./components/Footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <AppRoutes/>
            <Footer/>
        </div>
    );
}

export default App;
