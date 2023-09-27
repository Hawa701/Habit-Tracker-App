import { Typography } from "@mui/material";
import React from "react";

const QuoteDisplay = ({ index, quote, speaker }) => {
  return (
    <div
      key={index}
      style={{
        minHeight: "8rem",
        margin: "2rem",
      }}
    >
      <Typography
        variant="body1"
        align="center"
        fontFamily="Montserrat"
        fontWeight="bold"
        gutterBottom
      >
        "{quote}"
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        fontFamily="Montserrat"
        fontStyle="italic"
      >
        - {speaker}
      </Typography>
    </div>
  );
};

export default QuoteDisplay;
