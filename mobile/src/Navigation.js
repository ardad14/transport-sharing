import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

 
import EntryPage from './EntryPage/EntryPage';
import BicyclePage from './BicyclePage/BicyclePage';
 
const Nvigatator = createStackNavigator({
   EntryPage: {
       screen: EntryPage,
       navigationOptions: {
           title: 'Главная'
       }
   },
   BicyclePage: {
       screen: BicyclePage,
       navigationOptions: {
        title: 'Велосипеды'
    }
   }
},
);
 
export default createAppContainer(Nvigatator);