import React, { useState, useTransition } from 'react';

function UseTransition() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('about');

  const handleTabClick = (newTab: string) => {
    startTransition(() => {
      setTab(newTab);
    });
  };

  return (
    <div className="p-5 max-w-200 mx-auto">
      <h2 className="text-2xl font-bold mb-4">useTransition Hook - Tab Switching</h2>
      <p className="text-gray-600 text-sm mb-5">
        Click different tabs to see smooth transitions. useTransition marks tab changes as non-urgent,
        keeping the UI responsive even with slow content.
      </p>

      <div className="mb-6">
        <div className="flex gap-2 border-b border-gray-300">
          <button
            onClick={() => handleTabClick('about')}
            className={`px-6 py-3 font-medium transition-colors ${
              tab === 'about'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-600 hover:text-blue-500'
            }`}
          >
            About
          </button>
          <button
            onClick={() => handleTabClick('posts')}
            className={`px-6 py-3 font-medium transition-colors ${
              tab === 'posts'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-600 hover:text-blue-500'
            }`}
          >
            Posts
          </button>
          <button
            onClick={() => handleTabClick('contact')}
            className={`px-6 py-3 font-medium transition-colors ${
              tab === 'contact'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-600 hover:text-blue-500'
            }`}
          >
            Contact
          </button>
        </div>

        {isPending && (
          <div className="mt-3 text-blue-600 font-medium text-sm">
            Loading content...
          </div>
        )}
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6 min-h-96">
        {tab === 'about' && (
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">About</h3>
            <p className="text-gray-700 leading-relaxed">
              This is the About section. It contains information about our company, mission, and values.
              We are committed to delivering excellent products and services to our customers.
            </p>
            {/* Simulate slow rendering */}
            <div className="mt-6 grid grid-cols-10 gap-1">
              {Array.from({ length: 100 }, (_, i) => (
                <div key={i} className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center text-xs text-blue-700">
                  {i}
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 'posts' && (
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Posts</h3>
            <p className="text-gray-700 leading-relaxed">
              This is the Posts section. Here you can find our latest blog posts, articles, and updates.
              Stay tuned for more interesting content from our team.
            </p>
            {/* Simulate slow rendering */}
            <div className="mt-6 grid grid-cols-10 gap-1">
              {Array.from({ length: 100 }, (_, i) => (
                <div key={i} className="w-8 h-8 bg-green-100 rounded flex items-center justify-center text-xs text-green-700">
                  {i}
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 'contact' && (
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Contact</h3>
            <p className="text-gray-700 leading-relaxed">
              This is the Contact section. Feel free to reach out to us via email, phone, or visit our office.
              We'd love to hear from you and answer any questions you may have.
            </p>
            {/* Simulate slow rendering */}
            <div className="mt-6 grid grid-cols-10 gap-1">
              {Array.from({ length: 100 }, (_, i) => (
                <div key={i} className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center text-xs text-purple-700">
                  {i}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UseTransition;
