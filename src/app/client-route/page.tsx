"use client";

import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { clientSideFunction } from "@/utils/client-utils";

export default function ClientRoutePage() {
  const result = clientSideFunction();
  return <h1>Cliente route {result}</h1>;
}
