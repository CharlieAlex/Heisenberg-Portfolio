import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { useParams, useNavigate } from 'react-router-dom';
import mermaid from 'mermaid';
import '../assets/styles/MarkdownViewer.scss';
import 'highlight.js/styles/github-dark.css';
import 'katex/dist/katex.min.css';

// Initialize mermaid
mermaid.initialize({
  startOnLoad: true,
  theme: 'default',
  securityLevel: 'loose',
});

const Mermaid = ({ chart }: { chart: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (ref.current) {
      mermaid.contentLoaded();
      const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
      mermaid.render(id, chart).then(({ svg }) => {
          if (ref.current) {
            ref.current.innerHTML = svg;
          }
      }).catch((e) => {
          console.error("Mermaid error:", e);
          if (ref.current) ref.current.innerHTML = "Error rendering chart";
      });
    }
  }, [chart]);

  return <div className="mermaid" ref={ref} />;
};

function MarkdownViewer() {
    const { fileName } = useParams<{ fileName: string }>();
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (fileName) {
            fetch(`${process.env.PUBLIC_URL}/markdowns/${fileName}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text();
                })
                .then(text => setContent(text))
                .catch(err => {
                    console.error('Error fetching markdown:', err);
                    setContent('# Error\nCould not load the document.');
                });
        }
    }, [fileName]);

    return (
        <div className="markdown-viewer-container">
            <button className="back-button" onClick={() => navigate('/', { state: { target: 'teaching' } })}>
                ← Back to Portfolio
            </button>
            <div className="markdown-content">
                <ReactMarkdown 
                    remarkPlugins={[remarkGfm, remarkMath]}
                    rehypePlugins={[rehypeHighlight, rehypeKatex]}
                    components={{
                        code({node, inline, className, children, ...props}: any) {
                            const match = /language-(\w+)/.exec(className || '')
                            if (!inline && match && match[1] === 'mermaid') {
                                return <Mermaid chart={children} />;
                            }
                            return (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            )
                        }
                    }}
                >
                    {content}
                </ReactMarkdown>
            </div>
        </div>
    );
}

export default MarkdownViewer;
