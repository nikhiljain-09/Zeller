import { useContext } from "react";
import { Heading } from "../../../base/base";
import { HorizontalLine } from "../../../base/base";
import { ContextInterface, Role } from "../../../context/types";
import { Context } from "../../../context/UserState";
import RadioInput from "../../../base/RadioInput";

export default function UserTypeContainer() {
  const { selectUser, userSelected } = useContext(Context) as ContextInterface;

  const onChange = (role: Role) => {
    selectUser(role);
  };

  const userTypes: Role[] = ["admin", "manager"];
  return (
    <div>
      <Heading>User Types</Heading>
      <ul>
        {userTypes.map((userType) => {
          return (
            <RadioInput
              key={userType}
              isSelected={userSelected === userType}
              onSelected={onChange}
              value={userType}
              title={userType}
            />
          );
        })}
      </ul>
      <HorizontalLine />
    </div>
  );
}
