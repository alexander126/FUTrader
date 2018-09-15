import { NavigationActions, StackActions } from 'react-navigation';

export const navigateTo = (navigation, path, settings = {}) => {
  if (navigation && path) {
    navigation.navigate(path, {
      settings
    });
  }
};

export const resetStack = (navigation, path = 'Tabs') => {
  const navigationAction = StackActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({
        routeName: path
      })
    ]
  });

  navigation.dispatch(navigationAction);
};
