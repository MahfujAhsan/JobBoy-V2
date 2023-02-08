import { RouterProvider } from "react-router-dom";
import route from "./components/Routes/Routes";

function App() {
  return (
    <>
      <section className="lg:max-w-[1366px] mx-auto">
        <RouterProvider router={route}>

        </RouterProvider>
      </section>
    </>
  );
}

export default App;
