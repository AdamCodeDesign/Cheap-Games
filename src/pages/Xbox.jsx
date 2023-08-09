import React from 'react';
import Browser from '../components/Browser';

export default function Xbox() {
  return (
    <>
      {/* <Browser filter="parent_platforms=3" /> */}
      <Browser filter="?&parent_platforms=3"/>
    </>
  );
}
