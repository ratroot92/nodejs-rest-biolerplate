import makeDb from '@src/db';
import makeUsersEndpointHandler from '@src/users/users-endpoint';
import makeUserList from '';

const database = makeDb();
const conatctList = makeUserList({ database });
const usersEndpointHanlder = makeUsersEndpointHandler({ conatctList });
export default usersEndpointHanlder;
