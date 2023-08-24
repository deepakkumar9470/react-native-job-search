import React,{useState,useEffect} from 'react'
import { View, Text ,FlatList,TextInput,Image,TouchableOpacity} from 'react-native'
import styles from './welcome.style'
import { router, useRouter } from 'expo-router'
import { icons,SIZES } from '../../../constants'
const jobsType = ["Full-Time", "Part-Time", "Contactor"]



const Welcome = ({search,setSearch,handleClick}) => {

   const [activeJobType,setactiveJobType] = useState("Full-Time")

  return (
    <View>
     
     <View style={styles.container}>
     <Text style={styles.userName}>Hello Deepak Kumar</Text>
     <Text style={styles.welcomeMessage}>Find your perfect job</Text>
     </View>

     <View style={styles.searchContainer}>
       <View style={styles.searchWrapper}>
          <TextInput
          style={styles.searchInput}
          value={search}
          onChangeText={(text)=>setSearch(text)}
          placeholder='What are you looking for'/>
       </View>
       <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
        <Image 
          source={icons.search}
          resizeMode='contain'
          style={styles.searchBtnImage}/>
       </TouchableOpacity>
        
     </View>

       <View style={styles.tabsContainer}>
        <FlatList
          data={jobsType}
          renderItem={({item})=>(
           <TouchableOpacity
           style={styles.tab(activeJobType,item)}
           onPress={()=>{
            setactiveJobType(item);
            router.push(`/search/${item}`)
           }}>

           
            <Text style={styles.tabText(activeJobType,item)}>{item}</Text>
           </TouchableOpacity>
          )}
          keyExtractor={item=>item}
          contentContainerStyle={{columnGap:SIZES.small}}
          horizontal
        />

       </View>
        
    </View>
  )
}

export default Welcome