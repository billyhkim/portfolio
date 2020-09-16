import Link from 'next/link';
import fs from 'fs';
import matter from 'gray-matter';

export default function Journal({ posts }) {
  console.log(process.env.NEXT_PUBLIC_GA_TRACKING_ID);
  return (
    <>
      <div className="mb-12 text-4xl font-thin">
        <span className="text-red-400">—</span> Journal
      </div>
      {posts
        .map(
          ({
            frontmatter: { id, title, description, date, wordCount },
            slug,
          }) => (
            <Link key={slug} href={'/post/[slug]'} as={`/post/${slug}`}>
              <a>
                <article className="hover:bg-gray-300 p-4 rounded-lg transition-all duration-200">
                  <header className="text-2xl font-semibold mb-1">
                    <div className="text-gray-800">
                      <span className="text-gray-400">{id} </span>
                      {title}
                    </div>
                  </header>
                  <section>
                    <div className="text-sm font-light text-gray-800">
                      {date} • {Math.ceil(wordCount / 230)} min read
                    </div>
                    <div className="my-1 text-lg font-light text-gray-800">
                      {description}
                    </div>
                  </section>
                </article>
              </a>
            </Link>
          )
        )
        .reverse()}
    </>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/content/posts`);

  const posts = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`content/posts/${filename}`)
      .toString();

    const { data } = matter(markdownWithMetadata);

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
      slug: filename.replace('.md', ''),
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
