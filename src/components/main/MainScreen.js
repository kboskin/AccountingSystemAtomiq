/* @flow */
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    BackHandler,
    Alert,
    Platform,
    ToastAndroid
} from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class MainScreen extends Component {

    static navigationOptions = {
        title: 'Меню'
    }

    // constructor(props) {
    // super(props);
    // this.handleBack = this.handleBack.bind(this);
    // }
    //
    // componentDidMount() {
    //     console.log("state", this.props.navigation);
    //     // using this it wil jsut clean the route
    //     // this.props.navigation.dispatch(resetAction);
    //     // but this will just close an application
    //     BackHandler.addEventListener('hardwareBackPress', () => { return this.handleBack.bind(this)() });
    //   }
    //   componentWillUnmount() {
    //     BackHandler.removeEventListener('hardwareBackPress')
    //   }
    //
    //   handleBack() {
    //     if(action.type === 'Navigation/BACK' && state.index === 0){
    //             BackHandler.exitApp()
    //     }
    //   }


    constructor(props) {
        super(props);
        this.state = {
            doubleBackToExitPressedOnce: false,
        }
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
        // theese lines should log out user later
        // this.props.navigation.dispatch(resetAction)
        // ---------- const field to set route -----------------------
        // const resetAction = NavigationActions.reset({
        // index: 0,
        // actions: [
        //   NavigationActions.navigate({ routeName: 'MainScreen'})
        // ]
        // });
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    onButtonPress = () => {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
        // then navigate
        // navigate('NewScreen');
    }

    changeDoubleBackToExit() {
        this.setState({
            doubleBackToExitPressedOnce: false
        });
    }

    handleBackButton = () => {
        if (this.state.doubleBackToExitPressedOnce) {
            BackHandler.exitApp();
        }
        //ToastAndroid.show('Press back again to exit', ToastAndroid.SHORT);

        if (Platform.OS === 'ios') {
            Alert.alert(
                'Выйти из приложения',
                'Вы действительно желаете покинуть приложение? Все несохраненные данные будут удалены', [{
                        text: 'Выйти',
                        onPress: () => {
                            console.log('Выйти pressed')
                            this.setState({
                                doubleBackToExitPressedOnce: true
                            });
                            BackHandler.exitApp();
                            return true;
                        }
                    },
                    {
                        text: 'Остаться',
                        onPress: () => {
                            console.log('Остаться pressed');
                            this.setState({
                                doubleBackToExitPressedOnce: false
                            });
                        },
                    }
                ], {
                    cancelable: false
                }
            )
            return true;
        } else {
            if (this.state.doubleBackToExitPressedOnce) {
                this.state.doubleBackToExitPressedOnce.setState
                BackHandler.exitApp();
            } else {
                ToastAndroid.show('Нажмите еще раз для выхода', ToastAndroid.SHORT);
                this.setState({
                    doubleBackToExitPressedOnce: true
                });
                setTimeout(() => {
                    this.changeDoubleBackToExit();
                }, 1000);
                return true;
            }

        }

    }

    render() {
        return ( <View style = {styles.container}>
                    <Text> I 'm the MainScreen component</Text>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
