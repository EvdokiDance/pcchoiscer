import { useAppDispatch, useAppSelector } from "../hooks/useRedux";

export const handleRangeInput = ({currentMin, currentMax, min, max}) => {



    currentMin = Number(currentMin);
    currentMax = Number(currentMax);


    if (currentMin < currentMax) {
      console.log('1');
      
      currentMax = min;
    //   dispatch(changeCurrentMax(rangeInputData.min))
    }
  
    if (currentMax > max) {
      console.log('2');
      currentMax = max;
    //   dispatch(changeCurrentMax(max));
    }
  
  
    if (currentMin < min) {
      console.log('3');
  
      currentMin = min;
    //   dispatch(changeCurrentMin(min))
    }
  
    if (currentMin > max) {
      console.log('4');
      currentMin= max;
    //   dispatch(changeCurrentMin(max));
    }
  
  
    
    if (currentMax < currentMin) {
  
    
    //   dispatch(changeCurrentMin(currentMax))
    //   dispatch(changeCurrentMax(currentMin))
      
      let temp = currentMin;
        currentMin = currentMax;
        currentMax = temp;
      
    }


    currentMin = String(currentMin)
    currentMax = String(currentMax);


  return {currentMin, currentMax}
}
