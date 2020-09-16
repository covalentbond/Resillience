// import React, { Component } from "react";
// import withStyles from "@material-ui/core/styles/withStyles";
// import Button from "@material-ui/core/Button";
// import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
// import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
// import axios from "axios";

// const styles = () => ({
//   icons: {
//     marginLeft: "5%"
//   },
//   inputPhone: {
//     paddingLeft: "65px",
//     borderTopStyle: "hidden",
//     borderRightStyle: "hidden",
//     borderLeftStyle: "hidden",
//     borderBottomStyle: "hidden",
//     "@media only screen and (max-width: 670px)": {
//       fontSize: "10px",
//       width: "110px",
//       paddingLeft: "6%"
//     }
//   },
//   messages: {
//     marginLeft: "30px",
//     marginTop: "25px",
//     "@media only screen and (max-width: 670px)": {
//       marginLeft: "0px",
//       marginTop: "0px",
//       fontSize: "10px",
//       paddingTop: "9%",
//       width: "160%"
//     }
//   },
//   message: {
//     display: "flex",
//     alignItems: "center",
//     marginBottom: "10px"
//   },
//   tickImage: {
//     "@media only screen and (max-width: 770px)": {
//       width: "13px"
//     }
//   },
//   button: {
//     marginTop: "15px",
//     "@media only screen and (max-width: 770px)": {
//       marginTop: "0px"
//     }
//   }
// });
// export class Verification extends Component {
//   state = {
//     parentName: "",
//     number: null,
//     otp: null,
//     message: ""
//   };

//   handleProceed = (event) => {
//     event.preventDefault();

//     const details = {
//       parentName: this.state.parentName,
//       number: this.state.number
//     };

//     console.log(blogData);
//     axios
//       .post("/sendotp", details)
//       .then((res) => {
//         console.log(res);
//         // console.log(res.data);
//         this.setState({
//           parentName: "",
//           number: null
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//         console.log(err.response.data);
//         this.setState({
//           errors: err.response.data
//         });
//       });
//   };

//   handleVerify = (event) => {
//     event.preventDefault();

//     const OTPData = {
//       otp: this.state.otp
//     };

//     console.log(OTPData);
//     axios
//       .post("/verify", OTPData)
//       .then((res) => {
//         console.log(res);
//         // console.log(res.data);
//         this.setState({
//           otp: ""
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//         console.log(err.response.data);
//         this.setState({
//           errors: err.response.data
//         });
//       });
//   };

//   render() {
//     const { classes } = this.props;
//     return (
//       <div>
//         <form noValidate onSubmit={this.handleProceed}>
//           <div className={classes.subSection}>
//             <PersonOutlineIcon color="secondary" className={classes.icons} />
//             <input type="text" name="parentName" id="parentName" className={`form-control ${classes.inputPhone}`} placeholder="Parent's Name" autoComplete="off" maxLength="15" required="required" />
//           </div>
//           <div className={classes.subSection} style={{ marginTop: "10px" }}>
//             <PhoneInTalkIcon color="secondary" className={classes.icons} />
//             <input
//               type="tel"
//               name="number"
//               id="mobileNumber"
//               className={`form-control ${classes.inputPhone}`}
//               placeholder="Enter Mobile number"
//               autoComplete="off"
//               maxLength="10"
//               required="required"
//             />
//           </div>
//           <div className={classes.messages}>
//             {["Identify strengths & weaknesses", "Recommends a study plan", "One to One home/online tuition", "Mastering a weak topic"].map((message, index) => (
//               <div className={classes.message} key={index}>
//                 <img src="https://res.cloudinary.com/rweb1/image/upload/v1600243272/Assets/images/tick_nz85rm.svg" alt="tick" className={classes.tickImage} />
//                 <h4 style={{ margin: "auto", marginLeft: "10px" }}>{message}</h4>
//               </div>
//             ))}
//           </div>
//           <Button type="submit" variant="contained" color="secondary" disableElevation className={classes.button} size="small">
//             Proceed
//           </Button>
//         </form>
//       </div>
//     );
//   }
// }

// export default withStyles(styles)(Verification);
