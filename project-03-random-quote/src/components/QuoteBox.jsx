import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function QuoteBox() {
  const quotes = [
    "Cuộc sống là một món quà.",
    "Hãy sống như thể bạn sẽ chết vào ngày mai.",
    "Không có gì là không thể nếu bạn đủ kiên trì.",
    "Thành công không phải là đích đến, mà là hành trình.",
    "Hạnh phúc là biết đủ.",
  ];

  const colors = [
    "bg-violet-400",
    "bg-red-400",
    "bg-pink-400",
    "bg-amber-400",
    "bg-yellow-400",
    "bg-rose-400",
    "bg-orange-400",
  ];

  const [currentQuote, setCurrentQuote] = useState("Cuộc sống là một món quà.");
  const [currentBgColor, setCurrentBgColor] = useState("bg-violet-400");

  const handleNewQuote = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * quotes.length);
    } while (quotes[randomIndex] === currentQuote);
    setCurrentQuote(quotes[randomIndex]);

    //Math.florr(): làm tròn xuống; Math.random(): lấy ngẫu nhiên index trong mảng
    let randomBgColor;
    do {
      randomBgColor = Math.floor(Math.random() * colors.length);
    } while (colors[randomBgColor] === currentBgColor);
    setCurrentBgColor(colors[randomBgColor]);
  };

  return (
    <div
      className={`rounded-2xl p-4 w-[550px] text-white transition-all duration-300 ${currentBgColor}`}
    >
      <AnimatePresence mode="wait">
        <motion.p
          key={currentQuote}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-lg italic"
        >
          {currentQuote}
        </motion.p>
      </AnimatePresence>

      <button
        className="rounded p-2 bg-white text-black font-bold my-4"
        onClick={handleNewQuote}
      >
        Quote mới
      </button>
    </div>
  );
}

export default QuoteBox;
