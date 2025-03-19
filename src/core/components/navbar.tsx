"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
export const Navbar = () => {
  const navItems = [
    {
      name: "แบบทดสอบตัวอย่าง",
      href: "/",
    },

    {
      name: "แบบทดสอบ กรองข้อมูล",
      href: "/user-filter",
    },
    {
      name: "แบบทดสอบ ผักผลไม้",
      href: "/fruits",
    },
  ];
  return (
    <div className="bg-white border-b gap-10 border-gray-200 w-full h-16 flex items-center justify-center">
      {navItems.map((item) => (
        <Link
          href={item.href}
          key={item.name}
          className="text-title hover:text-blue-500"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};
