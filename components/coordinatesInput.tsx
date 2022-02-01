/* eslint-disable prettier/prettier */
import React, { useState, FC, useEffect } from 'react';
import { TextInput, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { checkCoordinates } from '../functions/coordinateCheck';
import { launchMap } from '../functions/launchMap';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface CoordProps extends React.ReactElement<any> {
    latitude: string
    longitude: string
    icon: string
    placeholderLat: string
    placeholderLong: string
}

export const CoordinatesInput: FC<CoordProps> = ({ icon, placeholderLat, placeholderLong }: CoordProps): JSX.Element => {
    const [latitude, setLatitude] = useState<string>('');
    const [longitude, setLongitude] = useState<string>('');
    const [result, setResult] = useState<boolean>(false);

    useEffect(() => {
        switch (result) {
            case true:
                launchMap({ latitude: latitude, longitude: longitude });
                setResult(false)
               
                break;
            case false:
                return setResult(false);

        };
    }, [result]);

    return (

        <View style={styles.maincont}>
            <Ionicons name={icon} size={33} color="green" style={styles.icon} />
            <View style={styles.container}>
                <TextInput
                    keyboardType="numeric"
                    style={styles.input}
                    placeholder={placeholderLat}
                    onChangeText={text => setLatitude(text)}
                />
            </View>
            <View style={styles.container}>
                <TextInput
                    keyboardType="numeric"
                    style={styles.input}
                    placeholder={placeholderLong}
                    onChangeText={text => setLongitude(text)}
                />
            </View>
            <TouchableOpacity style={styles.checkButton} onPress={() => checkCoordinates({ latitude: latitude, longitude: longitude, result: setResult })}>
                <Text>Submit</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    maincont: {
        padding: 10,     
        borderColor: 'black',
        margin: 5
    },
    icon: {
        position: 'absolute', 
        zIndex: 1,
        backgroundColor: '#B3E3F3', 
        borderRadius: 20,
        margin: 2
    },
    container: {
        padding: 10
    },
    input: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgrey',
        padding: 10,
        color: 'blue',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,

    },
    checkButton: {
        borderColor: 'black',
        borderWidth: 1,
        width: 100,
        margin: 15,
        padding: 10,
        alignItems: 'center',
        backgroundColor: 'lightblue',
    }
})