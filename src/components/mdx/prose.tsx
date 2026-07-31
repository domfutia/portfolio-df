import type {MDXComponents} from 'mdx/types';

export const mdxComponents: MDXComponents = {
  h1: (props) => <h1 {...props} className="mdxH1" />,
  h2: (props) => <h2 {...props} className="mdxH2" />,
  h3: (props) => <h3 {...props} className="mdxH3" />,
  p: (props) => <p {...props} className="mdxP" />,
  ul: (props) => <ul {...props} className="mdxUl" />,
  ol: (props) => <ol {...props} className="mdxOl" />,
  li: (props) => <li {...props} className="mdxLi" />,
  blockquote: (props) => <blockquote {...props} className="mdxQuote" />,
  a: (props) => <a {...props} className="textLink" target="_blank" rel="noopener noreferrer" />,
  img: (props) => <img {...props} className="mdxImg" alt={props.alt ?? ''} />
};
