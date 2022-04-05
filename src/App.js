import HomePage from "./pages/homepage/HomePage";
import Navbar from "./components/navbar/Navbar";
import Menue from "./components/menue/Menue";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./pages/projects/Projects";
import Project from "./pages/projects/project/Project";
import { dataProjectsPage } from "./data";
import ContactPage from "./pages/contactPage/ContactPage";

function App() {
  const [openMenue, handeleMenue] = useState(false);
  const [dark, setDark] = useState(false);

  return (
    <BrowserRouter>
      <Navbar openMenue={openMenue} handeleMenue={handeleMenue} />
      <Menue
        dark={dark}
        setDark={setDark}
        openMenue={openMenue}
        handeleMenue={handeleMenue}
      />
      <Routes>
        <Route
          path="/"
          exact
          element={<HomePage dark={dark} setDark={setDark} />}
        />
        <Route
          path="/projects"
          element={<Projects dark={dark} dataProjectsPage={dataProjectsPage} />}
        />
        <Route
          path="/projects/:id"
          element={<Project dark={dark} dataProjectsPage={dataProjectsPage} />}
        />
        <Route path="/contact" element={<ContactPage dark={dark} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
