// components/TawkToChat.js
import { useEffect } from 'react';

const TawkToChat = () => {
  useEffect(() => {
    // Initialize the Tawk.to chat widget
    var Tawk_API = Tawk_API || {};
    var Tawk_LoadStart = new Date();
    (function() {
      var s1 = document.createElement('script');
      s1.src = 'https://embed.tawk.to/YOUR_PROPERTY_ID/default';
      s1.async = true;
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      document.head.appendChild(s1);
    })();
  }, []);

  return null;
};

export default TawkToChat;
