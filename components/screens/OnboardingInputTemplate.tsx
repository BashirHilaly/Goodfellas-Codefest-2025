import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { Link } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
const OnboardingInputTemplate = ({ children, progressLevel, continueHref, progressBarPresent = true, backButtonPresent = true, backHref }: PropsWithChildren<{
  progressLevel: number;
  continueHref: string;
  progressBarPresent?: boolean;
  backButtonPresent?: boolean;
  backHref?: string;
}>) => {

  if (!progressBarPresent) {
    return (
      <SafeAreaView className="min-h-screen">
      {backButtonPresent && backHref && (
        <Link href={backHref as any} className="absolute left-4 top-4">
          <TouchableOpacity className="p-2">
            <Text className="text-lg font-semibold">←</Text>
          </TouchableOpacity>
        </Link>
      )}
      {children}
      <View className="absolute bottom-0 w-full p-4 bg-gray-300 flex-row justify-center items-center">
        <Link href={continueHref as any} className="mb-8">
          <TouchableOpacity className="bg-[#222222] rounded-lg px-20 py-2">
            <Text className="text-[#F8F8F8] text-center text-lg font-semibold">Continue</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
    )
  }

  return (
    <SafeAreaView className="min-h-screen">
      <View className="flex-row justify-between items-center px-4 pt-8">
        <View className={`w-1/6 h-1 ${progressLevel >= 1 ? 'bg-blue-500 shadow-md shadow-blue-500' : 'bg-gray-200'} rounded-full`}></View>
        <View className={`w-1/6 h-1 ${progressLevel >= 2 ? 'bg-blue-500 shadow-md shadow-blue-500' : 'bg-gray-200'} rounded-full`}></View>
        <View className={`w-1/6 h-1 ${progressLevel >= 3 ? 'bg-blue-500 shadow-md shadow-blue-500' : 'bg-gray-200'} rounded-full`}></View>
        <View className={`w-1/6 h-1 ${progressLevel >= 4 ? 'bg-blue-500 shadow-md shadow-blue-500' : 'bg-gray-200'} rounded-full`}></View>
        <View className={`w-1/6 h-1 ${progressLevel >= 5 ? 'bg-blue-500 shadow-md shadow-blue-500' : 'bg-gray-200'} rounded-full`}></View>
      </View>
      {backButtonPresent && backHref && (
        <Link href={backHref as any} className="p-4">
          <TouchableOpacity className="">
            <ArrowLeft size={30} />
          </TouchableOpacity>
        </Link>
      )}
      {children}
      <View className="absolute bottom-0 w-full p-4 bg-gray-300 flex-row justify-center items-center">
        <Link href={continueHref as any} className="mb-8">
          <TouchableOpacity className="bg-[#222222] rounded-lg px-20 py-2">
            <Text className="text-[#F8F8F8] text-center text-lg font-semibold">Continue</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  )
}

export default OnboardingInputTemplate