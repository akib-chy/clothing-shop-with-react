import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./CustomLink.css";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div
      className="custom-link"
      style={{
        borderColor: match ? "#137ae0" : "lightgray",
      }}
    >
      <Link
        to={to}
        {...props}
        style={{
          fontWeight: match ? "bold" : "normal",
          color: match ? "#137ae0" : "black",
        }}
      >
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;
