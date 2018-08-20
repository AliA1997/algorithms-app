
//Assign sample data.
const sampleUserCreated = {
    username: 'AliA1997', 
    name: 'Ali Qassem Alhaddad', 
    password: '05050565',
    profile_picture: `https://robohash.org/a`,
    email: 'aalhaddad0097@gmail.com',
    phone_number: 9515883879,
    experience: '5 years',
    recent_edu_completed: 'Some College',
    favorite_programming_languages: [{name: 'Javascript', image: 'example'}]
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
        profile_picture: `https://robohash.org/a`,
        email: 'aalhaddad0097@gmail.com',
        phone_number: 9515883879,
        experience: '5 years',
        recent_edu_completed: 'Some College',
        favorite_programming_languages: [{name: 'Javascript', image: 'example'}]
    })
    expect(sampleUserCreated.phone_number).toEqual(9515883879);
    })
})


