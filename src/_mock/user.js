import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`,
  name:  sample(['ahmed magdy', 'ahmed mohamed', 'nabil elhady']),
  email: sample(['ahmed@gmail.com', 'sherbo@gmail.com']),
  dietplan: sample(['banana', 'Strawberry','cucumber']),
  trainingplan: sample(['fitness', 'run']),
  progress: sample(['fesjkwfejfk', 'wefwefewfwef']),
 // isVerified: faker.datatype.boolean(),
  status: sample(['active', 'not active']),
  role: sample([
    'Leader',
    'Hr Manager',
    'UI Designer',
    'UX Designer',
    'UI/UX Designer',
    'Project Manager',
    'Backend Developer',
    'Full Stack Designer',
    'Front End Developer',
    'Full Stack Developer',
  ]),
}));

export default users;
