const ShootingStars = () => (
  <div className="shooting-stars">
    {[...Array(5)].map((_, i) => (
      <span
        key={i}
        style={{
          top: `${Math.random() * 50}%`,
          left: `${50 + Math.random() * 50}%`,
        }}
      />
    ))}
  </div>
);

export default ShootingStars;
