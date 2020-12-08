import { useEffect } from 'react';

export const useReplacerFloatValueToInputsValidate = (
  setFieldValue, // state updater
  valueFileName, // input file name to update
  currentValue // current state by input
) => {
  useEffect(
    function validateValue() {
      const valueToArray = String(currentValue).split('');
      const isFloatNumberValue = valueToArray[0] === '0';
      if (isFloatNumberValue) {
        if (valueToArray.length < 3) {
          valueToArray[0] = '0.';
          if (valueToArray[1] === '0') {
            setFieldValue(
              valueFileName,
              parseFloat(valueToArray.join('')).toFixed(1)
            );
            return;
          }
          setFieldValue(valueFileName, Number(valueToArray.join('')));
        } else {
          const numToSave = Number(
            valueToArray
              .filter(val => val !== '.')
              .map((el, index) => (index === 0 ? '0.' : el))
              .join('')
          );
          setFieldValue(valueFileName, numToSave);
        }
      }
    },
    [currentValue]
  );
};
