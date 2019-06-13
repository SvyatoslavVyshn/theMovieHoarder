import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple'
import blue from '@material-ui/core/colors/blue'
// import red from 'material-ui/colors/red';

export default createMuiTheme({
    palette: {
        primary: { main: purple[400] },
        secondary: { main: blue[400] },
    },
    typography: {
        useNextVariants: true,
    },
})
