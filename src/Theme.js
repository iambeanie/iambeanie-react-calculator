import { createTheme } from "@material-ui/core/styles";

const Theme = createTheme({
    palette: {
        primary: {
            light: "#7B7B7C",
            main: "#636263",
            dark: "#535354",
            contrastText: "#FFF",
        },
        secondary: {
            main: "#ECA047",
            contrastText: "#FFF",
        },
    },
});

export default Theme;