export const checkIfIsValidToJSON = (object: any): boolean => {
  try {
    JSON.parse(object);
    return true;
  } catch (e) {
    return false;
  }
};
