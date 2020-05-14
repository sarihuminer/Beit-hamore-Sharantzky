import { Status } from './status.model';

export class UserDetails {
    userId: number;
    passwordSHA256: string;
    tz: string;
    firstName: string;
    lastName: string;
    city: string;
    street: string;
    houseNumber?: number;
    phone: string;
    emailAddress: string;
    StatusList: Status[];

    /**
     *
     */
    constructor() {

    }
}

