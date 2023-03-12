import ProductPage from "../../pages/ProductPage/ProductPage";
import MainPage from "../../pages/MainPage";

export const routes = [
    {
        element: <ProductPage/>,
        path: 'product/:id'
    },
    {
        element: <MainPage/>,
        path: '/'
    }
]


