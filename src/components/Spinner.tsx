import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const Spinner = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", width: "100%", height: "100vh", backgroundColor: "rgba(157, 177, 186, 0.5)"}}>
            <CircularProgress />
        </Box>  
    )
}

export default Spinner