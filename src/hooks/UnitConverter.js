export function convertKilometersToMiles(kilometersValue) {
    if (!isNaN(kilometersValue)) {
      return (kilometersValue * 0.621371).toFixed(2);
    }
    return '';
  }
  
  export function convertMilesToKilometers(milesValue) {
    if (!isNaN(milesValue)) {
      return (milesValue / 0.621371).toFixed(2);
    }
    return '';
  }
  