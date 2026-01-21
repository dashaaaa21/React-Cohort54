import { useState } from "react";

function FollowUs() {
  const [activeSocial, setActiveSocial] = useState(null);

  return (
    <section className="relative bg-gradient-to-br from-sky-500 via-sky-400 to-sky-500 text-white py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8">
        </div>

        <h2 className="text-5xl font-bold mb-6">Join Us!</h2>
        <p className="text-xl text-sky-100 mb-12 max-w-2xl mx-auto">
          Follow us on social media. Get news about new clothes and sales.
        </p>

        <div className="bg-white rounded-full p-2 max-w-3xl mx-auto mb-12 flex flex-wrap gap-2 justify-center">
          <button 
            onClick={() => setActiveSocial(activeSocial === 'instagram' ? null : 'instagram')}
            className={`px-8 py-3 rounded-full transition-colors font-medium ${
              activeSocial === 'instagram' 
                ? 'bg-sky-400 text-white' 
                : 'text-gray-700 hover:bg-sky-100'
            }`}
          >
            Instagram
          </button>
          <button 
            onClick={() => setActiveSocial(activeSocial === 'twitter' ? null : 'twitter')}
            className={`px-8 py-3 rounded-full transition-colors font-medium ${
              activeSocial === 'twitter' 
                ? 'bg-sky-400 text-white' 
                : 'text-gray-700 hover:bg-sky-100'
            }`}
          >
            Twitter
          </button>
          <button 
            onClick={() => setActiveSocial(activeSocial === 'linkedin' ? null : 'linkedin')}
            className={`px-8 py-3 rounded-full transition-colors font-medium ${
              activeSocial === 'linkedin' 
                ? 'bg-sky-400 text-white' 
                : 'text-gray-700 hover:bg-sky-100'
            }`}
          >
            LinkedIn
          </button>
          <button 
            onClick={() => setActiveSocial(activeSocial === 'whatsapp' ? null : 'whatsapp')}
            className={`px-8 py-3 rounded-full transition-colors font-medium ${
              activeSocial === 'whatsapp' 
                ? 'bg-sky-400 text-white' 
                : 'text-gray-700 hover:bg-sky-100'
            }`}
          >
            Whatsapp
          </button>
          <button 
            onClick={() => setActiveSocial(activeSocial === 'pinterest' ? null : 'pinterest')}
            className={`px-8 py-3 rounded-full transition-colors font-medium ${
              activeSocial === 'pinterest' 
                ? 'bg-sky-400 text-white' 
                : 'text-gray-700 hover:bg-sky-100'
            }`}
          >
            Pinterest
          </button>
        </div>

        {activeSocial && (
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto mb-8">
            <p className="text-white text-lg">
              Follow us on {activeSocial.charAt(0).toUpperCase() + activeSocial.slice(1)}: <span className="font-bold">@example.com</span>
            </p>
          </div>
        )}

        <p className="text-sky-200 text-sm">©2024, All Right Reserved.</p>
      </div>
    </section>
  );
}

export default FollowUs;
