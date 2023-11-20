import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);
function App() {
  return (
    <div className="text-white max-w-[2000px] mx-auto">
      <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />
      },
    ],
  },
]);

export default App;
