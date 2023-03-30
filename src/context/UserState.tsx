import { createContext, ReactNode, useEffect, useState } from "react";
import { ListZellerCustomers } from "./queries";
import { ContextInterface, Role, User } from "./types";
import { useQuery } from "@apollo/client";
export const Context = createContext<ContextInterface | null>(null);

type Props = {
  children: ReactNode;
};

export default function UserState({ children }: Props) {

  const [userSelected, setUserSelected] = useState<Role>("admin");

  const { loading, error, data, refetch } = useQuery(ListZellerCustomers);

  
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    //refetching to get updated user's list 
    refetch();
    // eslint-disable-next-line
  }, [userSelected]);

  useEffect(() => {
    try {
      if (data) {
        setUsers(
          data.listZellerCustomers.items.filter((e: User) => {
            return e.role.toLowerCase() === userSelected;
          })
        );
      }
    } catch (e) {}
  }, [data, userSelected]);

  return (
    <Context.Provider
      value={{
        selectUser: setUserSelected,
        users: users,
        userSelected,
        loading,
        error: error?.message,
      }}
    >
      {children}
    </Context.Provider>
  );
}
