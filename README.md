# BenAwad-ReactJSTS-20190905

> Ben Awad - React Typescript Tutorial (Sep 5, 2019)

Link: https://www.youtube.com/watch?v=Z5iWr6Srsj8

**Description**
> Learn how to start using Typescript in your React code. I go over props, hooks, and render props.

Snippets: https://gist.github.com/benawad/1e9dd...

Code: https://github.com/benawad/react-typescript-example

For more information on this checkout: https://github.com/typescript-cheatsh..

---

> TABLE OF CONTENTS
- [BenAwad-ReactJSTS-20190905](#benawad-reactjsts-20190905)
- [1 - Project Setup](#1---project-setup)
- [2 - Specifiying type of functional components](#2---specifiying-type-of-functional-components)
- [3 - Specifying props of the components](#3---specifying-props-of-the-components)
  - [Directly specifying the type of the props](#directly-specifying-the-type-of-the-props)
  - [Implementing an interface to specify the type of the props](#implementing-an-interface-to-specify-the-type-of-the-props)
- [4 - Passing Props](#4---passing-props)
- [5 - Optional Props ("?")](#5---optional-props-)
- [6 - useState](#6---usestate)
  - [useState with objects](#usestate-with-objects)
- [7 - useRef](#7---useref)
- [8 - onChange](#8---onchange)
- [9 - useReducer](#9---usereducer)
- [10 - Counter](#10---counter)

---

# 1 - Project Setup

```bas
npx create-react-app benawad-reactjsts-20190905 --typescript
cd benawad-reactjsts-20190905 && yarn start
```

change your file structure to be something like this at src:

then clean up the code

```bash
├── App.tsx
├── ReducerExample.tsx
├── TextField.tsx
├── index.tsx
└── react-app-env.d.ts
```

rafc snippet on text-field and app.tsx:

```jsx
import React from "react";

const App: React.FC = () => {
  return (
    <div>
      <p>Hello World</p>
    </div>
  );
};

export default App;
```

TextField.tsx

```jsx
import React from "react";

export const TextField = () => {
  return (
    <div>
      <input type="text" />
    </div>
  );
};
```

# 2 - Specifiying type of functional components

TextField.tsx

```jsx
import React from "react";

export const TextField: React.FC = () => {
  return (
    <div>
      <input type="text" />
    </div>
  );
};
```

# 3 - Specifying props of the components

## Directly specifying the type of the props

TextField.tsx: 

```jsx
import React from "react";

export const TextField: React.FC<{ text: string }> = () => {
  return (
    <div>
      <input type="text" />
    </div>
  );
};
```

## Implementing an interface to specify the type of the props

TextField.tsx:

```jsx
import React from "react";

interface Props {
  text: string;
}

export const TextField: React.FC<Props> = () => {
  return (
    <div>
      <input type="text" />
    </div>
  );
};
```

---

# 4 - Passing Props

Back to App.tsx

```jsx
import React from "react";

//Child Interface of the Person Property in Props Interface
interface Person {
  firstName: string;
  lastName: string;
}

//Main Interface
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
```

Also has autocompletion in the parameters of your functional components

# 5 - Optional Props ("?")

TextField.tsx:

```jsx
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
```

# 6 - useState

ts infers it had to be a number as seen in the count useState hook. 

TextField.tsx:

```jsx
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
}

export const TextField: React.FC<Props> = () => {
  const [count, setCount] = useState(5);
  setCount(null);
  return (
    <div>
      <input type="text" />
    </div>
  );
};
```

However if it is null you might want to do it like this:

TextField.tsx:

```tsx
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
}

export const TextField: React.FC<Props> = () => {
  const [count, setCount] = useState<number | null>(5);
  setCount(null);
  return (
    <div>
      <input type="text" />
    </div>
  );
};
```

## useState with objects

way 1:

TextField.tsx

```tsx
const [count, setCount] = useState<{ text: string }>({ text: "Hello" });
  setCount({ text: "world" });
```

way 2: implement a new interface

TextField.tsx

```tsx
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
}

interface TextNode {
  text: string;
}

export const TextField: React.FC<Props> = () => {
  // const [count, setCount] = useState<number | null>(5);
  // setCount(null);

  // const [count, setCount] = useState<{ text: string }>({ text: "Hello" });
  // setCount({ text: "world" });

  const [count, setCount] = useState<TextNode>({ text: "Hello" });
  setCount({ text: "world" });
  return (
    <div>
      <input type="text" />
    </div>
  );
};
```

# 7 - useRef

TextField.tsx:

```tsx
export const TextField: React.FC<Props> = () => {
  // Start: with useRef
  const inputRef = useRef<HTMLInputElement>(null);
  // End: with useRef

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};
```

hovering over ref in the input tag, when filling out what typescript wants to expect, gives you a pop out that will give you options for acceptable types.

another example for divRef:

TextField.tsx:

```tsx
export const TextField: React.FC<Props> = () => {
  // Start: with useRef
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  // End: with useRef

  return (
    <div ref={divRef}>
      <input type="text" ref={inputRef} />
    </div>
  );
};
```

# 8 - onChange

TextField.tsx

```tsx
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
  handleChange: () => void;
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
```

for example you have this setup, mind onChange handleChange in input tag, the props interface, and parameters

hover over onChange attribute of input tag then copy paste the suggested type

```tsx
interface Props {
  text: string;
  isBoolean?: boolean;
  number?: number;
  fn?: (param: string) => string;
  person: Person;
  handleChange: (event: React.ChangeEventHandler<HTMLInputElement>) => void;
}
```

then at app.tsx you have nice autocompletion

# 9 - useReducer

ReducerExample.tsx

```tsx
import React, { useReducer } from "react";

type Actions =
  | { type: "add"; text: string }
  | {
      type: "remove";
      idx: number;
    };

interface Todo {
  text: string;
  complete: boolean;
}

type State = Todo[];

const TodoReducer = (state: State, action: Actions) => {
  switch (action.type) {
    case "add":
      return [...state, { text: action.text, complete: false }];
    case "remove":
      return state.filter((_, i) => action.idx !== i);
    default:
      return state;
  }
};

export const ReducerExample: React.FC = () => {
  const [todos, dispatch] = useReducer(TodoReducer, []);

  return (
    <div>
      {JSON.stringify(todos)}
      <button
        onClick={() => {
          dispatch({ type: "add", text: "..." });
        }}
      >
        +
      </button>
    </div>
  );
};
```

# 10 - Counter

touch new src/Counter.tsx

```tsx
import React, { useState } from "react";

interface Props {
  children: (data: {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
  }) => JSX.Element | null;
}

export const Counter = ({ children }) => {
  const [count, setCount] = useState(0);
  return <div>{children({ count, setCount })}</div>;
};
```

app.tsx

```tsx
import React from "react";
import { TextField } from "./TextField";
import { Counter } from "./Counter";

const App: React.FC = () => {
  return (
    <div>
      <TextField
        text="hello"
        person={{ firstName: "firstName", lastName: "lastName" }}
      />

      <Counter>
        {({ count, setCount }) => (
          <div>
            {count}
            <button onClick={() => setCount(count++)}></button>
          </div>
        )}
      </Counter>
    </div>
  );
};

export default App;
```