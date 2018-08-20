///Have sample data for original comment
const originalComment = {
    id: '5726914f-6e34-412a-adac-23fb3464dd4f',
    username: 'AliA1997',
    body: 'I hate this topic',
    likes: 0
}
//Comment to be edited
const editedComment = {
    id: '5726914f-6e34-412a-adac-23fb3464dd4f',
    username: 'AliA1997',
    body: 'I love this topic',
    likes: 0
}

//Have test if the sample data is correct 
describe('Comment has correct data', () => {
    test('Check if has the right properties', () => {
        expect(originalComment).toHaveProperty('id');
        expect(originalComment).toHaveProperty('username');
        expect(originalComment).toHaveProperty('body');
        expect(originalComment).toHaveProperty('likes');
    })
    test('Check if has the right data', () => {
        expect(originalComment).toEqual({id: '5726914f-6e34-412a-adac-23fb3464dd4f',username: 'AliA1997', body: 'I hate this topic', likes: 0});
    })
})

describe('Edit Comment has a different data', () => {
    test('CHeck if it has the right properties', () => {
        expect(editedComment).toHaveProperty('id');
        expect(editedComment).toHaveProperty('username');
        expect(editedComment).toHaveProperty('body');
        expect(editedComment).toHaveProperty('likes');
    })
    test('Check if data is different', () => {
        expect(editedComment === originalComment).toBeFalsy();
    })
    test('Check if the id matches', () => {
        expect(editedComment.id === originalComment.id).toBeTruthy();
    })
})