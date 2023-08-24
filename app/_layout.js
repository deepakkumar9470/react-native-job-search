import {Stack} from 'expo-router'
import { useCallback } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import {useFonts} from 'expo-font'

SplashScreen.preventAutoHideAsync()

const Layout = () => {

     const [fontsLOaded] = useFonts({
        DMBold : require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium : require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular : require('../assets/fonts/DMSans-Regular.ttf'),
     })

     const onLayoutRootView = useCallback(async()=>{
        if(fontsLOaded){
            await SplashScreen.hideAsync()
        }
     })

     if(!fontsLOaded) return null;

    return <Stack onLayout={onLayoutRootView}/>
}


export default Layout