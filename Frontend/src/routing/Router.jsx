import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import App from "../App";
import PackingMaterial from "../components/PackingMaterial";
import PetProducts from "../components/PetProducts";
import BeautyItems from "../components/BeautyItems";
import WoodenItems from "../components/WoodenItems";
import CustomItems from "../components/CustomItems";
import ProductPage from "../components/ProductPage";
import LoginPage from "../components/LoginPage";
import CreateAccountPage from "../components/RegisterPage";
import HomePage from "../components/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <HomePage />
            },
            {
                path: "/packing-material",
                element: <PackingMaterial />
            },
            {
                path: "/pet-products",
                element: <PetProducts />
            },
            {
                path: "/beauty-items",
                element: <BeautyItems />
            },
            {
                path: "/wooden-items",
                element: <WoodenItems />
            },
            {
                path: "/custom-items",
                element: <CustomItems />
            },
            {
                path: "/product-page",
                element: <ProductPage />
            },
            {
                path: "/login",
                element: <LoginPage />
            },
            {
                path: "/register",
                element: <CreateAccountPage />
            }
        ]
    }
]);

export default router;
