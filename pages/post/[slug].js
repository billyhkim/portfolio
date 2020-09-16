import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown/with-html';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism/';

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter language={language} style={nord}>
      {value}
    </SyntaxHighlighter>
  );
};

export default function Post({ content, frontmatter }) {
  return (
    <article>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || post.excerpt}
      />
      <Link href="/journal/">
        <a className="inline-block font-thin tracking-wider a_no-underline">
          ⭠BACK
        </a>
      </Link>
      <div className="text-4xl font-semibold my-3">
        <div className="text-gray-800">
          <span className="text-gray-400">{frontmatter.id} </span>
          {frontmatter.title}
        </div>
      </div>
      <div className="mb-4 sm:mb-12 text-sm font-light">{frontmatter.date}</div>
      <ReactMarkdown
        className="text-base md:text-lg leading-7"
        escapeHtml={false}
        source={content}
        renderers={{ code: CodeBlock }}
      />
    </article>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync('content/posts');

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMetadata = fs
    .readFileSync(path.join('content/posts', slug + '.md'))
    .toString();

  const { data, content } = matter(markdownWithMetadata);

  // Convert post date to format: Month day, Year
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = data.date.toLocaleDateString('en-US', options);

  const frontmatter = {
    ...data,
    date: formattedDate,
  };

  return {
    props: {
      content: `${content}`,
      frontmatter,
    },
  };
}
