import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

const styledCheckbox = {
  margin: { xs: "2px", sm: "5px", md: "8px" },
};

const CheckBoxes = ({ label }) => {
  return (
    <FormControlLabel
      value="bottom"
      control={<Checkbox />}
      label={label}
      labelPlacement="bottom"
      sx={styledCheckbox}
    />
  );
};

export default CheckBoxes;
