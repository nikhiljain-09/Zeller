import { useContext } from "react";
import styled from "styled-components";
import { Heading } from "../../../base/base";
import { HorizontalLine } from "../../../base/base";
import { ContextInterface } from "../../../context/types";
import { Context } from "../../../context/UserState";
import { toSnakeCase } from "../../../utils/toSnakeCase";

export default function UsersList() {
  const { users, userSelected, loading, error } = useContext(
    Context
  ) as ContextInterface;

  return (
    <div>
      <Heading>{toSnakeCase(userSelected)} Users</Heading>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{"An error occurred while fetching zeller customer"}</p>
      ) : (
        users.map((user) => (
          <UserCompnent key={`${user.id}`}>
            <UserProfile>
              <p>{user.name[0]}</p>
            </UserProfile>
            <div>
              <p>{user.name}</p>
              <Subtitle>{user.role.toUpperCase()}</Subtitle>
            </div>
          </UserCompnent>
        ))
      )}

      <HorizontalLine />
    </div>
  );
}

const UserCompnent = styled.div`
  padding-block: 8px;
  display: flex;
`;

const UserProfile = styled.div`
  background-color: #eaf2fa;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  color: #2b71c7;
  border-radius: 4px;
  p {
    padding-inline: 16px;
  }
`;

const Subtitle = styled.p`
  font-size: 12px;
`;
