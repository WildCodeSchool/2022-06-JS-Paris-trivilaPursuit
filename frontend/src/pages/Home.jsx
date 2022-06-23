import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <button type="button">
      <Link to="/Categories">Clique!</Link>
    </button>
  );
}
