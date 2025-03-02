import { View, Text } from 'react-native'
import React from 'react'
import { MotiView } from "moti";


const SplashScreen = () => {
  return (
    <View className="flex-1 justify-center items-center">
        <MotiView
        from={{ opacity: 0, translateY: 100 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: 'timing', duration: 300 }}
        className="pb-10"
      >
        <Text className='text-4xl font-bold text-amber-600'>Snap<Text className='text-blue-500'>Quote</Text></Text>
      </MotiView>
    </View>
  )
}

export default SplashScreen