import { TextField, IconButton, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const FoodPage = () => {
  return (
    <Box sx={{ mt: 3 }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <TextField
          id="standard-basic"
          label="เพิ่มรายการอาหาร"
          variant="standard"
          sx={{ flexGrow: 1 }}
        />
        <Box
          sx={{
            border: "1px solid #ccc",
            borderRadius: "50%",
            ml: 2,
            p: 0.5,
            "&:hover": { borderColor: "#1976d2" },
          }}
        >
          <IconButton color="primary">
            <AddIcon />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ mt: 3 }}>
        <h3>รายการ:</h3>
      </Box>
    </Box>
  );
};

export default FoodPage;
