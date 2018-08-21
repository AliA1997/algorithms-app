//import withHandlers to create a hoc 
import { withHandlers } from 'recompose';

const decorator = withHandlers({
    onClick: ({login, history}) => e => {
        e.preventDefault();
        login();
        history.push('/');
    },
    onClick2: ({history}) => () => {
        history.push('/register');
    },
    handleChange1: ({handleUsername}) => (e) => {
        handleUsername(e.target.value)
    },
    handleChange2: ({handlePassword}) => (e) => {
        handlePassword(e.target.value);
    }
})


export default decorator;