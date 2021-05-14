import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TopBar = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>인기레시피</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        height: 100,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingRight: 10,
        paddingLeft: 10,
    },
    text: {
        paddingTop: 20,
        fontSize: 20,
    },
});

export default TopBar;