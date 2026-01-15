import React, { type ReactNode } from "react";

type User = {
  id: number;
  name: string;
};
type Post = {
  id: number;
  title: string;
  body: string;
};

type ListProps<T> = {
  items: T[];
};

const List = <T,>({ items }: ListProps<T>) => {
  return (
    <div>
      {items &&
        items.map((item, indx) => {
          return <div key={indx}>{item as ReactNode}</div>;
        })}
    </div>
  );
};

export default List;

{
  /* export default function List<T>({ items }: ListProps<T>) {
  return (
    <div>
      {items &&
        items.map((item, indx) => {
          return <div key={indx}>{item as ReactNode}</div>;
        })}
    </div>
  );
} */
}
