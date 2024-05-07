//-------------IN_USER-------------------
export const selectUser = state => state.user.user;

//-------------OUT_USER------------------
export const selectIsLoggedIn = state => state.user.isLoggedIn;

export const selectIsLoading = state => state.user.isLoading;

export const selectToken = state => state.user.token;

export const selectBMR = state => state.user.bmr;

export const selectDailyRateSports = state => state.user.dailyRateSports;
