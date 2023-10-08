import { Stack, styled } from "@mui/system";
import { IconButton } from "@mui/material";

export const StyledIconButton = styled(IconButton)(
  ({ bg, hoverBg, iconHover }) => ({
    padding: "0",
    borderRadius: "12px",
    width: "40px",
    height: "60px",

    backgroundColor: bg,
    "&:hover": {
      backgroundColor: hoverBg,
      "& .MuiSvgIcon-root": {
        color: iconHover,
      },
    },
    "& .MuiSvgIcon-root": {
      fontSize: "28px",
      border: "none",
      color: "#2F2F2F",
    },
  })
);

export function Arrow({
  onClick,
  children,
  buttonHeight,
  ButtonsDisplay,
  currentSlide,
  isLeft = true,
  slideCount,
  slidesToShow,
}) {
  return (
    <>
      {(isLeft
        ? currentSlide !== 0
        : currentSlide !== slideCount - slidesToShow) && (
        <Stack
          onClick={onClick}
          display={ButtonsDisplay}
          sx={{
            position: "absolute",
            bottom: "30%",
            left: isLeft && "-40px",
            right: !isLeft && "-42px",
            zIndex: 1,
          }}
        >
          <StyledIconButton
            borderR="4px"
            showBorder={true}
            width="48px"
            height="64px"
            bg="rgb(18, 18, 18, 0.45)"
            hoverBg="rgb(18, 18, 18, 0.45)"
            iconColor="#fff"
            iconHover="#f5c518"
            iconSize="30px"
          >
            {children}
          </StyledIconButton>
        </Stack>
      )}
    </>
  );
}
