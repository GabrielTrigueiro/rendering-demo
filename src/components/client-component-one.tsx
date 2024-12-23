"use client";

import { useState } from "react";
import ClienteComponentTwo from "./client-component-two";

export default function ClienteComponentOne({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [name, setName] = useState("Bat em girl");
  return (
    <>
      <h1>Cliente Component One</h1>
      {children}
    </>
  );
}
