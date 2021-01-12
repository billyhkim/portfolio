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
    <div className="py-5">
      <SyntaxHighlighter language={language} style={nord}>
        {value}
      </SyntaxHighlighter>
    </div>
  );
};

export default function Post({ content, frontmatter }) {
  return (
    <article>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <div className="text-3xl font-semibold mt-3">
        <div className="text-gray-800">
          <span className="text-gray-400">{frontmatter.id} </span>
          {frontmatter.title}
        </div>
      </div>
      <div className="my-2 text-gray-700">{frontmatter.description}</div>
      <div className="mb-4 sm:mb-12 text-base font-light">
        {frontmatter.date}
      </div>
      <ReactMarkdown
        className="text-base leading-7"
        escapeHtml={false}
        source={content}
        renderers={{ code: CodeBlock }}
      />
      <Link href="/journal/">
        <a className="inline-block font-thin tracking-wider a_no-underline bg-gray-300 p-1 rounded-md mt-12">
          ⭠BACK
        </a>
      </Link>
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
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  };
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
