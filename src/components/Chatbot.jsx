import React, { useState } from "react";
import { X, MessageCircle, Bot, Send } from "lucide-react";
import Button from "./ui/Button";
import Input from "./ui/Input";

const Chatbot = ({ isDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "model",
      text: "Hi! I'm Biswojit's AI assistant. How can I help you learn more about his work?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setMessages((prev) => [...prev, { role: "user", text: userText }]);
    setInput("");
    setIsLoading(true);

    try {
      const apiKey = ""; // API key is injected by the environment runtime
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: userText }] }],
            systemInstruction: {
              parts: [
                {
                  text: "You are an AI assistant for Biswojit Sahoo's portfolio. You are helpful, brief, and professional. Biswojit is a Full Stack Developer specializing in AI Agents and Telegram Bots. You should answer questions about his skills, experience, and contact info.",
                },
              ],
            },
          }),
        },
      );

      const data = await response.json();
      let aiText = "Sorry, I'm having trouble processing that right now.";

      if (data?.candidates?.[0]?.content?.parts?.[0]?.text) {
        aiText = data.candidates[0].content.parts[0].text;
      } else if (data?.error) {
        aiText =
          "Hi! (API Key is currently limited). But I can still tell you that Biswojit is an excellent Full Stack Developer. Feel free to use the 'Hire Me' button to contact him directly!";
      }

      setMessages((prev) => [...prev, { role: "model", text: aiText }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text: "Error connecting to AI service. Please try again later.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-transform hover:scale-110 ${
          isDark
            ? "bg-white text-black hover:bg-neutral-200"
            : "bg-black text-white hover:bg-neutral-800"
        }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`fixed bottom-24 right-6 w-[calc(100vw-3rem)] sm:w-96 h-[30rem] z-50 flex flex-col rounded-2xl shadow-2xl border overflow-hidden transition-all duration-300 ${
            isDark ? "bg-neutral-950 border-neutral-800" : "bg-white border-neutral-200"
          }`}
        >
          {/* Header */}
          <div
            className={`p-4 border-b flex items-center gap-3 ${
              isDark
                ? "border-neutral-800 bg-neutral-900"
                : "border-neutral-200 bg-neutral-50"
            }`}
          >
            <div
              className={`p-2 rounded-full ${
                isDark ? "bg-neutral-800" : "bg-neutral-200"
              }`}
            >
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3
                className={`font-semibold text-sm ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                AI Assistant
              </h3>
              <p className="text-xs text-green-500 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>{" "}
                Online
              </p>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 scrollbar-hide">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                    msg.role === "user"
                      ? isDark
                        ? "bg-white text-black rounded-tr-sm"
                        : "bg-black text-white rounded-tr-sm"
                      : isDark
                      ? "bg-neutral-900 text-neutral-200 rounded-tl-sm border border-neutral-800"
                      : "bg-neutral-100 text-neutral-800 rounded-tl-sm border border-neutral-200"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div
                  className={`rounded-2xl px-4 py-3 text-sm flex gap-1 items-center ${
                    isDark
                      ? "bg-neutral-900 border border-neutral-800 rounded-tl-sm"
                      : "bg-neutral-100 border border-neutral-200 rounded-tl-sm"
                  }`}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full bg-neutral-500 animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  ></div>
                  <div
                    className="w-1.5 h-1.5 rounded-full bg-neutral-500 animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  ></div>
                  <div
                    className="w-1.5 h-1.5 rounded-full bg-neutral-500 animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  ></div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div
            className={`p-3 border-t ${
              isDark ? "border-neutral-800 bg-neutral-900" : "border-neutral-200 bg-neutral-50"
            }`}
          >
            <form
              onSubmit={sendMessage}
              className="flex gap-2 relative items-center"
            >
              <Input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="rounded-full pl-4 pr-12 py-5"
                isDark={isDark}
              />
              <Button
                type="submit"
                variant="ghost"
                size="icon"
                disabled={isLoading || !input.trim()}
                className="absolute right-2 top-1.5 h-7 w-7 rounded-full"
                isDark={isDark}
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
