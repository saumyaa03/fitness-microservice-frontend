import React, { useEffect, useState } from "react"; 
import { Box } from "@mui/material"; 
import ActivityForm from "./ActivityForm"; 
import ActivityList from "./ActivityList"; 
import { getActivities } from "../services/api";

const ActivityPage = () => { 
    const [activities, setActivities] = useState([]); 
    useEffect(() => {
        const fetchActivities = async () => {
          try {
            const response = await getActivities();
            setActivities(response.data);
          } catch (error) {
            console.error(error);
          }
        };
      
        fetchActivities();
      }, []);
            

    const handleActivityAdded = (newActivity) => { 
        setActivities((prev) => [...prev, newActivity]); 
    }; 

    return ( 
    <Box sx={{ p: 2, border: "1px dashed grey" }}> 
        <ActivityForm onActivityAdded={handleActivityAdded} /> 
        <ActivityList activities={activities} /> 
    </Box> ); 

}
    
export default ActivityPage;