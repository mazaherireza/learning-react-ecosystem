import { useState } from "react";

export const useInput = (initialValue, validationFn) => {
  const [input, setInput] = useState(initialValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(input);

  const handleChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    setInput((prev) => ({ ...prev, [name]: value }));
    setDidEdit(false);
  };

  const handleBlur = () => {
    setDidEdit(true);
  };

  return {
    input,
    hasError: didEdit && !valueIsValid,
    handleChange,
    handleBlur,
  };
};
