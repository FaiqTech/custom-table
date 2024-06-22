import React from "react";

export const renderCell = (
  { name, font_weight, font_style, text_align, font_size },
  colSpan = 1,
  paddingLeft = 0
) => (
  <td
    colSpan={colSpan}
    style={{
      paddingLeft: `${paddingLeft}px`,
      fontWeight: font_weight,
      fontStyle: font_style,
      textAlign: text_align,
      fontSize: `${font_size}px`,
    }}
  >
    {name}
  </td>
);
