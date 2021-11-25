import {firebase, FieldValue} from "../library/firebase";

export async function doesUsernameExist(username) {
    const result = await firebase
      .firestore()
      .collection('users')
      .where('username', '==', username.toLowerCase())
      .get();
  
    return result.docs.map((user) => user.data().length > 0);
  }
console.log(FieldValue);
  export async function getUserByUserId(userId) {
    const result = await firebase
      .firestore()
      .collection('users')
      .where('userId', '==', userId)
      .get();

      const user = result.docs.map((item) => ({
        ...item.data(),
        docId:item.id
      }))

      return user;
  }