import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import route from "./components/Routes/Routes";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <section className="lg:max-w-[1366px] mx-auto">
        <RouterProvider router={route}>

        </RouterProvider>
        <ToastContainer />
      </section>
    </>
  );
}

export default App;
