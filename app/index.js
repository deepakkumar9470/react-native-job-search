
import {View,Text,ScrollView,SafeAreaView} from 'react-native'
import { Stack,useRouter } from 'expo-router'

import {COLORS,icons,images,SIZES} from '../constants'
import {Nearbyjobs,Popularjobs,Welcome,ScreenHeaderBtn} from '../components'
import { useState } from 'react'

const Home = () => {
    const [search,setSearch] = useState("")
    const router = useRouter()

    return (
        <SafeAreaView style={{backgroundColor : COLORS.lightWhite, flex : 1}}>
               <Stack.Screen
                options={{
                    headerStyle :{backgroundColor : COLORS.lightWhite},
                    headerShadowVisible : false,
                    headerLeft : () =>(
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>

                    ),
                    headerRight : () =>(
                        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%"/>
                    ),
                    headerTitle : ''
                }}
               />

               <ScrollView showsVerticalScrollIndicator={false}>
                <View 
                style={{
                    flex:1,
                    padding : SIZES.medium
                }}>
                    <Welcome
                    search={search}
                    setSearch={setSearch}
                    handleClick={()=>{
                        if(search){
                            router.push(`/search//${search}`)
                        }
                    }}/>
                    <Popularjobs/>
                    <Nearbyjobs/>
                </View>

               </ScrollView>
        </SafeAreaView>
    )
}


export default Home