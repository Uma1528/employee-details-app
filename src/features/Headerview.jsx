import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const useStyle = makeStyles({
    root: {
        background: "rgba(0,0,0,0.1)",
        padding: "10px",
        textAlign: "left"
    }
});

const Headerview = () => {
    const navigate = useNavigate();
    const classes = useStyle();
    return <div className={classes.root}>
        <span className="pointer" id="header-link" onClick={e=>navigate("/")}>Employee Management Tool</span>
    </div>
};

export default Headerview;