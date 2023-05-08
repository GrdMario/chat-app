import { IconName } from "@fortawesome/fontawesome-svg-core";

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    icon: IconName;
};

export interface Member {
    id: string;
    authData?: object;
    clientData?: User
};

export interface MessageEvent {
    data: string;
    id: string;
    timestamp: number;
    clientId: string;
    member: Member;
};