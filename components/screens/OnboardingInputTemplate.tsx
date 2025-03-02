import { View, Text } from 'react-native'
import React, { PropsWithChildren } from 'react'

const OnboardingInputTemplate = ({ children }: PropsWithChildren) => {
  return (
    <View>
      <Text>OnboardingInputTemplate</Text>
      {children}
    </View>
  )
}

export default OnboardingInputTemplate