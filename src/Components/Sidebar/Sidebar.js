import React from "react";
import typesColors from "../../configs/typesPokemons";
import ButtonType from "../ButtonType/ButtonType";
import OptionsButtons from "../OptionsButtons/OptionsButtons";
import "./Sidebar.scss";
import SpecialFilter from "../SpecialFilter/SpecialFilter";

export default function Sidebar() {
  console.log(typesColors);
  return (
    <div>
      <SpecialFilter />
    </div>
  );
}

// return (
//   <div className="sidebar">
//     <div className="sidebar__header">
//       <h2>Special Filters</h2>
//       <div
//         className="circle-type"
//         style={{ backgroundColor: "rgb(142, 145, 250)" }}
//       >
//         <span className="format-icon icon-poison"></span>
//       </div>
//     </div>
//     <div className="types_container">
//       {typesColors.map((type, index) => (
//         <div className="button__container" key={`type-${index}`}>
//           <ButtonType type={type} />
//           <OptionsButtons />
//         </div>
//       ))}
//     </div>
//   </div>
// );
