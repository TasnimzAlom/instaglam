export function seedDatabase(firebase) {
    const users = [
      {
        userId: 'NvPY9M9MzFTARQ6M816YAzDJxZ72',
        username: 'myAnimations',
        fullName: 'My Animations',
        emailAddress: 'art@adobexd.com',
        following: ['2'],
        followers: ['2', '3', '4'],
        dateCreated: Date.now()
      },
      {
        userId: '2',
        username: 'MenaDawg',
        fullName: 'Phillomena Bobena',
        emailAddress: 'mena@bena.com',
        following: ['1','3','4'],
        followers: ['NvPY9M9MzFTARQ6M816YAzDJxZ72'],
        dateCreated: Date.now()
      },
      {
        userId: '3',
        username: 'leRaccoon',
        fullName: 'Taz Alom',
        emailAddress: 'tulu@bulu.com',
        following: ['1','2','4'],
        followers: ['NvPY9M9MzFTARQ6M816YAzDJxZ72'],
        dateCreated: Date.now()
      },
      {
        userId: '4',
        username: 'Potato',
        fullName: 'Mahir Alom-Callaway',
        emailAddress: 'potato@nephew.com',
        following: ['1','2','3'],
        followers: ['NvPY9M9MzFTARQ6M816YAzDJxZ72'],
        dateCreated: Date.now()
      }
    ];
  
    for (let k = 0; k < users.length; k++) {
      firebase.firestore().collection('users').add(users[k]);
    }
  
    for (let i = 1; i <= 5; ++i) {
      firebase
        .firestore()
        .collection('photos')
        .add({
          photoId: i,
          userId: '2',
          imageSrc: `/images/users/mena/${i}.jpg`,
          caption: 'dont stop retrieving',
          likes: ['3'],
          comments: [
            {
              displayName: 'Mahir',
              comment: 'Such a good Doggo!'
            },
            {
              displayName: 'Sherri',
              comment: 'OMG sooo cuteee'
            }
          ],
          userLatitude: '40.7128°',
          userLongitude: '74.0060°',
          dateCreated: Date.now()
        });
    }
  }