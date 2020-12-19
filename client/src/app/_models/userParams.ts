import { User } from './user';

export class UserParams {
    gender: string;
    pageNumber = 1;
    pageSize = 5;

    constructor(user: User) {
        this.gender = user.gender === 'female' ? 'male' : 'female';
    }
}