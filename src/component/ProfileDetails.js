import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import {
  dataLoaderAction,
  individualProfileAction,
} from "../redux/action/action";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { isBlankData } from "../utils/utils";
import { useNavigate } from "react-router-dom";

const ProfileDetails = () => {
  const dispatch = useDispatch();
  const [typeData, setTypeData] = useState([]);
  const history = useNavigate();
  const {
    dataLoading,
    dataSuccess = {},
    dataError,
  } = useSelector((state) => state.dataReducer);

  useEffect(() => {
    dispatch(dataLoaderAction());
  }, [dispatch]);

  useEffect(() => {
    !isBlankData(dataSuccess, Object) && setTypeData(dataSuccess.items);
  }, [dataSuccess]);

  const handleClick = (data) => {
    dispatch(individualProfileAction(data));
    history(`/profileDetail/${data.login.uuid}`);
  };

  if (dataLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "15%",
          justifyContent: "center",
        }}
      >
        <CircularProgress color="success" />
      </Box>
    );
  } else if (dataError) {
    return (
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity="error">!!!Some error Ocurred</Alert>
      </Stack>
    );
  } else {
    return (
      <>
        {!isBlankData(dataSuccess?.results, Array) && (
          <header className="App-header">Employee Details</header>
        )}
        <div className="profile-container">
          {dataSuccess?.results?.map((data, key) => (
            <Card
              key={key}
              sx={{ width: 320 }}
              onClick={(e) => handleClick(data)}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="180"
                  image={data.picture.medium}
                  alt="green iguana"
                />
                <CardContent>
                  <h3 className="name-header">
                    {data.name.title}&nbsp;
                    {data.name.first}&nbsp;
                    {data.name.last}
                  </h3>
                  <h3 className="email-header">{data.email}</h3>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </>
    );
  }
};
export default ProfileDetails;
