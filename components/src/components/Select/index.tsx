
type SelectProps<T, M extends boolean> = {
  multiple?: M;
  value?: M extends true ? T[] : T;
  onChange?: (value: M extends true ? T[] : T) => void;
  options: { label: string; value: T }[];
};

function Select<T, M extends boolean = false>({
  multiple,
  value,
  onChange,
  options
}: SelectProps<T, M>) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (multiple) {
      const selected = Array.from(e.target.selectedOptions)
        .map(option => option.value);
      onChange?.(selected as any);
    } else {
      onChange?.(e.target.value as any);
    }
  };

  return (
    // <select 
    //   multiple={multiple}
    //   value={value as any}
    //   onChange={handleChange}
    // >
    //   {options.map(option => (
    //     <option key={String(option.value)} value={String(option.value)}>
    //       {option.label}
    //     </option>
    //   ))}
    // </select>
    <>
      {/* <label for="pet-select">Choose a pet:</label> */}


      <select name="pets" id="pet-select">
        <option value="">--Please choose an option--</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </select></>
  );
}

export { Select };
