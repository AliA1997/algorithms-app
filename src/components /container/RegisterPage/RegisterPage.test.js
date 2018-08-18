//import axios for asychronous operations.
import axios from 'axios';
const sampleUserCreated = {
    username: 'AliA1997', 
    name: 'Ali Qassem Alhaddad', 
    password: '05050565',
    email: 'aalhaddad0097@gmail.com',
    phone_number: 9515883879,
    experience: '5 years',
    recent_edu_completed: 'Some College'
};
//Define a mock axios call.
const register = () => {
    return axios.post('http://localhost:10000/user/register', sampleUserCreated).then(res => res.data.user);
};

describe('Test the register function', () => {
    test('Test if the data is returned', () => {
        register().then(data => {
            console.log('data-----------', data);
            expect(data.user).toBeTruthy();
        }).catch(err => console.log('register error--------', err));
    })
})