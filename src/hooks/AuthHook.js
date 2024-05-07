import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsLoading,
  selectBMR,
  selectDailyRateSports,
  selectToken,
} from '../redux/user/userSelectors';

export const useHook = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);
  const bmr = useSelector(selectBMR);
  const dailyRateSports = useSelector(selectDailyRateSports);
  const token = useSelector(selectToken);

  return {
    user,
    isLoggedIn,
    isLoading,
    bmr,
    dailyRateSports,
    token,
  };
};
