import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Forecast from "./Forecast";

export default class WeatherProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zip: "",
            forecast: null
        };
    }

    _handleTextChange = event => {
        this.setState({ zip: event.nativeEvent.text })
    }

    render() {
        let content = null;
        if (this.state.forecast !== null) {
            content = (
                <Forecast
                    main={this.state.forecast.main}
                    description={this.state.forecast.description}
                    temp={this.state.forecast.temp}
                />
            );
        }

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    You input {this.state.zip}.
            </Text>
                {content}
                <TextInput
                    style={styles.input}
                    onSubmitEditing={this._handleTextChange}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        fontSize: 20,
        borderWidth: 2,
        height: 40
    }
});