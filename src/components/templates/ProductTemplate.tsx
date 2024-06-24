import {SafeAreaView, StatusBar,  View, useColorScheme, useWindowDimensions} from 'react-native';
import Header from '../atoms/Header';
import { useNavigation } from '@react-navigation/native';
import { NavigationRoutes, ProductScreenNavigationProp } from '../../routes/RootStack';
import { useCallback } from 'react';
type Props = {
  children: React.ReactNode;
};

const ProductTemplate = (props: Props) => {
  const navigation = useNavigation<ProductScreenNavigationProp>();
 
  const {height} = useWindowDimensions();
  const backgroundStyle = {
    backgroundColor:  '#fefefe',
  };
  const handleGoHome = useCallback(() => {
    navigation.navigate(NavigationRoutes.Products);
  }, [navigation]);
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={'light-content' }
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Header  goHome={handleGoHome}/>
      <View style={{height:height-50, width: '100%'}}>{props.children}</View>
    </SafeAreaView>
  );
};

export default ProductTemplate;
