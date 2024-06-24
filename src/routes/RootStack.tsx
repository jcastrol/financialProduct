import {
  NativeStackNavigationOptions,
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import ProductsView from '../pages/Product/ProductsView';
import ProductDetailView from '../pages/Product/ProductDetailView';
import ProductCreateView from '../pages/Product/ProductCreateView';
import ProductUpdateView from '../pages/Product/ProductUpdateView';
import { Product } from '../core/models/Product';
export enum NavigationRoutes {
  Products = 'Products',
  ProductDetail = 'ProductDetail',
  ProductCreate = 'ProductCreate',
  ProductUpdate = 'ProductUpdate',
}

export type RootStackParamList = {
  [NavigationRoutes.Products]: undefined;
  [NavigationRoutes.ProductDetail]: {productId: string};
  [NavigationRoutes.ProductCreate]: undefined;
  [NavigationRoutes.ProductUpdate]: {product: Product};
};
export type RootStackScreenProps<T extends keyof RootStackParamList> =
NativeStackScreenProps<RootStackParamList, T>;

type Props = NativeStackScreenProps<RootStackParamList>;

export type ProductScreenNavigationProp = Props['navigation'];

export type ProductScreenRouteProp<T extends keyof RootStackParamList> = RootStackScreenProps<T>['route'];

const Stack = createNativeStackNavigator<RootStackParamList>();

const options: NativeStackNavigationOptions = {
  headerShown: false,
};

export function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={options}
      initialRouteName={NavigationRoutes.Products}>
      <Stack.Screen name={NavigationRoutes.Products} component={ProductsView} />
      <Stack.Screen
        name={NavigationRoutes.ProductDetail}
        component={ProductDetailView}
      />
      <Stack.Screen
        name={NavigationRoutes.ProductCreate}
        component={ProductCreateView}
      />
      <Stack.Screen
        name={NavigationRoutes.ProductUpdate}
        component={ProductUpdateView}
      />
    </Stack.Navigator>
  );
}
