import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./mainlayout";
import Home from "./pages/home";
function App() {
  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index  element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
