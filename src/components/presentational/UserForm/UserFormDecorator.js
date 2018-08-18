//import withHandler from recompose
import { withHandlers, compose } from 'recompose';
//import withRouter from react-router-dom 
import { withRouter } from 'react-router-dom';

const withHandlersDecorator = withHandlers({
    handleUsername: ({handleUsername}) => e => {
      console.log(e.target.value);
      handleUsername(e.target.value)  
    },
    handleName: ({handleName}) => e => {
        console.log('Hit-----------');
        handleName(e.target.value);
    },
    handleEmail: ({handleEmail}) => e => {
        console.log('Hit-----------');
        handleEmail(e.target.value);
    },
    handlePassword: ({handlePassword}) => e => {
        console.log('Hit-----------');
        handlePassword(e.target.value);
    },
    handlePhoneNumber: ({handlePhoneNumber}) => e => {
        console.log('Hit-----------');
        handlePhoneNumber(e.target.value);
    },
    handleExperience: ({handleExperience}) => e => {
        console.log('Hit-----------');
        handleExperience(e.target.value);
    },
    handleEdu: ({handleEdu}) => e => {
        console.log('Hit-----------');
        handleEdu(e.target.value);
    },
    onClick: ({register, history}) => () => {
        register();
        history.push('/');
    }
})

// export default withHandleDecorator;
export default withHandlersDecorator;