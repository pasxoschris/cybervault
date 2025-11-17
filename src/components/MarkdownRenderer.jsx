import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MarkdownRenderer({ content }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      className="prose prose-invert max-w-none text-slate-300"
      components={{
        strong: (props) => <strong className="text-white font-bold" {...props} />,
        em: (props) => <em className="text-slate-400 italic" {...props} />,
        li: (props) => <li className="my-1" {...props} />,
        p: (props) => <p className="leading-relaxed mb-3" {...props} />,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
