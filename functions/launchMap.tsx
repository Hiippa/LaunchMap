/* eslint-disable prettier/prettier */
import {Platform, Linking, Alert} from 'react-native';

interface CoordProps {
  latitude: string;
  longitude: string;

}

export const launchMap: ({latitude, longitude}: CoordProps) => any = function ({
  latitude,
  longitude,
}: CoordProps): any {
  const location = `${latitude}, ${longitude}`;
  const url: string | undefined = Platform.select({
    ios: `maps:${location}`,
    android: `geo:${location}?z=10`,
  });
  console.log(url)

  Linking.canOpenURL(url).then(supported => {
    if (!supported){
      Alert.alert('App missing!','Missing Maps App by OS provider')
    } else {
      return Linking.openURL(url)
    }
  })
};
