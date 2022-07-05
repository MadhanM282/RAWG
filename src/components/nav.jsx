import { Box, Typography, Avatar } from "@mui/material"
import PrimarySearchAppBar from "./Search"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export const NavBar = () => {
    const Dot = {
        width: "5px",
        height: "5px",
        borderRadius: "50%",
        background: "white"
    }
    return (
        <Box sx={{ display: "flex", alignItems: "center",justifyContent:"space-evenly",mt:3 }}>
            <Box>
                <Typography sx={{
                    fontWeight: "bolder", fontSize: "20px", letterSpacing: "10px",
                    fontFamily: "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif"
                }} variant="h4">RAWG</Typography>
            </Box>
            <Box>
                <PrimarySearchAppBar />
            </Box>
            <Box>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-evenly", gap: 2 }}>
                    <Avatar sx={{ background: 'linear-gradient(to bottom right, #aa07aa 0%, #99007f 100%)' }}>MM</Avatar>
                    <Typography>My library</Typography>
                    <img src="https://img.icons8.com/material-rounded/25/ffffff/appointment-reminders.png" alt="" />
                    <img src="https://img.icons8.com/ios-glyphs/25/ffffff/plus-math.png" alt="" />
                    <Typography variant="h6" sx={{ fontSize: "15px" }} >API</Typography>

                    <MoreHorizIcon />

                </Box>
            </Box>
        </Box>
    )
}