"use client";
import { useState } from "react";
import { FiX } from "react-icons/fi";

export default function Form1({ closePopup }) {
  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleClose = () => {
    setIsFormVisible(false);
    closePopup(); // Close the newsletter when the close button is clicked
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    handleClose();
  };

  if (!isFormVisible) {
    return null; // Hide form when closed
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.9)', // Dark semi-transparent background
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
    >
      {/* Form Container */}
      <div
        style={{
          position: 'relative',
          width: '90%',
          maxWidth: '500px',
          backgroundColor: '#141414', // Dark background for the form
          borderRadius: '15px',
          padding: '40px 20px',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)',
          textAlign: 'center',
          animation: 'fadeIn 0.5s',
          opacity: 0.95,
        }}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <FiX size={28} color="#ffffff" />
        </button>

        {/* Form Content */}
        <h3 style={{ fontWeight: 'bold', fontSize: '1.8rem', color: '#ffffff' }}>
          Join Our Tech Community!
        </h3>
        <p style={{ color: '#ccc', fontSize: '0.9rem', marginBottom: '25px' }}>
          Subscribe for the latest tech insights, updates, and exclusive offers from SquareCom IT Solutions.
        </p>

        <form onSubmit={handleSubmit} style={{ marginBottom: '25px' }}>
          <label htmlFor="email" style={{ display: 'none' }}>Email address</label>
          <input
            id="email"
            name="email"
            placeholder="Your email address"
            type="email"
            required
            style={{
              padding: '12px 15px',
              borderRadius: '30px',
              border: '1px solid #444',
              fontSize: '0.9rem',
              width: '100%',
              marginBottom: '10px',
              backgroundColor: '#3A3A3A',
              color: '#ffffff',
            }}
          />
          <button
            type="submit"
            style={{
              padding: '12px 20px',
              borderRadius: '30px',
              backgroundColor: '#007BFF', // Bright blue for contrast
              border: 'none',
              color: '#ffffff',
              fontSize: '0.9rem',
              width: '100%',
              transition: 'background-color 0.3s',
              fontWeight: 'bold',
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#007BFF')}
          >
            Subscribe Now
          </button>
        </form>

        <p style={{ fontSize: '0.75rem', color: '#ccc' }}>
          By subscribing, you agree to our{' '}
          <a href="/terms&condition" style={{ color: '#007BFF' }}>
            Terms & Conditions
          </a>{' '}
          and{' '}
          <a href="/privacypolicy" style={{ color: '#007BFF' }}>
            Privacy Policy
          </a>.
        </p>
      </div>

      {/* Fade-in animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
