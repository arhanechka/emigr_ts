import {useState} from "react";
import Select, { ValueType } from "react-select";

type Props = {
  name: string;
  values: string[];
  handleChange: (name: string, value: string) => void;
};

type OptionType = {
  value: string;
  label: string;
};

const condOptions = (values: string[]): OptionType[] => {
  let options: { value: string; label: string }[] = [];
  values.forEach(function (entry) {
    options.push({ value: entry, label: entry });
  });
  return options;
};

const CustomControl = (props: Props) => {
  const [options, setOptions] = useState<ValueType<OptionType, true>>(condOptions(props.values));
  const [selectedOption, setSelectedOption] = useState<ValueType<OptionType, false>>(options[0]);
  const [name, setName] = useState(props.name)
 
  const handleChange = (option: ValueType<OptionType, false> | null |undefined) => {
    setSelectedOption(option!);
    props.handleChange(name, option!.value)
  };
  return (
    <div>
      <div className="center-align">{props.name}</div>
      <div className="input-field col s12">
        <Select
          value={selectedOption}
          options={options}
          onChange={option => handleChange(option)}
        />
      </div>
    </div>
  );
};

export default CustomControl;
