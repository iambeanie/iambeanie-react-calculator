import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "./Theme";
import CalculatorGrid from "./Components/CalculatorGrid";

function App() {
    return (
        <ThemeProvider theme={Theme}>
            <div className="centered-wrapper">
                <CalculatorGrid />
            </div>
        </ThemeProvider>
    );
}

export default App;
