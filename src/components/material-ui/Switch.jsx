import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import Switch from "@material-ui/core/Switch";

const PurpleSwitch = withStyles({
  switchBase: {
    color: "#45A29E",
    "&$checked": {
      color: "#66FCF1",
    },
    "&$checked + $track": {
      backgroundColor: "#45A29E",
    },
  },
  checked: {},
  track: {},
})(Switch);

export default PurpleSwitch;
