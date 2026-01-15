import type { ReactElement, ReactNode } from "react";

type HeadingProps = {
  title: string;
  subtitle: string;
  body: string
};

export default function Heading({ title, subtitle, body }: HeadingProps): ReactNode {
  return (
    <>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>{body}</p>
    </>
  );
}
