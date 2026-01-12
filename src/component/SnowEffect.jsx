const SnowEffect = () => (
  <div className="snow">
    {[...Array(30)].map((_, i) => (
      <span
        key={i}
        style={{
          left: `${Math.random() * 100}%`,
          animationDuration: `${3 + Math.random() * 3}s`,
        }}
      />
    ))}
  </div>
);

export default SnowEffect;
