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
    AppState,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    StatusBarб,
    DrawerLayoutAndroid,
    StatusBar
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import Drawer from 'react-native-drawer';
import Orientation from 'react-native-orientation';
import MainGrid from './MainGrid'

export default class MainScreen extends Component {

    static navigationOptions = {
        title: 'Меню',
        header : null
    }

    constructor(props) {
        super(props);

        this.state = {
            doubleBackToExitPressedOnce: false,
            appState: AppState.currentState,
            menuOpen: false,
        }
    }

    componentDidMount() {
        Orientation.lockToLandscape();

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
        // lock to lockToPortrait orientation
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
                return true;
            }
        }
    }
    closeControlPanel = () => {
      this._drawer.close()
    };
    openControlPanel = () => {
      this._drawer.open()
    };
    toggleDrawer() {
      this.state.toggled ? this._drawer.close() : this._drawer.open();
    }

 render() {
   var navigationView = (
     <View style={{flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.3)', flexDirection : 'row'}}>
       <StatusBar hidden = {true}/>
       <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
       <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>x35</Text>
     </View>
   )
   var lotsArray = [];
   lotsArray.push(navigationView)
   return (
     <DrawerLayoutAndroid
        drawerBackgroundColor="rgba(255, 255, 255, 0.3)"
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        drawerWidth={Dimensions.get('window').width*0.75}
        renderNavigationView={() => lotsArray}>
          <ImageBackground
            resizeMode={'cover'}
            style={{ width: '100%', height: '100%' }}
            source={require('../../../images/coffee.jpg')}>
              <MainGrid/>
          </ImageBackground>
     </DrawerLayoutAndroid>
   );
 }
}

const drawerStyles = {
  drawer: { shadowColor: '#fff', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
