import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import Icons from "../../atoms/IconButton/IconButton";
import { ReactComponent as ExpandIcon } from "../../../images/downarrow.svg";
import { ReactComponent as Account } from "../../../images/account.svg";
import { Typography } from "@mui/material";

interface Props {
  title: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    gap: "1px 1px",
    height: "24px",
    cursor: "pointer",
  },
  typography: {
    alignSelf: "center",
    fontFamily: "Cera Pro",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "20px",
    color: "#03314B",
  },
});

const Dropdown = (props: Props) => {
  const style = useStyles();
  return (
    <>
      <Box className={`${style.root} ${props.className}`}>
        {props.title === "Account" ? (
          <Icons>
            <Account width="40px" height="40px" />
          </Icons>
        ) : (
          <Typography variant="body1" className={style.typography}>
            {props.title}
          </Typography>
        )}
        <Icons onClick={props.onClick} style={props.style}>
          <ExpandIcon />
        </Icons>
      </Box>
    </>
  );
};

export default Dropdown;