import { Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

const SliderCardImage = ({ img, title, onClick }) => {
  return (
    <Stack p={1}>
      <Card
        sx={{ maxWidth: { xs: "100%", md: "345" }, cursor: "pointer" }}
        onClick={onClick}
      >
        <CardMedia
          component="img"
          sx={{
            height: { xs: 320, sm: 140 },
            objectFit: "cover",
            objectPosition: "center",
          }}
          image={img}
          loading="lazy"
          title={title}
        />
      </Card>
    </Stack>
  );
};
export default SliderCardImage;
