import {
    createBrowserRouter,
    type RouteObject,
    RouterProvider
} from "react-router";

import {PostPage} from "./PostPage.tsx";
import {App} from "./App.tsx";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <App />
    },
    {
        path: "/post/:id",
        element: <PostPage />
    }
]

const router = createBrowserRouter(routes);

export function Routing() {
    return <RouterProvider router={router} />;
}