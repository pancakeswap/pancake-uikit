export const byTextAscending = <T extends {}>(
  getTextProperty: (object: T) => String
) => (objectA: T, objectB: T) => {
  const upperA = getTextProperty(objectA).toUpperCase();
  const upperB = getTextProperty(objectB).toUpperCase();
  if (upperA < upperB) {
    return -1;
  }
  if (upperA > upperB) {
    return 1;
  }
  return 0;
};

export const byTextDescending = <T extends {}>(
  getTextProperty: (object: T) => String
) => (objectA: T, objectB: T) => {
  const upperA = getTextProperty(objectA).toUpperCase();
  const upperB = getTextProperty(objectB).toUpperCase();
  if (upperA > upperB) {
    return -1;
  }
  if (upperA < upperB) {
    return 1;
  }
  return 0;
};