import ProductPage from "../../pages/ProductPage/ProductPage";
import MainPage from "../../pages/MainPage";
import ShoppingCartPage from "../../pages/ShoppingCartPage/ShoppingCartPage";

export const routes = [
    {
        element: <ProductPage/>,
        path: 'product/:id'
    },
    {
        element: <MainPage/>,
        path: '/'
    },
    {
        element: <ShoppingCartPage/>,
        path: 'cart'
    }
]


