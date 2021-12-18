import React from "react";
import { useSelector } from "react-redux";
import { isBlankData } from "../utils/utils";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function IndividualData() {
  const { individualDataSuccess = {} } = useSelector(
    (state) => state.individualDataReducer
  );

  return (
    <>
      {!isBlankData(individualDataSuccess, Object) ? (
        <main className="individual-data-container">
          <Card sx={{ maxWidth: 400 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="image">
                  <img src={individualDataSuccess?.picture?.medium}></img>
                </Avatar>
              }
              title={`${individualDataSuccess?.name?.title} ${individualDataSuccess?.name?.first} ${individualDataSuccess?.name?.last}`}
              subheader={`${new Date(
                individualDataSuccess?.dob?.date
              ).toDateString()}`}
            />
            <CardMedia
              component="img"
              height="194"
              image={individualDataSuccess?.picture?.medium}
              alt="Paella dish"
            />
            <CardContent>
              <div className="title-classname">
                Email :&nbsp;
                <span className="title-classname-detail">
                  {individualDataSuccess?.email}
                </span>
              </div>
              <div className="title-classname">
                Phone Number :&nbsp;
                <span className="title-classname-detail">
                  {individualDataSuccess?.phone}
                </span>
              </div>
              <div className="title-classname">
                Address :&nbsp;
                <span className="title-classname-detail">
                  {individualDataSuccess?.location?.street?.number}&nbsp;
                  {individualDataSuccess?.location?.street?.name}&nbsp;
                  {individualDataSuccess?.location?.city}&nbsp;
                  {individualDataSuccess?.location?.state}&nbsp;
                  {individualDataSuccess?.location?.postcode}&#x2c;&nbsp;
                  {individualDataSuccess?.location?.country}
                </span>
              </div>
            </CardContent>
          </Card>
        </main>
      ) : (
        <Alert align="centre" severity="warning">
          No Record Found!
        </Alert>
      )}
    </>
  );
}
