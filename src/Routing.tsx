import {
    createBrowserRouter,
    type RouteObject,
    RouterProvider
} from "react-router";

import {PostPage} from "./PostPage.tsx";
import {Feed} from "./Feed.tsx";
import {CreatePost} from "./CreatePost.tsx";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Feed />
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