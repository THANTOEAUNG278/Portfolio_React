const RainEffect = () => (
  <div className="rain">
    {[...Array(40)].map((_, i) => (
      <span
        key={i}
        style={{
          left: `${Math.random() * 100}%`,
          animationDuration: `${0.5 + Math.random()}s`,
        }}
      />
    ))}
  </div>
);

export default RainEffect;
