import { SetStateAction, useEffect, useState } from 'react';

interface TCheckTHProps {
  value: number;
  compareOperator: string;
  threshold: number;
}

export const useStateOnThreshold = ({ value, compareOperator, threshold }: TCheckTHProps) => {
  function checkThreshold({ ...args }: Omit<TCheckTHProps, 'reconcilation'>) {
    switch (args.compareOperator) {
      case '>':
        return args.value > args.threshold;
      case '>=':
        return args.value >= args.threshold;
      case '<':
        return args.value < args.threshold;
      case '<=':
        return args.value <= args.threshold;
      default:
        throw new Error('Invalid compare operator');
    }
  }
  const [isThresholdReached, setIsThresholdReached] = useState<SetStateAction<void | boolean>>(() => {
    checkThreshold({ value, compareOperator, threshold });
  });
  const [reconcilate, setReconcilate] = useState(true);

  function resetThresholdReached() {
    setIsThresholdReached(false);
  }
  function stopReconcilation() {
    setReconcilate(false);
  }

  useEffect(() => {
    if (reconcilate) {
      setIsThresholdReached(checkThreshold({ value, compareOperator, threshold }));
    }
  }, [value, reconcilate]);

  return {
    isThresholdReached,
    resetThresholdReached,
    stopReconcilation,
  };
};
