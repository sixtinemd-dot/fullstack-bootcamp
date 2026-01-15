import React, { type ReactElement, type ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  text: string;
};

export default function Section({ children, text }: SectionProps) {
  return (
    <>
      <h2>{children}</h2>
      <p>{text}</p>
    </>
  );
}
