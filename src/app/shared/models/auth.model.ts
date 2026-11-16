export type Role = 'admin' | 'employee';

export interface AppUser {
id: string;
email: string;
name: string;
role: Role;
profile?: Record<string, any>;
}