import { useState } from 'react';

export default function useSleepState() {
  const [isSleeping, setIsSleeping] = useState(0);

  return { isSleeping, setIsSleeping };
}
