import { useState, useEffect } from "react";

const helloWorldTranslations = {
  English: "Hello, world!",
  Chinese: "你好，世界！",
  Spanish: "¡Hola, mundo!",
  Portuguese: "Olá, mundo!",
  Russian: "Привет, мир!",
  Japanese: "こんにちは、世界！",
  German: "Hallo, Welt!",
  French: "Bonjour, le monde!",
  Korean: "안녕하세요, 세계!",
  Italian: "Ciao, mondo!",
  Dutch: "Hallo, wereld!",
};

function TypewriterHeading() {
  const helloWorldKeys = Object.keys(helloWorldTranslations);
  const [displayText, setDisplayText] = useState("");
  const [langIndex, setLangIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isCursorBlinking, setIsCursorBlinking] = useState(null);

  useEffect(() => {
    const currentWord = `${helloWorldTranslations[helloWorldKeys[langIndex]]}`;
    let typingSpeed = isDeleting ? 35 : 120;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        setCharIndex(charIndex + 1);
        setDisplayText(currentWord.substring(0, charIndex + 1));
      } else if (isDeleting && charIndex > 0) {
        setIsCursorBlinking(null)
        setCharIndex(charIndex - 1);
        setDisplayText(currentWord.substring(0, charIndex - 1));
      } else {
        if (!isDeleting) {
          setIsCursorBlinking("blinking")
          setTimeout(() => setIsDeleting(true), 1000); // pause when fully typed
        } else {
          setIsDeleting(false);
          setLangIndex((langIndex + 1) % helloWorldKeys.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, langIndex]);

  return (
    <h1 className="text-pretty">
      {displayText}
      <span className={`caret-${isCursorBlinking}`}>|</span>
    </h1>
  );
}

export default TypewriterHeading;
