import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography
} from "@mui/material";
import { useNavigate } from "react-router";

const ActivityList = ({ activities }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/activities/${id}`);
  };

  return (
    <Grid container spacing={2}>
      {activities.map((activity) => (
        <Grid key={activity.id} item xs={12} sm={6} md={4}>
          <Card
            sx={{ cursor: "pointer" }}
            onClick={() => handleClick(activity.id)}
          >
            <CardContent>
              <Typography variant="h6">
                {activity.type}
              </Typography>
              <Typography>
                Duration: {activity.duration}
              </Typography>
              <Typography>
                Calories: {activity.caloriesBurned}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ActivityList;
