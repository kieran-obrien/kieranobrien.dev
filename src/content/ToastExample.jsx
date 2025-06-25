import { useEffect, useState } from "react";

export default function ToastExample() {
  const [visible, setVisible] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 3000);
  }, []);

  const handleClick = () => {
    setIsFading(true);
  };

  useEffect(() => {
    if (isFading) {
      const timeout = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isFading]);

  return (
    visible && (
      <div className="fixed bottom-4 right-4 z-50">
        <div
          className={`toast transition-opacity duration-300 ease-in-out ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="alert bg-[var(--primary)] text-[var(--bg)]">
            <i class="ri-emotion-line text-2xl"></i>
            <span>
              Want to work with me? Reach out at:{" "}
              <a href="mailto:hello@kieranobrien.dev">hello@kieranobrien.dev</a>
            </span>
            <button
              className="btn btn-sm btn-circle btn-ghost hover:bg-[var(--secondary)] border-none"
              onClick={handleClick}
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    )
  );
}
