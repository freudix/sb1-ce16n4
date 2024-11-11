import React, { useEffect } from 'react';

declare global {
  interface Window {
    Twitch?: any;
  }
}

const LiveStream = () => {
  useEffect(() => {
    if (window.Twitch) {
      new window.Twitch.Embed("twitch-embed", {
        width: "100%",
        height: "100%",
        channel: "freudixstudio",
        parent: [window.location.hostname],
        layout: "video"
      });
    }
  }, []);

  return (
    <section className="bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="aspect-video relative rounded-xl overflow-hidden bg-gray-800">
          <div id="twitch-embed" className="w-full h-full"></div>
        </div>
      </div>
    </section>
  );
};

export default LiveStream;