import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import App from "../App";
import PackingMaterial from "../components/PackingMaterial";
import PetProducts from "../components/PetProducts";
import BeautyItems from "../components/BeautyItems";
import WoodenItems from "../components/WoodenItems";
import CustomItems from "../components/CustomItems";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <App />
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
            }
        ]
    }
]);

export default router;
