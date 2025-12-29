import React from "react";
import ReactMarkdown from "react-markdown";

export default function MarkdownBlock({ text }) {
  if (!text) return null;

  return (
    <div className="mt-3 p-4 bg-[#0f1522] border border-slate-700 rounded-xl shadow-inner">
      <div className="flex items-start gap-3">
        <span className="text-cyan-400 text-xl mt-1">🛠️</span>

        {/* Wrapper needed because ReactMarkdown v9 does NOT support className */}
        <div className="text-slate-300 text-sm leading-relaxed space-y-2">
          <ReactMarkdown
            components={{
              p: ({ children }) => (
                <p className="mb-2 text-slate-300">{children}</p>
              ),
              strong: ({ children }) => (
                <strong className="text-white font-semibold">{children}</strong>
              ),
              em: ({ children }) => (
                <em className="text-slate-400">{children}</em>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside space-y-1">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside space-y-1">{children}</ol>
              ),
              li: ({ children }) => (
                <li className="text-slate-300">{children}</li>
              ),
              code: ({ children }) => (
                <code className="bg-slate-800 px-1 py-0.5 rounded text-cyan-300">
                  {children}
                </code>
              ),
            }}
          >
            {text}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
