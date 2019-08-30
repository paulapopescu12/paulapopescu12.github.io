import React from "react";
import Collection from "../Collection/Collection";

function TopRated() {
  return <Collection sorting="vote_count.desc"></Collection>;
}

export default TopRated;
