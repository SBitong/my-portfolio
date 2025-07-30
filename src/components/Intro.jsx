import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Intro.css";

const greetings = ["Hello", "Kamusta?", "Bonjour", "こんにちは", "cómo está"];

export default function Intro({ onFinish }) {
  const [index, setIndex] = useState(0);
  const [fadeOutScreen, setFadeOutScreen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 1000);

    // Start fade out of screen after last greeting
    const fadeOutTimeout = setTimeout(() => {
      setFadeOutScreen(true);
    }, greetings.length * 1000);

    // Trigger landing page after fade out
    const finishTimeout = setTimeout(() => {
      onFinish();
    }, greetings.length * 1000 + 1000); // 1s fade-out duration

    return () => {
      clearInterval(interval);
      clearTimeout(fadeOutTimeout);
      clearTimeout(finishTimeout);
    };
  }, []);

  const currentGreeting = index < greetings.length ? greetings[index] : null;

  return (
    <motion.div
      className="intro-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: fadeOutScreen ? 0 : 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <AnimatePresence mode="wait">
        {currentGreeting && (
          <motion.h1
            key={currentGreeting}
            className="greeting-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {currentGreeting}
          </motion.h1>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
