import "./App.css";
import { AppRouter } from "./components/router/AppRouter";

function App() {
  const urlPath = document.location.pathname;

  return (
    <div className="App">
      <AppRouter routePath={urlPath} />
    </div>
  );
}

export default App;
