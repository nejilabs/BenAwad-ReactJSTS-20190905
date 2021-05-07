import React from "react";

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  isBoolean?: boolean;
  number?: number;
  fn?: (param: string) => string;
  object?: {
    property: string;
  };
  person?: Person;
}

export const TextField: React.FC<Props> = () => {
  return (
    <div>
      <input type="text" />
    </div>
  );
};
