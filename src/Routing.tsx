import {
    createBrowserRouter,
    type RouteObject,
    RouterProvider
} from "react-router";

import {PostPage} from "./PostPage.tsx";
import {App} from "./App.tsx";
import {CreatePost} from "./CreatePost.tsx";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <App />
    },
    {
        path: "/post/:id",
        element: <PostPage />
    },
    {
        path: "/create",
        element: <CreatePost />
    }
]

const router = createBrowserRouter(routes);

export function Routing() {
    return <RouterProvider router={router} />;
}