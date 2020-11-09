import { BrowserRouter } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Routes from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
