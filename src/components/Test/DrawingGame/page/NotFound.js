import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export function NotFound() {
  useEffect(() => {
    document.title = "Page Not Found";
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-8xl text-red-700 mb-10 cursor-default">404</h1>
      <span className="text-2xl text-[#a09a9a]">Page Not Found</span>
      <Link className=" mt-8 text-sm text-[#6464c6]" to="/">
        Menu &#10140;
      </Link>
    </div>
  );
}
