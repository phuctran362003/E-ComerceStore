import { Backdrop, Box, CircularProgress, LinearProgress, Typography } from '@mui/material';
interface Props {
    message?: string;
}
function LoadingComponent({ message = 'Loading...' }: Props) {


    return (
        <Backdrop open={true} invisible={true}>
            <Box display='flex' justifyContent='center'alignItems='center' height='100vh'>
                <CircularProgress/>
                <Typography variant='h4' sx={{justifyContent:'center', position:'fixed', top:'60%'}}>
                    {message}
                </Typography>
            </Box>
        </Backdrop>
    )
}

export default LoadingComponent
