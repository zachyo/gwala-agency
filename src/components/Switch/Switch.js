import Switch from "react-switch";
import './switch.css'

const SwitchCustom = ({onChange, checked}) => {
  return (
    <div className="">
      <Switch
        onChange={onChange}
        checked={checked}
        checkedIcon={false}
        uncheckedIcon={false}
        className="switch-dash-gwala"
        onColor="#0ECB21"
        offColor="#FF0053"
      />
    </div>
  );
};

export default SwitchCustom;
