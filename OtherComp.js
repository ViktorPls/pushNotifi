import React, { Component } from 'react';
import { Alert, Button, Platform, StyleSheet, Text, View } from 'react-native';

const hacerALgo = () => {
    Alert.alert('EStoy haciendo algo')
}


function Compo() {
    return (
        <View>

            <Button title={"Press"}
                onPress={() => {
                    console.log('ANother text')
                    hacerALgo()
                }}
            >
            </Button>

        </View>
    )
}

export default Compo