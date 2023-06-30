import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Product from "./pages/Product/Product";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import "./app.scss"

//npm run develop


const Layout = () => {
  return(
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/products/:id',
        element: <Products/>
      },
      {
        path:'/product/:id',
        element: <Product/>
      },
      {
        path:'/about',
        element: <About/>
      },
      
      
    ]
  },
  {
    path:"/products/:id",
    element: <Products/>
  },
  {
    path:"/product/:id",
    element:<Product/>
  }
])

const App = () => {

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
