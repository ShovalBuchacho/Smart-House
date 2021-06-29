import React from "react";
import { Link } from "react-router-dom";

export default function Main(props) {
  return (
    <div
       
        style={{
          border: "solid 1px #14274e",
          borderRadius: "10px",
          boxShadow: "20px 20px 50px",
          backgroundColor: "#9ba4b4",
          
        }}
    >
      <div>
      
      
        {/* Open link for each room in the rooms array. */}
        {props.rooms.map((element, i) => {
          return (
            <Link to={`/${element.name}`}>
              <button
                className="btn btn-success"
                style={{ textTransform: "uppercase", margin: "10px 5px" }}
              >
                {element.name}
              </button>
            </Link>
          );
        })}
      </div>

      <Link to="/AddRoom">
        <button
          type="button"
          className="btn btn-success"
          style={{ textTransform: "uppercase" }}
        >
          add room
        </button>
      </Link>
    </div>
  );
}
