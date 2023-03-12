import ProductPage from "../../pages/ProductPage";
import MainPage from "../../pages/MainPage";

export const routes = [
    {
        element: <ProductPage/>,
        path: 'product'
    },
    {
        element: <MainPage/>,
        path: '/'
    }
]


