import { faker } from '@faker-js/faker';
import axios from 'axios';
import { sample } from 'lodash';

// ----------------------------------------------------------------------


const loadData = async () => {

}



const users = loadData()
console.log(users)
// [...Array(24)].map((_, index) => ({
//   id: faker.datatype.uuid(),
//   avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`,
//   name: sample(['ahmed magdy', 'ahmed mohamed', 'nabil elhady']),
//   email: sample(['ahmed@gmail.com', 'sherbo@gmail.com']),
//   dietplan: sample(['banana', 'Strawberry', 'cucumber']),
//   trainingplan: sample(['fitness', 'run']),
//   progress: sample(['fesjkwfejfk', 'wefwefewfwef']),
//   // isVerified: faker.datatype.boolean(),
//   status: sample(['active', 'Expired']),

// }));

export default users;
