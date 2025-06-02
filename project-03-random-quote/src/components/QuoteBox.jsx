import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function QuoteBox() {
  const colors = [
    "bg-violet-500",
    "bg-red-500",
    "bg-pink-500",
    "bg-amber-500",
    "bg-yellow-500",
    "bg-rose-500",
    "bg-orange-500",
  ];

  const [currentQuote, setCurrentQuote] = useState({ content: "", author: "" });
  const [currentBgColor, setCurrentBgColor] = useState("bg-violet-500");

  const fetchQuotes = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();

      //Math.florr(): làm tròn xuống; Math.random(): lấy ngẫu nhiên index trong mảng
      let randomBgColor;
      do {
        randomBgColor = Math.floor(Math.random() * colors.length);
      } while (colors[randomBgColor === currentBgColor]);

      setCurrentBgColor(colors[randomBgColor]);
      setCurrentQuote({ content: data.content, author: data.author });

    } catch (error) {
      alert("Có lỗi xảy ra trong quá trình lấy Quote", error);
    }
  };

  useEffect(() => {
    fetchQuotes()
  },[])

  return (
    <div
      className={`rounded-2xl p-4 w-[550px] text-white transition-all duration-300 ${currentBgColor}`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuote.content}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-lg italic"
        >
          <p className="italic text-xl mb-2">"{currentQuote.content}"</p>
          <p className="text-sm text-right">- {currentQuote.author}</p>
        </motion.div>
      </AnimatePresence>

      <button
        className="rounded p-2 bg-white text-black font-bold my-4"
        onClick={fetchQuotes}
      >
        New Quote
      </button>
    </div>
  );
}

export default QuoteBox;
