import React, { useEffect, useState } from "react";
import AuthModal from "../components/AuthModal";
import { Box, Typography, useMediaQuery } from "@mui/material";
import QuoteDisplay from "../components/QuoteDisplay";
import { quotes } from "../config/data";
import AliceCarousel from "react-alice-carousel";

const containerBox = {
  display: "flex",
  flexDirection: { xs: "column", sm: "column", md: "row" },
  padding: { xs: "3rem 2rem", sm: "3rem 3rem", md: "3rem 4rem" },
  // height: "90vh",
  gap: { xs: "3rem", sm: "3rem", md: "1rem" },
};
const infoBox = {
  display: "flex",
  flexDirection: "column",
  alignItems: { xs: "center", sm: "center", md: "start" },
  justifyContent: "center",
  width: "100%",
  height: "100%",
};
const picBox = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
};

const LandingPage = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, [quotes.length]);

  const currentQuote = quotes[currentQuoteIndex];

  return (
    <>
      <Box sx={containerBox}>
        <Box sx={infoBox}>
          <Typography
            variant={isSmallScreen ? "h4" : "h3"}
            fontWeight="bold"
            fontFamily="Montserrat"
          >
            HabitZen, Your Personal Habit Tracking Companion!
          </Typography>
          <Typography variant="p" mt={2} mb={3}>
            With HabitZen, you can take charge of your daily routines and build
            positive habits that lead to a more productive, healthier, and
            fulfilling life. Whether you want to exercise regularly, read more
            books, meditate, or develop any other habit, HabitZen is here to
            support you every step of the way.
          </Typography>
          <AuthModal />
        </Box>
        <Box sx={picBox}>
          <dotlottie-player
            src="https://lottie.host/9ecee4e4-3f1e-4c30-86ba-c0ba12bbf7a0/MT7tiDLkQd.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </Box>
      </Box>

      <Box display="flex" flexDirection="column">
        <Typography
          variant="h6"
          textAlign="center"
          fontFamily="Montserrat"
          fontWeight="bold"
        >
          Famous Quotes
        </Typography>
        <AliceCarousel autoPlay autoPlayInterval={7000}>
          <QuoteDisplay
            key={currentQuote.key}
            quote={currentQuote.quote}
            speaker={currentQuote.speaker}
          />
        </AliceCarousel>
      </Box>
    </>
  );
};

export default LandingPage;
