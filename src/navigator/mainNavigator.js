import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfCopyOfCopyOfBlankScreen015917Navigator from '../features/CopyOfCopyOfCopyOfBlankScreen015917/navigator';
import CopyOfCopyOfBlankScreen015916Navigator from '../features/CopyOfCopyOfBlankScreen015916/navigator';
import CopyOfBlankScreen015915Navigator from '../features/CopyOfBlankScreen015915/navigator';
import CopyOfBlankScreen015914Navigator from '../features/CopyOfBlankScreen015914/navigator';
import BlankScreen015913Navigator from '../features/BlankScreen015913/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfCopyOfCopyOfBlankScreen015917: { screen: CopyOfCopyOfCopyOfBlankScreen015917Navigator },
CopyOfCopyOfBlankScreen015916: { screen: CopyOfCopyOfBlankScreen015916Navigator },
CopyOfBlankScreen015915: { screen: CopyOfBlankScreen015915Navigator },
CopyOfBlankScreen015914: { screen: CopyOfBlankScreen015914Navigator },
BlankScreen015913: { screen: BlankScreen015913Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
