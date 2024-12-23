"use client";

import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from "@/components/ThemeProvider";

export default function ClientRoutePage() {
  const theme = useTheme();

  return <h1 style={{ color: theme.colors.primary }}>Cliente route</h1>;
}
