import React, { useState, useContext } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Link } from "expo-router";
import ProgressBar from "@/components/ui/ProgressBar";
import { FormDataContext, Timeframe } from "@/components/FormDataContext";
import { DropdownMenu } from "@/components/ui/DropdownMenu";
import { MenuOption } from "@/components/ui/MenuOption";
import NumberForm from "@/components/ui/NumberForm";
import TextForm from "@/components/ui/TextForm";
import BackButton from "@/components/ui/BackButton";
import ContinueButton from "@/components/ui/ContinueButton";
import OnboardingInputTemplate from "@/components/screens/OnboardingInputTemplate";

export default function AddrTimeScreen() {
  const { address, setAddress, zipcode, setZipcode, timeframe, setTimeframe } =
    useContext(FormDataContext);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const [testingTemplate, setTestingTemplate] = useState(true);

  // An array to cycle through room types.
  const timeframes: Timeframe[] = [
    "Within 1-2 Weeks",
    "1 Month",
    "2 Months",
    "3 Months",
    "6 Months",
    "1 Year",
  ];

  const handleSelectRoom = (selected: Timeframe) => {
    setTimeframe(selected);
    setDropdownVisible(false);
  };

  if (testingTemplate) {
    return (
      <OnboardingInputTemplate progressLevel={4} continueHref="/(form)/6fieldConfirm" backButtonPresent={true} backHref="/(form)/4buildMaterials">
        <View className="px-10">
          <Text className="text-3xl font-bold pt-8">Address & Timeframe</Text>
          <Text className="text-lg leading-5 pt-4">Enter the project address to get location based pricing and choose an estimated timeframe.</Text>
          <TextForm
            promptText="Address"
            placeholder="Apartment, suite, etc."
            value={address.toString()}
            onChangeText={(text: string) => setAddress(text)}
          ></TextForm>
          <NumberForm
            promptText="Zipcode"
            placeholder="e.g. 19343"
            value={zipcode.toString()}
            onChangeText={(text: string) => setZipcode(Number(text))}
          ></NumberForm>
          <Text className="text-lg">Timeframe</Text>
          <View className="mt-4">
            <DropdownMenu
              visible={dropdownVisible}
              handleOpen={() => setDropdownVisible(true)}
              handleClose={() => setDropdownVisible(false)}
              trigger={
                <View className="bg-white p-4 rounded-lg border border-gray-300 shadow-sm">
                  <Text className="text-lg font-medium text-gray-800">{timeframe}</Text>
                </View>
              }
            >
              <ScrollView style={{ maxHeight: 200 }}>
                {timeframes.map((type, index) => (
                  <MenuOption 
                    key={index} 
                    onSelect={() => handleSelectRoom(type)}
                  >
                    <View className="px-4 py-3 hover:bg-gray-100">
                      <Text className="text-base text-gray-700">{type}</Text>
                    </View>
                  </MenuOption>
                ))}
              </ScrollView>
            </DropdownMenu>
          </View>
        </View>
      </OnboardingInputTemplate>
    )
  }
  return (
    <View>
      <ProgressBar currentStep={4}></ProgressBar>
      <BackButton></BackButton>
      <Text className="text-6xl">Address & Timeframe</Text>
      <TextForm
        promptText="Address"
        placeholder="Apartment, suite, etc."
        value={address.toString()}
        onChangeText={(text: string) => setAddress(text)}
      ></TextForm>
      <NumberForm
        promptText="Zipcode"
        placeholder="e.g. 19343"
        value={zipcode.toString()}
        onChangeText={(text: string) => setZipcode(Number(text))}
      ></NumberForm>
      <Text className="text-3xl">Timeframe</Text>
      <View className="mt-8 items-center">
        <DropdownMenu
          visible={dropdownVisible}
          handleOpen={() => setDropdownVisible(true)}
          handleClose={() => setDropdownVisible(false)}
          trigger={
            <View style={styles.triggerStyle}>
              <Text style={styles.triggerText}>{timeframe}</Text>
            </View>
          }
        >
          {timeframes.map((type, index) => (
            <MenuOption key={index} onSelect={() => handleSelectRoom(type)}>
              <Text>{type}</Text>
            </MenuOption>
          ))}
        </DropdownMenu>
      </View>

      <ContinueButton nextLink="/(form)/6fieldConfirm" buttonText="Continue" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff",
  },
  triggerStyle: {
    height: 40,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  triggerText: {
    fontSize: 16,
  },
});
