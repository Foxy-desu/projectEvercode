import { useContext } from 'react';
import MainPage from '../ui/mainPage';
import { WidthContext } from '../../../app/context/widthContext';
import { useStateOnThreshold } from '../../../shared/utils/hooks/useStateOnThreshold';
import { appList } from '../../../app/appData/appList';
import { productsList } from '../../../app/appData/productsList';
import { casesList } from '../../../app/appData/casesList';
import { feedbackCards } from '../../../app/appData/feedbackList';
import { heroImages } from '../../../app/appData/heroSectionImages';

const MainPageContainer = () => {
  const threshold = 704;
  const viewportWidth = useContext(WidthContext);
  const {
    isThresholdReached: isMinimized,
    resetThresholdReached,
    stopReconcilation,
  } = useStateOnThreshold({ value: viewportWidth.width, compareOperator: '<', threshold });

  return (
    <MainPage
      data={{ appList, productsList, casesList, feedbackCards, heroImages }}
      viewportWidth={viewportWidth}
      isMinimized={isMinimized}
      resetThresholdReached={resetThresholdReached}
      stopReconcilation={stopReconcilation}
    />
  );
};

export default MainPageContainer;
