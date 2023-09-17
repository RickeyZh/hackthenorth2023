import { useState } from 'react';

export function useSleepState() {
  const [isSleeping, setIsSleeping] = useState(0);

  return { isSleeping, setIsSleeping };
}
