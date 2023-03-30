import UsersList from "./components/UsersList";
import UserTypeContainer from "./components/UserTypeContainer";
import UserState from "../../context/UserState";

export default function Home() {
  return (
    <UserState>
      <UserTypeContainer />
      <UsersList />
    </UserState>
  );
}
