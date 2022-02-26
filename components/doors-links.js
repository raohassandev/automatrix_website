import React from "react";
import { getProduct } from "../helpers/getProduct";
import Link from "next/link";

const style = { color: "#860bd7", textDecorationLine: "underline" };


const DoorsLinks = () => {
  return (
    <div class="list-group" >
      <li>
        <Link
          href={{
            pathname: "/single-services",
            query: getProduct("door", "upvc_door"),
          }}>
          uPVC Doors
        </Link>
      </li>
      <li>
        <Link
          href={{
            pathname: "/single-services",
            query: getProduct("conservatory", "upvc_conservatory"),
          }}>
          uPVC Conservatories
        </Link>
      </li>
      <li>
        <Link
          style={{ textDecoration: "underline" }}
          href={{
            pathname: "/single-services",
            query: getProduct("window", "upvc_window"),
          }}>
          uPVC Windows
        </Link>
      </li>
    </div>
  );
};

export default DoorsLinks;
