import SEO from '../components/SEO';
import { FcDocument } from 'react-icons/fc';

export default function About() {
  return (
    <>
      <SEO title="About" />
      <div className="mb-12 text-4xl">
        <span className="text-red-400">—</span> About
      </div>
      <div className="text-base leading-8 mb-12">
        <p>
          I'm Billy Kim, a web developer with a background in non-profit
          leadership. I'm inspired by delightful design, fascinated by
          fundamentals, and passionate about all things golf.
        </p>
        <p>
          I work mostly with JavaScript + React and started writing with the
          hope of journaling digestable-sized portions of what I'm learning.
        </p>
        <p>
          Currently working at{' '}
          <a
            href="https://ekkochurch.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ekko Church
          </a>{' '}
          in Orange County, CA.
        </p>
      </div>
      <hr />
      <div className="mt-12 mb-6 text-2xl">
        Future Posts <FcDocument />
      </div>
      <ul className="text-base leading-8">
        <li>CSS Grid</li>
        <li>
          if (Bootstrap === 👍🏼 ) <span className="text-red-600">return</span>{' '}
          Tailwind;
        </li>
        <li>Gatsby vs. Next</li>
        <li>Code Challenges: Finding Duplicates</li>
        <li>Code Challenges: Character Map — My Favorite Tool</li>
        <li>Animating with Framer Motion: Route Transitions</li>
        <li>Tutorials Have Their Place</li>
        <li>Thinking Transition Durations</li>
        <li>State Management: Zustand</li>
      </ul>
    </>
  );
}
