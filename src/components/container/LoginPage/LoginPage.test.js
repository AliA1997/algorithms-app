//Define sample data to test regarding login
const sampleUserLogin = {
    username: 'AliA1997',
    password: '12345678'
}
describe('Check if the sample Data is correct!!', () => {
    //then test it.
    test('Test if the user data in login matches object', () => {
        expect(sampleUserLogin).toEqual({username: 'AliA1997', password: '12345678'});
        expect(sampleUserLogin).toHaveProperty("password")
    })
})