import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
    bottomNavigationButtons : {
        width: 50 ,
        height: 50 ,
        borderRadius: 10 ,
        backgroundColor: 'orange'
    } ,
    mainContainer : {
        position: 'absolute' ,
        top: 0 ,
        bottom: 0 ,
        left: 0 ,
        right: 0 ,
        padding: 20 ,
        paddingTop: 10 ,
        backgroundColor: 'gray'
    } ,
    mainPageSearchBar_ContainerStyle : {
        borderRadius: 10 ,
        padding: 10
    } ,
    bottomNavigationView : {
        flex: 1 ,
        flexDirection: 'row' ,
        position: 'absolute' ,
        bottom: 0 ,
        right: 0 ,
        left: 0 ,
        justifyContent: 'space-around' ,
        padding: 20 ,
        paddingBottom: 10
    } ,
    bottomNavigationMainButton : {
        width: 60 ,
        height: 60 ,
        borderRadius: 50 ,
        backgroundColor: 'green'
    }
});

export default Style;
