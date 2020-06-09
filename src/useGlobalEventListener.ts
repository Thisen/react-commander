import { useEffect, useRef } from "react";

export function useGlobalEventListener<K extends keyof WindowEventMap>(
  eventName: K,
  eventListener: (event: WindowEventMap[K]) => unknown
) {
  const savedHandler = useRef(eventListener);

  useEffect(() => {
    savedHandler.current = eventListener;
  }, [eventListener]);

  useEffect(() => {
    window.addEventListener(eventName, eventListener);

    return () => {
      window.removeEventListener(eventName, eventListener);
    };
  });
}
