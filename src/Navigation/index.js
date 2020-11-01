import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Introduction from "@pages/Introduction";
import SignLogin from "@pages/SignLogin";
import SignUp from "@pages/SignUp";
import Login from "@pages/Login";
import ForgetPassword from "@pages/ForgetPassword";
import ChangePassword from "@pages/ChangePassword";
import Verification from "@pages/Verification";
import VerificationSign from "@pages/VerificationSign";
import HomePage from "@pages/HomePage";
import SelectDate from "@pages/SelectDate";
import SearchResults from "@pages/SearchResults";
import ProductDetails from "@pages/ProductDetails";
import PropertyFacilities from "@pages/PropertyFacilities";
import PropertyPolicies from "@pages/PropertyPolicies";
import MyBooking from "@pages/MyBooking";
import PaymentMethod from "@pages/PaymentMethod";
import CreditCard from "@pages/CreditCard";
import Checkout from "@pages/Checkout";
import TermsConditions from "@pages/TermsConditions";
import PrivacyPolicy from "@pages/PrivacyPolicy";
import About from "@pages/About";
import languageSelection from "@pages/languageSelection";
import Settings from "@pages/Settings";
import Notification from "@pages/Notification";
import MyProfile from "@pages/MyProfile";
import Favorite from "@pages/Favorite";
import SuccessfulConfirmation from "@pages/SuccessfulConfirmation";
import AddReview from "@pages/AddReview";
import FarmGallery from "@pages/FarmGallery"

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator>

      <Stack.Screen name="Introduction" options={{ headerShown: false }} component={Introduction} />
      <Stack.Screen name="SignLogin" options={{ headerShown: false }} component={SignLogin} />
      <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
      <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUp} />
      <Stack.Screen name="VerificationSign" options={{ headerShown: false }} component={VerificationSign} />
      <Stack.Screen name="Verification" options={{ headerShown: false }} component={Verification} /> 
      <Stack.Screen name="ChangePassword" options={{ headerShown: false }} component={ChangePassword} />
      <Stack.Screen name="ForgetPassword" options={{ headerShown: false }} component={ForgetPassword} />
      <Stack.Screen name="HomePage" options={{ headerShown: false }} component={HomePage} />
      <Stack.Screen name="SelectDate" options={{ headerShown: false }} component={SelectDate} />
      <Stack.Screen name="SearchResults" options={{ headerShown: false }} component={SearchResults} />
      <Stack.Screen name="ProductDetails" options={{ headerShown: false }} component={ProductDetails} />
      <Stack.Screen name="FarmGallery" options={{ headerShown: false }} component={FarmGallery} />
      <Stack.Screen name="PropertyPolicies" options={{ headerShown: false }} component={PropertyPolicies} />
      <Stack.Screen name="PropertyFacilities" options={{ headerShown: false }} component={PropertyFacilities} />
      <Stack.Screen name="TermsConditions" options={{ headerShown: false }} component={TermsConditions} />
      <Stack.Screen name="PrivacyPolicy" options={{ headerShown: false }} component={PrivacyPolicy} />
      <Stack.Screen name="About" options={{ headerShown: false }} component={About} />
      <Stack.Screen name="AddReview" options={{ headerShown: false }} component={AddReview} />
      <Stack.Screen name="Checkout" options={{ headerShown: false }} component={Checkout} /> 
      <Stack.Screen name="CreditCard" options={{ headerShown: false }} component={CreditCard} />
      <Stack.Screen name="Favorite" options={{ headerShown: false }} component={Favorite} />
      <Stack.Screen name="languageSelection" options={{ headerShown: false }} component={languageSelection} />
      <Stack.Screen name="MyBooking" options={{ headerShown: false }} component={MyBooking} />
      <Stack.Screen name="MyProfile" options={{ headerShown: false }} component={MyProfile} />
      <Stack.Screen name="Notification" options={{ headerShown: false }} component={Notification} /> 
      <Stack.Screen name="SuccessfulConfirmation" options={{ headerShown: false }} component={SuccessfulConfirmation} /> 
      <Stack.Screen name="PaymentMethod" options={{ headerShown: false }} component={PaymentMethod} />        
      <Stack.Screen name="Settings" options={{ headerShown: false }} component={Settings} />  
      
    </Stack.Navigator>  
  );
}

