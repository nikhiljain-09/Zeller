export type Role = "admin" | "manager";

export interface User {
  name: string;
  role: Role;
  id: string;
}

export interface ContextInterface {
  userSelected: string;
  selectUser: (user: Role) => void;
  users: User[];
  loading: boolean;
  error: string | undefined;
}
