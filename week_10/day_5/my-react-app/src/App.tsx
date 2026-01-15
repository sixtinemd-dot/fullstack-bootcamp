import {
  useState,
  useEffect,
  useRef,
  createContext,
  type ChangeEvent,
  type ChangeEventHandler,
  type MouseEvent,
  type KeyboardEvent
} from "react";

import "./App.css";
import Heading from "./components/Heading";
import Section from "./components/Section";
import List from "./components/List";

type User = {
  id: number;
  name: string;
};
type Post = {
  id: number;
  title: string;
  body: string;
};

type Auth = {
  token: string;
  userid: string;
};

export const AuthContext = createContext<Auth | null>(null);

function App() {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[]>([{ id: 1, name: "aaa" }]);

  const inputRef = useRef<HTMLInputElement>(null);
  const strRef = useRef<string>("John");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleChengeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.target.value);
  };

  const handleClick = (
    e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
  ) => {
    console.log(e);
  };

  return (
    <>
      <h2>React + TypeScript</h2>
      <Heading
        title={"My Title"}
        subtitle={"Sub title"}
        body='text text text'
      />
      <Section text={"bla bla bla"}>Hello from sub child</Section>
      <List items={[1, "b", "c"]} />
    </>
  );
}

export default App;
