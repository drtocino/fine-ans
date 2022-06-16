import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';
import S from './components/Styles'

export default function App() {
  return (
    <View style={[S.textCenter,S.ptDock]}>
      <View style={[S.bgOrange400,S.textCenter,S.p3]}>
        <Text>196 Bs</Text>
      </View>
      <StatusBar  />
      <Text>asd</Text>
      <TouchableOpacity style={[S.bgBlue600,S.px8,S.py3,S.roundedCircle,S.textWhite]}>
        <Text style={[S.textWhite,S.fontBold,S.text4Xl]}>$</Text>
      </TouchableOpacity>
    </View>
  );
}