import styled from "styled-components";
import { Role } from "../context/types";
import { debounce } from "../utils/debounce";
import { toSnakeCase } from "../utils/toSnakeCase";

interface RadioInputProps {
  onSelected: (role: Role) => void;
  value: Role;
  title: string;
  isSelected: boolean;
}
export default function RadioInput({
  onSelected,
  value,
  title,
  isSelected,
}: RadioInputProps) {
  const onItemSelected = () => {
    if (!isSelected) {
      onSelected(value);
    }
  };

  return (
    <InputContainer data-testid={value} onClick={debounce(onItemSelected, 250)}>
      <input readOnly type={"radio"} checked={isSelected} value={value} />
      <label>{toSnakeCase(title)}</label>
    </InputContainer>
  );
}

const InputContainer = styled.div`
  :hover {
    background-color: #eaf2fa;
  }
  border: none;
  flex-direction: row;
  border-radius: 4px;
  padding: 8px;
  display: flex;
  gap: 8px;
`;
