/* @flow */
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    BackHandler,
    Alert,
    Platform,
    ToastAndroid,
    AppState
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
            appState: AppState.currentState
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

        AppState.addEventListener('change', this.handleAppStateChange);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
        AppState.removeEventListener('change', this.handleAppStateChange);
    }

    handleAppStateChange = (nextAppState) => {
      if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
        this.setState({doubleBackToExitPressedOnce: false})
      }
    this.setState({appState: nextAppState});
    }

    onButtonPress = () => {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
        // then navigate
        // navigate('NewScreen');
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
                // setTimeout(() => {
                //   this.setState({
                //       doubleBackToExitPressedOnce: false
                //   });
                // }, 1000);
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
