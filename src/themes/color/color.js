import React from 'react';

const colors = {
    primary: '#703db2',
    primaryDark: '#5b3190',
    secondary: '#416bf4',
    success: '#80c888',
    fontLight: '#8d959d',

    brandColor: '#703db2',
    primaryGreen: '#80c888',
    primaryBlue: '#499cb8',
    secondaryGray: '#292929',
    secondaryDarkGray: '#4f565e',
    secondaryLightGray: '#8d959d',
    secondaryRed: '#f8596c',
    tertiaryGray: '#9b9b9b',
    tertiaryDarkGray: '#878787',
    tertiaryLightGray: '#acacac',
    tertiaryExtraLightGray: '#d8d8d8'
}

export const color = React.createContext(
  colors, // default value
);

export default colors;