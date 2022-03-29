import React from 'react';
import { Link, graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

export default function PageTemplate({ data: { mdx } }) {
  return (
    <>
        <div>
        <MDXProvider>
            <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
        </div>
    </>
  );
}

export const pageQuery = graphql`
query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date
        author
        preview
        keywords
      }
      timeToRead
    }
  }
`;