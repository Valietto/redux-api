import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import UsersPage from "./pages/UsersPage"
import NotFound from "./pages/NotFound"
import AlbumsPage from "./pages/AlbumsPage"
import UserPage, { userLoader } from "./pages/UserPage"
import AlbumPage, { albumLoader } from "./pages/AlbumPage"
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                index: true,
                element: <UsersPage />,
            },
            {
                path: "/users/:id",
                element: <UserPage />,
                loader: userLoader,
            },
            {
                path: "/albums/:id",
                element: <AlbumPage />,
                loader: albumLoader,
            },
            {
                path: "/albums",
                element: <AlbumsPage />,
            },
            {
                path: "404",
                element: <NotFound />,
            },
            {
                path: "*",
                element: <Navigate to="/404" />,
            },
        ],
    },
])
function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    )
}

export default App
