import React, { useState, useRef } from "react";

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  isBoolean?: boolean;
  number?: number;
  fn?: (param: string) => string;
  person: Person;
  handleChange?: (event: React.ChangeEventHandler<HTMLInputElement>) => void;
}

interface TextNode {
  text: string;
}

export const TextField: React.FC<Props> = ({ handleChange }) => {
  // Start: with useState
  // const [count, setCount] = useState<number | null>(5);
  // setCount(null);

  // const [count, setCount] = useState<{ text: string }>({ text: "Hello" });
  // setCount({ text: "world" });

  const [count, setCount] = useState<TextNode>({ text: "Hello" });
  setCount({ text: "world" });
  // End: with useState

  // Start: with useRef
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  // End: with useRef

  return (
    <div ref={divRef}>
      <input type="text" ref={inputRef} onChange={handleChange} />
    </div>
  );
};
