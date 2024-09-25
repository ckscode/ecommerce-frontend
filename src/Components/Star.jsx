import React from 'react';

// Star component that renders filled or empty star based on condition
const Star = ({ filled,half }) => {
    if (half) {
        return (
          <span style={{ color: '#FFD700', fontSize: '24px' }}>
            ☆ {/* Unicode for empty star */}
          </span>
        );
      }
      
      return (
        <span style={{ color: filled ? '#FFD700' : '#ccc', fontSize: '24px' }}>
          ★
        </span>
      );
};

// StarRating component to display the rating value out of 5
const StarRating = ({ rating }) => {
  const totalStars = 5;
  
  // Render stars based on the rating value
  return (
    <div>
        {Array.from({ length: totalStars }, (v, i) => {
        const half = rating - i === 0.5; // Check for half stars
        return <Star key={i} filled={i < rating} half={half} />;
      })}
    </div>
  );
};

export default StarRating;
