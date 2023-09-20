import { log } from "console";
import { FC, useEffect, useState } from "react";

export const CryptoText: FC<{ text: string; hard?: boolean }> = ({
  text,
  hard = false
}) => {
  const [hover, setHover] = useState(false);
  const [renderText, setRenderText] = useState(text);

  const chars = text.split("");

  useEffect(() => {
    // when hover is true, we want to replace the next characters:
    // "a" with "4"
    // "e" with "3"
    // "i" with "1"
    // "o" with "0"

    // when hover is false, we want to replace the next characters:
    // "4" with "a"
    // "3" with "e"
    // "1" with "i"
    // "0" with "o"

    const replacements: any = {
      hard: {
        a: "4",
        e: "3",
        i: "1",
        o: "0",
        s: "5",
        A: "4",
        E: "3",
        I: "1",
        O: "0",
        S: "5"
      },
      soft: {
        e: "3",
        o: "0",
        E: "3",
        O: "0"
      }
    };

    const newChars = chars.map((char: string) => {
      if (hard) {
        if (replacements.hard.hasOwnProperty(char)) {
          return replacements.hard[char];
        } else {
          return char;
        }
      } else {
        if (replacements.soft.hasOwnProperty(char)) {
          return replacements.soft[char];
        } else {
          return char;
        }
      }
    });

    const newText = newChars.join("");

    setRenderText(hover ? newText : text);
  }, [chars, hover, hard, text]);

  return (
    <span
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {renderText}
    </span>
  );
};
