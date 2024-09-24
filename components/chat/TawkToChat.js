// components/WebBokoChat.js
import { useEffect } from 'react';

const WebBokoChat = () => {
  useEffect(() => {
    // Initialize the WebBoko widget
    try {
      var WebBoko_API = WebBoko_API || {};
      WebBoko_API.secret_key = 'bd100339d3d0597e7c2e57eb6507c6adc4ea9b9d3ac158c7999dd702d9c782c731186128c547da4cf57d9b7267b7b214';  // Use your secret key here

      // Add script dynamically to the document
      var s1 = document.createElement('script');
      var s0 = document.getElementsByTagName('script')[0];
      s1.async = true;
      s1.src = 'https://nexura.ae';  // Assuming this is your WebBoko endpoint URL
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    } catch (error) {
      console.error("WebBoko widget failed to load:", error);
    }
  }, []);

  return null;
};

export default WebBokoChat;
