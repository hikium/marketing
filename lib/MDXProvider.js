import { MDXProvider } from "@mdx-js/react";

const componentOverrides = {
  h1: (props) => <h1 {...props} />,
  h2: (props) => <h2 className="text-2xl pt-5 pb-2" {...props} />,
  h3: (props) => <h3 className="text-lg font-sans" {...props} />,
  p: (props) => <p className="my-2" {...props} />,
  ul: (props) => <ul className="my-2 pl-5 list-disc" {...props} />,
  ol: (props) => <ol className="my-2 pl-5 list-decimal" {...props} />,
  code: (props) => <code className="font-mono text-sm" {...props} />,
};

export default function MDXProviderComponent({ children }) {
  return <MDXProvider components={componentOverrides}>{children}</MDXProvider>;
}
