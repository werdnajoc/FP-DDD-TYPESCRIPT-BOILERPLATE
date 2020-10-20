import R from "ramda";

export const isValidCharacterLimitOfString = (
    value: string,
    minCharacters: number = 1,
    maxCharacters: number = 10
): boolean  => {
    const stringLength: number = value ? value.length : 0;
    return (stringLength >= minCharacters && stringLength <= maxCharacters);
};

export const isEmpty = (value: object) => R.isEmpty(value);
