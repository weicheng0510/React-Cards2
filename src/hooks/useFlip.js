import { useState } from "react";

function useFlip(init = true) {
  const [isFlipped, setFlipped] = useState(init);
  const flip = () => {
    setFlipped(isUp => !isUp);
  }
  return [isFlipped, flip];
}

export default useFlip;