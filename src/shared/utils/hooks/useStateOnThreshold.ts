import { SetStateAction, useEffect, useState } from "react";

interface TCheckTHProps {
  value:number,
  compareOperator:string,
  threshold:number,
  reconcilation?: boolean;
};
  
export const useStateOnThreshold =({value, compareOperator, threshold, reconcilation=true}:TCheckTHProps)=> {
  function checkThreshold({...args}:Omit<TCheckTHProps, 'reconcilation'>){
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
  };
  const [isThresholdReached, setIsThresholdReached] = useState<SetStateAction<void | boolean>>(()=>{
    checkThreshold({value, compareOperator, threshold})
  });
  function resetThresholdReach(){
    setIsThresholdReached(false);
  }

  useEffect(()=>{
    setIsThresholdReached(checkThreshold({value, compareOperator, threshold}))
  }, [reconcilation || value > threshold? value : null]);

  return {
    isThresholdReached,
    resetThresholdReach,
  };
}