import "./App.css";
import { AppRouter } from "./components/router/AppRouter";
import { Header } from "./components/shared/Header";

function App() {
    const urlPath = document.location.pathname;

    return (
        <div className="App">
            {/* Begin: Menu - Fixed part of the app */}
            <Header />
            {/* End: Menu - Fixed part of the app */}
            {/* Begin: Moving part of the app */}
            <AppRouter routePath={urlPath} />
            {/* End: Moving part of the app */}
        </div>
    );
}

export default App;
