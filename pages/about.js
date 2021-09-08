import SEO from '../components/SEO';
import { FcDocument } from 'react-icons/fc';

export default function About() {
  return (
    <>
      <SEO title="About" />
      <div className="mb-12 text-4xl font-light">
        <span className="text-red-400">—</span> About
      </div>
      <div className="text-base leading-8 mb-12">
        <p>
          I'm Billy Kim, a software engineer with a background in non-profit
          leadership. I'm inspired by delightful design, fascinated by
          fundamentals, and love all things golf.
        </p>
        <p>
          I work mostly with JavaScript + React and started writing with the
          hope of journaling digestable-sized portions of what I'm learning.
        </p>
        <p>
          Currently working at{' '}
          <a href="https://dave.com/" target="_blank" rel="noopener noreferrer">
            Dave
          </a> - Banking for Humans.
        </p>
      </div>
      <hr />
      <div className="mt-12 mb-6 text-2xl">
        Currently Working Through <FcDocument />
      </div>
      <div className="text-base leading-8">
        <div>
          {/* <input type="checkbox" disabled /> if (Bootstrap === 👍🏼){' '}
          <span className="text-red-600">return</span> Tailwind; */}
          <input type="checkbox" disabled checked /> Tailwind CSS
        </div>
        <div>
          <input type="checkbox" disabled checked /> Thinking Gatsby vs. Next
        </div>
        <div>
          <input type="checkbox" disabled checked /> Animating with Framer
          Motion: Route Transitions
        </div>
        <div>
          <input type="checkbox" disabled /> Kent C. Dodds React Tutorial
        </div>
        <div>
          <input type="checkbox" disabled checked /> Thinking About Transition
          Durations
        </div>
        <div>
          <input type="checkbox" disabled /> State Management: Zustand
        </div>
        <div>
          <input type="checkbox" disabled checked /> Serverless on Netlify
          Functions
        </div>
        <div>
          <input type="checkbox" disabled checked /> Simple Clock Component
        </div>
      </div>
    </>
  );
}
