import * as React from "react";

// Learn more: https://framer.com/api

export function Icon(props: any) {
  const { width = 24, height = 24 } = props;

  switch (props.type) {
    case "home":
      return (
        <svg style={{ width, height }} viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M9,13H15V19H18V10L12,5.5L6,10V19H9V13M4,21V9L12,3L20,9V21H4Z"
          />
        </svg>
      );

    case "list":
      return (
        <svg style={{ width, height }} viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M21,19V17H8V19H21M21,13V11H8V13H21M8,7H21V5H8V7M4,5V7H6V5H4M3,5A1,1 0 0,1 4,4H6A1,1 0 0,1 7,5V7A1,1 0 0,1 6,8H4A1,1 0 0,1 3,7V5M4,11V13H6V11H4M3,11A1,1 0 0,1 4,10H6A1,1 0 0,1 7,11V13A1,1 0 0,1 6,14H4A1,1 0 0,1 3,13V11M4,17V19H6V17H4M3,17A1,1 0 0,1 4,16H6A1,1 0 0,1 7,17V19A1,1 0 0,1 6,20H4A1,1 0 0,1 3,19V17Z"
          />
        </svg>
      );

    case "comments":
      return (
        <svg style={{ width, height }} viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12,23A1,1 0 0,1 11,22V19H7A2,2 0 0,1 5,17V7A2,2 0 0,1 7,5H21A2,2 0 0,1 23,7V17A2,2 0 0,1 21,19H16.9L13.2,22.71C13,22.89 12.76,23 12.5,23H12M13,17V20.08L16.08,17H21V7H7V17H13M3,15H1V3A2,2 0 0,1 3,1H19V3H3V15M9,9H19V11H9V9M9,13H17V15H9V13Z"
          />
        </svg>
      );
    default:
      return null;
  }
}
