/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { WebView } from 'react-native-webview';


import {WebViewApp}  from 'SDKMaker';

// import {AuthComponent}  from 'SDKMaker';

// import YourComponent from './your-component';

// export const productsData = [
//   {
//     id: '1',
//     name: 'React Native Docs',
//     url: 'https://reactnative.dev/',
//   },
//   {
//     id: '2',
//     name: 'Google',
//     url: 'https://www.google.com',
//   },
//   {
//     id: '3',
//     name: 'GitHub',
//     url: 'https://github.com',
//   },
//   {
//     id: '4',
//     name: 'Stack Overflow',
//     url: 'https://stackoverflow.com',
//   },
//   {
//     id: '5',
//     name: 'Wikipedia',
//     url: 'https://en.wikipedia.org',
//   },
//   {
//     id: '6',
//     name: 'Twitter',
//     url: 'https://twitter.com',
//   },
//   {
//     id: '7',
//     name: 'Facebook',
//     url: 'https://facebook.com',
//   },
//   {
//     id: '8',
//     name: 'LinkedIn',
//     url: 'https://linkedin.com',
//   },
//   {
//     id: '9',
//     name: 'YouTube',
//     url: 'https://youtube.com',
//   },
//   {
//     id: '10',
//     name: 'Amazon',
//     url: 'https://amazon.com',
//   },
// ];

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
console.log('WebView in host app:', WebView);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  /*
   * To keep the template simple and small we're adding padding to prevent view
   * from rendering under the System UI.
   * For bigger apps the recommendation is to use `react-native-safe-area-context`:
   * https://github.com/AppAndFlow/react-native-safe-area-context
   *
   * You can read more about it here:
   * https://github.com/react-native-community/discussions-and-proposals/discussions/827
   */
  const safePadding = '5%';

  const safData = [
    {
      id: '11',
      name: 'Reddit',
      url: 'https://www.reddit.com',
    },
    {
      id: '12',
      name: 'Netflix',
      url: 'https://www.netflix.com',
    },
    {
      id: '13',
      name: 'Microsoft',
      url: 'https://www.microsoft.com',
    },
    {
      id: '14',
      name: 'Apple',
      url: 'https://www.apple.com',
    },
    {
      id: '15',
      name: 'CNN',
      url: 'https://www.cnn.com',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text>hi</Text>
        <WebViewApp products={safData}/>
        {/* <AuthComponent onLogin={safData}/> */}

      
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {flex: 1, padding: 16},
});

export default App;
