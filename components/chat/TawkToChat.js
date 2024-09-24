import { useEffect } from 'react';  // Import useEffect

const WebBokoChat = () => {
  useEffect(() => {
    console.log("Initializing WebBoko chat widget..."); // Add a log to check if this code runs
    
    try {
      var WebBoko_API = WebBoko_API || {};
      WebBoko_API.secret_key = 'bd100339d3d0597e7c2e57eb6507c6adc4ea9b9d3ac158c7999dd702d9c782c731186128c547da4cf57d9b7267b7b214';

      var s1 = document.createElement('script');
      var s0 = document.getElementsByTagName('script')[0];
      s1.async = true;
      s1.src = 'https://nexura.ae';  // Verify if this URL is correct for loading the widget
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s1.onload = () => console.log("WebBoko script loaded successfully.");  // Log when the script loads
      s1.onerror = () => console.error("Failed to load WebBoko script.");  // Log if there's an error loading the script
      s0.parentNode.insertBefore(s1, s0);
    } catch (error) {
      console.error("WebBoko widget initialization error: ", error);
    }
  }, []);

  return null;
};

export default WebBokoChat;
