import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import Desktop from "./pages/Desktop";
import Desktop1 from "./pages/Desktop1";
import Desktop2 from "./pages/Desktop2";
import Desktop3 from "./pages/Desktop3";
import Desktop4 from "./pages/Desktop4";
import Desktop5 from "./pages/Desktop5";
import Desktop6 from "./pages/Desktop6";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-1":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-2":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-3":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-4":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-5":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-6":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-7":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/desktop-1" element={<Desktop />} />
      <Route path="/desktop-2" element={<Desktop1 />} />
      <Route path="/desktop-3" element={<Desktop2 />} />
      <Route path="/desktop-4" element={<Desktop3 />} />
      <Route path="/desktop-5" element={<Desktop4 />} />
      <Route path="/desktop-6" element={<Desktop5 />} />
      <Route path="/desktop-7" element={<Desktop6 />} />
    </Routes>
  );
}
export default App;
