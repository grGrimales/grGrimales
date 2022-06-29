

export interface IContact {
    _id: string;
    name: string;
    email: string;
    message: string;
    phoneNumber: string;
    status: ContactStatus;
    createAt: number;

}

export type ContactStatus = 'new' | 'delete' | 'read' | 'important'