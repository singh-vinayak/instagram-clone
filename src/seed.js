export function seedDatabase(firebase) {
    const users = [
        {
            userId: 'BKbblHCWu8Nv78aFsw9A9ZgWzqv2',
            username: 'vinayak',
            fullName: 'Vinayak Singh',
            emailAddress: 'vinayaksingh5302@gmail.com',
            following: ['2'],
            followers: ['2', '3', '4'],
            dateCreated: Date.now()
        },
        {
            userId: '2',
            username: 'aman',
            fullName: 'Aman Singh',
            emailAddress: 'aman@gmail.com',
            following: [],
            followers: ['BKbblHCWu8Nv78aFsw9A9ZgWzqv2'],
            dateCreated: Date.now()
        },
        {
            userId: '3',
            username: 'riya',
            fullName: 'Riya',
            emailAddress: 'ry@yahoo.com',
            following: [],
            followers: ['BKbblHCWu8Nv78aFsw9A9ZgWzqv2'],
            dateCreated: Date.now()
        },
        {
            userId: '4',
            username: 'anurag',
            fullName: 'Anurag Singh',
            emailAddress: 'anuj@outlook.com',
            following: [],
            followers: ['BKbblHCWu8Nv78aFsw9A9ZgWzqv2'],
            dateCreated: Date.now()
        }
    ];

    for (let k = 0; k < users.length; k++) {
        //console.log('user added');
        firebase.firestore().collection('users').add(users[k]);
    }

    for (let i = 1; i <= 5; ++i) {
        //console.log('photo added');
        firebase
            .firestore()
            .collection('photos')
            .add({
                photoId: i,
                userId: '2',
                imageSrc: `/images/users/vinayak/${i}.jpg`,
                caption: 'Saint George and the Dragon',
                likes: [],
                comments: [
                    {
                        displayName: 'riya',
                        comment: 'Love this place, looks like my animal farm!'
                    },
                    {
                        displayName: 'anurag',
                        comment: 'Would you mind if I used this picture?'
                    }
                ],
                userLatitude: '40.7128°',
                userLongitude: '74.0060°',
                dateCreated: Date.now()
            });
    }
}
