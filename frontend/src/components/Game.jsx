import React from "react";
import { useParams } from "react-router-dom";

export default function Game() {
  const params = useParams();
  // console.log("&&&&&", params);
  return <div className="Game">{params.categoryId}</div>;
}
