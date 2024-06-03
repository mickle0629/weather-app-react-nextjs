export function getRainDescription(precip) {
  if (precip < 250) {
    return 'Dry';;
  } else if (precip >= 250 && precip < 500) {
    return 'Slight Drizzle';
  } else if (precip >= 500 && precip < 750) {
    return 'Rain';
  } else if (precip >= 750) {
    return 'Heavy Rain';
  }
}

export function getUVWarnings(uvi) {
  if (uvi <= 2) {
    return 'Low';
  } else if (uvi > 2 && uvi <= 5) {
    return 'Moderate: wear protective clothes, use sunscreen'
  } else if (uvi > 5 && uvi <= 10) {
    return 'High: stay out of sun, wear protective clothes, use sunscreen'
  } else if (uvi > 10) {
    return 'Extreme: Skin/Eye burn risk. Stay out of sun, wear protective clothes. '
  }
}