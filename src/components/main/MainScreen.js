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
import Drawer from 'react-native-drawer'

export default class MainScreen extends Component {

    static navigationOptions = {
        title: 'Меню'
    }

    constructor(props) {
        super(props);
        this.state = {
            doubleBackToExitPressedOnce: false,
            appState: AppState.currentState,
            menuOpen: false
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
        this.handleNavigateBackUi();



    }
    handleNavigateBackUi() {
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
   return (
     <Drawer ref={(ref)=> this._drawer = ref}
        content={
          <View style={{backgroundColor: "rgba(255, 255, 255, 0.5)", height: 1000}}>
            <Text>Hello</Text>
          </View>
        }
        type="displace"
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        styles={drawerStyles}
        panOpenMask={0.80}
        captureGestures={true}
        tapToClose={true}>
       <Text>HelloWorld</Text>
     </Drawer>
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
