import { Fragment } from 'react';
import { StatusBar } from 'react-native';
import Index from './screens';

export default function App() {
  return (
    <Fragment>
      <StatusBar style="auto" translucent backgroundColor="transparent" />
      <Index />
    </Fragment>
  );
}


