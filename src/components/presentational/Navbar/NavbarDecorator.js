//import withHandlers 
import { withHandlers } from 'recompose';

const decorator = withHandlers({
    onClick: ({linkFunc}) => (path) => () => {
        linkFunc(path);
    },
    onClick2: ({openMenu}) => e => {
        openMenu(e);
    }
})


//export decorator 
export default decorator;