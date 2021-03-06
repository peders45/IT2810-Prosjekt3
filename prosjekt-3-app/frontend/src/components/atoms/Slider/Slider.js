import React from 'react';
import './Slider.css';
import '../../../App'
import { setSliderCalories, setSliderRating }  from "../../../state/actions/sliderActions";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { connect } from 'react-redux'
import { searchForItem }  from "../../../state/actions/searchActions";

//Constant for styling of imported component
const useStyles = makeStyles({
  root: {
    width: 200,
    thumbcolor: 'black',
  },
});

//Function to get slidervalues as text
function valuetext(value) {
  return `${value}`;
}

//Slider for selection of value limits for ratings and calories. 
const RangeSlider = ( {sliderValue, setSliderCalories, setSliderRating, searchForItem, searchWord, track, defaultValue, max, min, id} ) => {
  const classes = useStyles();
  const handleChange = (event, value) => {
    if (sliderValue === "Total calories") {
      setSliderCalories(value);
    }
    else {
      setSliderRating(value);
    }
    searchForItem(searchWord)
  };
  return (
    <div className={classes.root}>
      <label id="sliderLabel">{sliderValue}</label>
      <Typography id="continuous-slider" gutterBottom label="Slider">
      </Typography>
      <Slider
        id={id}
        min={min}
        max={max}
        track={track}
        defaultValue={defaultValue}
        onChangeCommitted={(event, value) => handleChange(event, value)}
        valueLabelDisplay="auto"
        aria-labelledby="continuous-slider"
        getAriaValueText={valuetext}
        color="primary"
      />
    </div>
  );
}

//Dispatching actions to the store
const mapDispatchToProps = {
  setSliderCalories,
  setSliderRating,
  searchForItem
 };

//Extract data from the store
const mapStateToProps = (state) => ({
  searchWord: state.searchWord
});

//Connect the store to this component
export default connect(mapStateToProps, mapDispatchToProps)(RangeSlider)
