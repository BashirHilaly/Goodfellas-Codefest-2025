import React, { PropsWithChildren, useEffect } from 'react';
import { View, Keyboard, TouchableWithoutFeedback } from 'react-native';

export function KeyboardDismissWrapper({ children }: PropsWithChildren) {
  useEffect(() => {
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      // Keyboard is hidden
    });

    return () => {
      hideSubscription.remove();
    };
  }, []);

  return (
    <View 
      style={{ flex: 1 }} 
      onStartShouldSetResponder={() => {
        if (Keyboard.isVisible()) {
          Keyboard.dismiss();
          return true;
        }
        return false;
      }}
    >
      {children}
    </View>
  );
} 