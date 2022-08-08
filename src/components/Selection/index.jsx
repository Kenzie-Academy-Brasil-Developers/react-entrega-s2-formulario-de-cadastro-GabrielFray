import React from "react";
import Select from "react-select";

const colourStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "var(--color-gray-2)",
    color: "var(--color-gray-1)",
    height: "3rem",
    cursor: "pointer",
    boxShadow: "transparent",
    borderColor: "none",
  }),
  option: (styles, { isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isSelected
        ? "var(--color-gray-3)"
        : "var(--color-gray-2)",
      color: "var(--color-gray-1)",
      cursor: "pointer",

      border: isFocused ? " solid var(--color-gray-3)" : " solid transparent",

      borderWidth: "2px 0px",

      ":active": {
        ...styles[":active"],
        backgroundColor: "var(--color-gray-2)",
      },
    };
  },
  input: (styles) => ({ ...styles, color: "var(--color-gray-1)" }),
  singleValue: (styles) => ({ ...styles, color: "var(--color-gray-1)" }),
  indicatorSeparator: (styles) => {
    return { ...styles, width: "none" };
  },
  menu: (styles) => ({
    ...styles,
    backgroundColor: "var(--color-gray-2)",
    overFlowY: "auto",
    height: "130px",
  }),
};

const Selection = ({ inputRef, value, onChange }) => {
  const options = [
    {
      value: "Primeiro módulo (Introdução ao Frontend)",
      label: "Primeiro Módulo",
    },
    { value: "Segundo módulo (Frontend Avançado)", label: "Segundo Módulo" },
    {
      value: "Terceiro módulo (Introdução ao Backend)",
      label: "Terceiro Módulo",
    },
    { value: "Quarto módulo (Backend Avançado)", label: "Quarto Módulo" },
  ];
  return (
    <>
      <label>Selecionar módulo</label>
      <Select
      menuPlacement="auto"
        options={options}
        styles={colourStyles}
        className="Selection"
        inputRef={inputRef}
        value={options.find((elem) => elem.value === value)}
        onChange={onChange}
      />
    </>
  );
};
export default Selection;
