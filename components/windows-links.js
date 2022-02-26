import Link from "next/link";
import React from "react";
import { getProduct } from "../helpers/getProduct";

const style = { color: "#860bd7", textDecorationLine: "underline" };

const WindowLinks = () => {
  return (
    <div class="list-group">
      <li>
        <Link
          href={{
            pathname: "/single-services",
            query: getProduct("window", "main"),
          }}>
          Double Glazed Windows
        </Link>
      </li>
      <li>
        <Link
          href={{
            pathname: "/single-services",
            query: getProduct("door", "main"),
          }}>
          Doors
        </Link>
      </li>
      <li>
        <Link
          href={{
            pathname: "/single-services",
            query: getProduct("conservatory", "main"),
          }}>
          Conservatories
        </Link>
      </li>
      <li>
        <Link
          href={{
            pathname: "/single-services",
            query: getProduct("glazing", "triple_glazing"),
          }}>
          Triple Glazed Windows & Doors
        </Link>
      </li>
      <li>
        <Link
          href={{
            pathname: "/single-services",
            query: getProduct("schuco", "schuco"),
          }}>
          Schüco Double Glazed Units
        </Link>
      </li>
    </div>
  );
};

export default WindowLinks;
