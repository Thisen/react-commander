import { useCallback, useEffect, useRef } from "react";

export function useGetCompositionEventState() {
  const isWindowComposing = useRef(false);

  const handleCompositionStart = useCallback(() => {
    isWindowComposing.current = true;
  }, [isWindowComposing]);

  const handleCompositionEnd = useCallback(() => {
    isWindowComposing.current = false;
  }, [isWindowComposing]);

  useEffect(() => {
    window.addEventListener("compositionstart", handleCompositionStart);
    window.addEventListener("compositionend", handleCompositionEnd);

    return () => {
      window.removeEventListener("compositionstart", handleCompositionStart);
      window.removeEventListener("compositionend", handleCompositionEnd);
    };
  }, [handleCompositionStart, handleCompositionEnd]);

  return (event: KeyboardEvent) => {
    return event.isComposing || isWindowComposing.current;
  };
}
