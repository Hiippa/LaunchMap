import React from 'react'
import { Alert } from 'react-native';
/* eslint-disable prettier/prettier */
interface CoordProps {
  latitude: string;
  longitude: string;
  result: React.Dispatch<React.SetStateAction<boolean>>
}

type CoordResposne = boolean | void;

export const checkCoordinates: ({
  latitude,
  longitude,
}: CoordProps) => CoordResposne = function ({
  latitude,
  longitude,
  result
}: CoordProps): CoordResposne {
    // const regexp = new RegExp(/^[+-]?\d{1,3}\.\d{4}$/)
    const regexpLat: RegExp = new RegExp(/^[+-]?[0-8][0-9].\d{4}$/)
    const regexpLong: RegExp = new RegExp(/^([+-]?\d{1,3}[1]?[0-9]?[0-9]?.\d{4})$/)

    console.log(latitude)
    console.log(longitude)

    console.log(Number(latitude))
    console.log(Number(longitude))

    if ((Number(latitude) < 90 && Number(latitude) > -90) && (Number(longitude) < 180 && Number(longitude) > -180)){
        if (regexpLat.test(latitude) && regexpLong.test(longitude)) {
        console.log('lapi')
        return result(true)
        } else { console.log('test2'); result(false); return Alert.alert('Invalid input given!', 'Value must be example\n123.12345\n12.12345\n-123.12345') }
    } else {
      result(false)
      console.log('test1')
      return Alert.alert('Invalid input given!', 'Given value(s) is too big or small.\n\nLatitude must be between 90 to -90.\nLongtitude between 180 to -180')
      
    }
  };
