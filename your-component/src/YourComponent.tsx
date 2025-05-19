import React, { forwardRef } from 'react';
import {
  requireNativeComponent,
  ViewProps,
  NativeSyntheticEvent,
} from 'react-native';

type NativeEvent = NativeSyntheticEvent<{ value: string }>;

export interface YourComponentProps extends ViewProps {
  value: string;
  onChange?: (event: NativeEvent) => void;
}

const NativeView = requireNativeComponent<YourComponentProps>("YourComponentView");

const YourComponent = forwardRef((props: YourComponentProps, ref) => {
  return <NativeView {...props} ref={ref} />;
});

export default YourComponent;
