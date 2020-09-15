// import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
// import Drawer from "@material-ui/core/Drawer";
// import Button from "@material-ui/core/Button";
// import List from "@material-ui/core/List";

// const useStyles = makeStyles({
//   list: {
//     width: 250
//   },
//   fullList: {
//     width: "auto"
//   }
// });

// function TuitionDropdown(anchor) {
//   const classes = useStyles();
//   const [state, setState] = React.useState({
//     top: false
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

//   return (
//     <div role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
//       Tuition
//     </div>
//   );
// }

// export default TuitionDropdown;
