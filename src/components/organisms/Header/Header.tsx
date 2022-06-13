import React from "react";
import { Button, Container, createTheme, ThemeProvider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "../../atoms/typography/Typography";
import Dropdown from "../../molecules/DropDown/DropDown";
import Constants from "../../../data/Constants";
import Icon from "../../atoms/IconButton/IconButton";
import Logo from "../../atoms/icons/Icons";
import SearchIcon from "../../../images/search.svg";
import ExtendedNav from "../../organisms/ExtendedNav/index";
import theme from '../../theme/theme';
import LogoutButton from "../../../logout";
import { useAuth0 } from "@auth0/auth0-react";

// const theme = createTheme({
//   components: {
//     MuiTypography: {
//       styleOverrides: {
//         body1: {
//           fontFamily: "Cera Pro",
//           fontStyle: "normal",
//           fontWeight: "500",
//           fontSize: "16px",
//           lineHeight: "20px",
//           color: "#03314B",
//         },
//       },
//     },
//   },
// });

const RootContainer = styled("div")({
  width: "912px",
  height: "86px",
  backgroundColor: "#FFFFFF",
  display: "flex",
  flexDirection: "row",
  gap: "40px",
  margin: "0 auto",
});

const useStyles = makeStyles({
  logo: {
    width: "124.09px",
    height: "26px",
    alignSelf: "center",
  },
  library: {
    alignSelf: "center",
    color: "#03314B",
    fontFamily: "Cera Pro",
    fontSize: "16px",
    lineHeight: "20.11px",
    cursor: "pointer",
    "&:hover": {
      borderBottom: "1px solid #22C870",
    },
  },
  explore: {
    alignSelf: "center",
    "&:hover": {
      borderBottom: "1px solid #22C870",
    },
  },
  account: {
    marginLeft: "auto",
    alignSelf: "center",
  },

  logout1:{
    zIndex:10,
    position:"absolute",
   
  },
});

type Props = {};

const Header = (props: Props) => {
  const [showExplore, setShowExplore] = useState<boolean>(false);
  const [showAccount, setShowAccount] = useState<boolean>(false);

  let [account, setAccount] =useState(false);

  const expandAccountDropdown = () => {
    account ? setAccount(false) : setAccount(true);
  };
  const [exploreIconStyle, setExploreIconStyle] = useState({
    transform: "rotate(0deg)",
  });
  const [accountIconStyle, setAccountIconStyle] = useState({
    transform: "rotate(0deg)",
  });

  const navigate = useNavigate();

  const showExploreDropdown = () => {
    showExplore ? setShowExplore(false) : setShowExplore(true);

    if (showExplore) {
      setExploreIconStyle({ transform: "rotate(0deg)" });
    } else {
      setExploreIconStyle({ transform: "rotate(180deg)" });
    }
  };

  const showAccountDropdown = () => {
    showAccount ? setShowAccount(false) : setShowAccount(true);

    if (showAccount) {
      setAccountIconStyle({ transform: "rotate(0deg)" });
    } else {
      setAccountIconStyle({ transform: "rotate(180deg)" });
    }
  };

  const {loginWithRedirect}=useAuth0();

  const style = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <RootContainer>
            <Logo className={style.logo} />
            <Icon>
              <img src={SearchIcon} alt="icon" />
            </Icon>
            <Dropdown
              title={Constants.header.link1}
              className={style.explore}
              onClick={showExploreDropdown}
              style={exploreIconStyle}
            />
            <Typography variant="body1" className={style.library} onClick={() => navigate("/")}>
              {Constants.header.link2}
            </Typography>
         
            <Dropdown
              title="Account"
              className={style.account}
               onClick={expandAccountDropdown}
        // onClick= {() =>loginWithRedirect()}
              style={accountIconStyle}
              
            />

            
          </RootContainer>
        </Container>
       {/* {showExplore ? <ExtendedNav /> : null} */}

       {showExplore ? <ExtendedNav /> : null}
        <div  className={style.logout1} >{account ? <LogoutButton  /> : null} </div>
      </ThemeProvider>
    </>
  );
};

export default Header;
