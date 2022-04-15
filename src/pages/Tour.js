import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/system/Box";
import ImageCollage from '../components/ImageCollage'
import Accordian from '../components/Accordian'
import CustomizedAccordions from "../components/Accordian";
import React from "react";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import StaticDateRangePickerDemo from "../components/DatePicket";




const Tour = () => 
<Container sx={{ width: 900 }}>
     <Typography variant="h3" component='h1' marginTop={3}>
          Explore the World in Vegas
     </Typography>
     <Box marginTop={3} sx={{dispaly: 'flex'}}>
          <img 
               src="https://media.istockphoto.com/photos/welcome-to-fabulous-las-vegas-sign-picture-id531128595?s=612x612" alt="" height={325} 
          />
          <ImageCollage />
     </Box>
     <Box>
          <Typography variant="h6" component='h4' marginTop={3}>
               About this Ticket
          </Typography>
          <Typography variant="paragraph" component='p' marginTop={3}>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Typography>
     </Box>
     <Box marginBottom={10}>
          <Typography variant="h6" component='h4' marginTop={3} marginBottom={2}>
                Frequently Asked Questions
          </Typography>
          <CustomizedAccordions />
     </Box>
     <BottomNavigation>
          <StaticDateRangePickerDemo />
     </BottomNavigation>
</Container>

export default Tour;