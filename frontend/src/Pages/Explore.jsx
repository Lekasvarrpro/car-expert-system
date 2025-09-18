import { useState } from "react";
import { motion } from "framer-motion";
import { BsThreeDots } from "react-icons/bs";
import { MdReportProblem } from "react-icons/md";

const Explore = () => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: " Hi! Tell me your car issue (e.g., 'My Honda City battery is dead')",
      type: "default",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: input }),
      });
      const data = await response.json();

      // First bot message (red background)
      const ackMessage = {
        sender: "bot",
        text: (
          <span className="flex items-center gap-2">
            <BsThreeDots className="animate-pulse duration-300" /> Processing
            your issue...
          </span>
        ),
        type: "ack",
      };
      setMessages((prev) => [...prev, ackMessage]);

      // Second bot message (solution in green) after a short delay
      setTimeout(() => {
        const solutionMessage = {
          sender: "bot",
          text: data.reply,
          type: "solution",
        };
        setMessages((prev) => [...prev, solutionMessage]);
      }, 500); // 0.5s delay
    } catch (error) {
      const errorMessage = {
        sender: "bot",
        text: (
          <span className="flex items-center gap-2">
            <BsExclamationTriangle className="text-yellow-300" />
            Error connecting to server.
          </span>
        ),
        type: "solution",
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 p-4"
      style={{
        backgroundImage: 'url("bg.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl bg-gray-900 shadow-xl rounded-2xl p-6 flex flex-col"  glass effect      >
        {/* Header */}
        <h1 className="text-2xl font-bold text-center text-red-500 mb-4">
          Car Solution Chatbot
        </h1>

        {/* Chat Box */}
        <div className="flex-1 overflow-y-auto mb-4 space-y-3 max-h-[60vh] pr-2">
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: msg.sender === "user" ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className={`p-3 rounded-xl max-w-[80%] text-gray-700 font-semibold ${
                msg.sender === "user"
                  ? "bg-blue-300 self-end rounded-br-none"
                  : msg.type === "default"
                  ? "bg-white self-start rounded-bl-none"
                  : msg.type === "ack"
                  ? "bg-purple-300 self-start rounded-bl-none"
                  : "bg-white self-start rounded-bl-none"
              }`}
            >
              {msg.text}
            </motion.div>
          ))}
        </div>

        {/* Input Box */}
        <div className="flex items-center border-2 text-amber-50 border-white  rounded-full px-4 py-2">
          <input
            type="text"
            className="flex-1 outline-none px-2 bg-transparent"
            placeholder="Type your car problem..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="ml-2 bg-red-500 hover:bg-red-600 text-white font-bold px-4 py-2 rounded-full transition"
          >
            Send
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Explore;
