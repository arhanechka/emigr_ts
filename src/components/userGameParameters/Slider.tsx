import React, { useEffect, useRef, useState } from "react";
import { Typography, Slider } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ".././styles/index.scss";

interface Iparameters {
  name: string,
  value: number
  setChange: (name: string, value: number | number[])=>void
}

const MySlider = (props: Iparameters) => {
const sliderRef = useRef<HTMLDivElement>(null);
const [isVisible, setIsVisible] = useState(true)
  const handleChange = (
    event: React.ChangeEvent<{}>,
    num: number | number[]
  ) => {
      props.setChange(props.name, num)
  };

  const excludeParameter = (): void =>{
    setIsVisible(false)
    props.setChange(props.name, -1)
  }

  useEffect(()=>{
  },[handleChange])

  const displayBlock = isVisible ? 'block' : 'none'

  return (
    <div style={{display: displayBlock}}
    ref = {sliderRef} className="slider-block">
        <Typography 
        id="discrete-slider-always" 
        gutterBottom>
          {props.name}
        </Typography>
        <div className='row'>
        <label>
            <input
              type="checkbox"
              defaultChecked={true}
              onClick={()=>excludeParameter()}
              // checked={isChecked}
            />{" "}
            <span>Include</span>
          </label>
        <PrettoSlider
          defaultValue={props.value}
          aria-labelledby="discrete-slider-always"
          step={10}
          marks={true}
          valueLabelDisplay="on"
          onChange={handleChange}
        />
        </div>
      </div>
  );
};

const PrettoSlider = withStyles({
    root: {
      color: "#52af77",
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      marginTop: -8,
      marginLeft: -12,
      "&:focus, &:hover, &$active": {
        boxShadow: "inherit",
      },
    },
    active: {},
    valueLabel: {
      left: "calc(-50% + 4px)",
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);

export default MySlider;
