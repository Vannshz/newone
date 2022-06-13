import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Box, styled } from "@mui/material";
import Typography from "../../atoms/typography/Typography";


const WholeContainer = styled("div")({
  width: "912px",
  height: "39px",
  display: "flex",
  flexDirection: "row",
  borderBottom: "2px solid #E1ECFC",
});

const SubContainer = styled("div")({
  marginBottom: "16px",
  width: '151px',
  height: "23px",
});

const SelectedTabs = () => {
  return <div>
      <Container >
        <Box>
            <WholeContainer>
                <SubContainer>
                    <Typography variant="subtitle1" sx={{color: "#22C870", borderBottom: "2px solid #2CE080"}}>Currently Reading</Typography>
                </SubContainer>
                <SubContainer>
                    <Typography variant="subtitle2" sx={{color: "#6D787E"}}>Content</Typography>
                </SubContainer>
                <SubContainer>
                    <Typography variant="subtitle2" sx={{color: "#6D787E"}}>Connected Services</Typography>
                </SubContainer>
            </WholeContainer>
        </Box>
      </Container>
  </div>;
};

export default SelectedTabs;
