import Button from "@mui/material/Button";
import styles from "@/styles/Home.module.css";

export default function LandingButton({ onClick, children }) {
  return (
    <Button
      type="submit"
      className={styles.form_btn}
      variant="contained"
      sx={{
        borderRadius: 0,
        width:"30vh",
        minWidth:"200px",
        height: "50px",
        backgroundColor: "#F0FFE2",
        border: "1px solid black",
        boxShadow: "none",
        color: "black",
        ":hover": {
          bgcolor: "#DCF2C7",
          border: "none",
          color: "black",
          
        },
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
