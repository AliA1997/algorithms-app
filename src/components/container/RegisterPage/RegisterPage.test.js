//import axios for asychronous operations.
import axios from 'axios';
import { userInfo } from 'os';
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
// const register = () => {
//     return axios.post('/user/login', sampleUserCreated).then(res => res.data.user);
// };

describe('Test the register function', () => {
    test('Test if the data is correct', () => {
    expect(sampleUserCreated).toMatchObject({
        username: 'AliA1997', 
        name: 'Ali Qassem Alhaddad', 
        password: '05050565',
        email: 'aalhaddad0097@gmail.com',
        phone_number: 9515883879,
        experience: '5 years',
        recent_edu_completed: 'Some College'
    })
    expect(sampleUserCreated.phone_number).toEqual(9515883879);
    })
})

