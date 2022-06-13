import { styled } from "@mui/styles";
import { useState, useEffect } from "react";
import { Container, Box } from "@mui/material";
import Typography from "../../atoms/typography/Typography";
import IconWithTypography from "../../molecules/IconTypography/IconTypography";
import { ReactComponent as Time } from "../../../images/time.svg";
import BeyondEntrepreneur from "../../../images/coverImages/beyondEntrepreneurship.svg";
import AddButton from "../../molecules/Buttons/Buttons";
import { ReactComponent as Side } from "../../../images/side.svg";
import BookTab from "../../organisms/AboutBook/AboutBook";
import api from "../../../api/api";
import Constants from "../../../data/Constants";
import { useNavigate } from "react-router-dom";

export type DataObject = {
  id: number;
  title: string;
  author: string;
  image: string;
  time: string;
  read: string;
  state: {
    isFinished: boolean;
    isTrending: boolean;
    justAdded: boolean;
    isFeatured: boolean;
  };
};

const LeftSection = styled("div")({
  height: "100px",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

const LeftBottom = styled("div")({
  display: "flex",
  flexDirection: "row",
  marginTop: "45px",
  gap: "30px",
});

const WrapStyled = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const BottomTab = styled("div")({
  marginTop: "60px",
});

const RightSection = styled("div")({
  height: "100px",
  marginTop: "50px",
});

const BookDescription = () => {
  const [bookData, setBookData] = useState<DataObject>({
    id: 1,
    title: "",
    author: "",
    image: "",
    time: "",
    read: "",
    state: {
      isFinished: false,
      isTrending: false,
      isFeatured: false,
      justAdded: false,
    },
  });

  const navigate = useNavigate();

  const [buttonHover, setButtonHover] = useState(false);

  const handleMouseEnter = () => {
    setButtonHover(true);
  };

  const handleMouseLeave = () => {
    setButtonHover(false);
  };

  const handleFinish = async (num: number) => {
    bookData.state.isFinished = true;
    await api.put(`/library/${num}`, bookData);
    navigate("/")
  };

  const handleRead = async (num: number) => {
   
    // await api.put(`/library/${num}`, bookData);
    navigate("/")
  }

  const getData = async () => {
    const response = await api.get(`/library/${10}`);
    const mydata = response.data;
    setBookData(mydata);
  };

  useEffect(() => {
   getData()
  }, [bookData.state.isFinished]);

  let hoverStyle;
  if (buttonHover) {
    hoverStyle = { backgroundColor: "#00C263" };
  }

  return (
    <>
      <Container sx={{ marginTop: "30px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "912px",
            height: "660px",
            margin: "0 auto",
            borderBottom: "1px solid #E1ECFC",
          }}
        >
          <LeftSection>
            <Typography variant="body2">
              {Constants.bookDetails.title}
            </Typography>
            <Typography variant="h1">
              {Constants.bookDetails.heading}
            </Typography>
            <Typography variant="subtitle1">
              {Constants.bookDetails.description}
            </Typography>
            <Typography variant="body1">
              {Constants.bookDetails.author}
            </Typography>
            <IconWithTypography
              iconSrc={<Time />}
              variant="caption"
              title="15-minute read"
            />
            <WrapStyled>
              <LeftBottom>
                <AddButton
                  style={{
                    width: "122px",
                    height: "44px",
                    color: "#22C870",
                    border: "1px solid black",
                    textTransform: "none",
                  }}
                  onClick={() => handleRead(10)}
                >
                  <Typography variant="body1">
                    {Constants.bookDetails.buttons.read}
                  </Typography>
                </AddButton>
                <AddButton
                  style={{
                    width: "170px",
                    height: "44px",
                    backgroundColor: "#2CE080",
                    color: "black",
                    textTransform: "none",
                    ...hoverStyle,
                  }}
                  onClick={() => handleFinish(10)}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Typography variant="body1">
                    {Constants.bookDetails.buttons.finish}
                  </Typography>
                </AddButton>
                <AddButton
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "11px",
                    color: "#6D787E",
                    textTransform: "none",
                  }}
                >
                  <Typography variant="body1">
                    {Constants.bookDetails.buttons.send}
                  </Typography>
                  <Side />
                </AddButton>
              </LeftBottom>
              <BottomTab>
                <BookTab />
              </BottomTab>
            </WrapStyled>
          </LeftSection>
          <RightSection>
            <img src={BeyondEntrepreneur} alt="" />
          </RightSection>
        </Box>
      </Container>
    </>
  );
};

export default BookDescription;
