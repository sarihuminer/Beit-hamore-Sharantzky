import { Route } from "./route.model";
import { Specialization } from './specialization.model';
import { Course } from './course.model';
import { UserDetails } from './userDetails.model';

export class UserGlobalDetailsDTO{
    UserDetails:UserDetails;
    ListRoutes:Route[];
    ListSpealitation:Specialization[];
    ListCourses:Course[];


}


