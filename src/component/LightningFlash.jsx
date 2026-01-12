import { useEffect, useState } from "react";

const LightningFlash = () => {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setOn(true);
      setTimeout(() => setOn(false), 100);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    on && <div className="fixed inset-0 bg-white opacity-80 z-10" />
  );
};

export default LightningFlash;
