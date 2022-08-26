import './App.css';
import { Stack, Button, ButtonGroup, Checkbox, IconButton, Fab, Box, Typography, Skeleton, Avatar, Grid, Accordion, AccordionSummary, AccordionDetails, Paper, Tabs, Tab } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
// import { Image } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// import {EditIcon , PersonIcon, DeleteIcon, AddIcon} from '@mui/icons-material';

function App() {
  const [loading, setLoading] = useState(true);
  const Image = styled('img')({
    width: '100%',
  });

  return (
    <>

      <div style={{ margin: "5%" }}>
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained" size='small'>Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>

        <Button variant="contained" href='https://www.youtube.com' size="small">
          Small
        </Button>
        <Button variant="outlined" size="medium">
          Medium
        </Button>
        <Button variant="outlined" size="large">
          Large
        </Button>

        <h2>Buuton Group</h2>
        <ButtonGroup >
          <Button variant='contained'>1</Button>
          <Button variant='outlined'>2</Button>
          <Button variant='contained'>3</Button>
        </ButtonGroup>

        <h2>CheckBox</h2>
        <Checkbox defaultChecked />
        <Checkbox />
        <Checkbox defaultChecked color='success' />
        <Checkbox defaultChecked color='secondary' />
        <Checkbox disabled />
        <Checkbox disabled checked />

        <h2>Button With Icon</h2>
        <Stack spacing={2} direction='row'>
          <Button variant='contained' startIcon={<PersonIcon />}>Profile</Button>
          <Button variant='contained' endIcon={<PersonIcon />}>Profile</Button>
        </Stack>

        <h2>Icon Button</h2>
        <IconButton>
          <DeleteIcon fontSize="small" color='primary' />
        </IconButton>
        <IconButton>
          <DeleteIcon fontSize="medium" color='secondary' />
        </IconButton>
        <IconButton>
          <DeleteIcon fontSize="large" />
        </IconButton>
        <IconButton>
          <DeleteIcon fontSize="inherit" />
        </IconButton>

        <h2>Fab Icon</h2>

        <Stack spacing={1} direction='row'>
          <Fab>
            <AddIcon />
          </Fab>
          <Fab color="secondary" aria-label="edit">
            <EditIcon />
          </Fab>

          <Fab size='small'>
            <AddIcon />
          </Fab>
          <Fab color="success" size='small' aria-label="edit">
            <EditIcon />
          </Fab>

          <Fab size='large'>
            <AddIcon />
          </Fab>
          <Fab color="success" size='large' aria-label="edit">
            <EditIcon />
          </Fab>
        </Stack>





        <Grid container spacing={6} style={{ marginTop: '1%' }}>
          <Grid item xs={3}>
            <Box >
              <Skeleton variant="circular">
                <Avatar />
              </Skeleton>
              <Skeleton width="100%">
                <Typography>.</Typography>
              </Skeleton>
              <Skeleton variant="rectangular" width="100%">
                <div style={{ paddingTop: '56%' }} />
              </Skeleton>
              <Skeleton animation="wave" height={14} style={{ marginBottom: 6, marginTop: 6 }} />
              <Skeleton animation="wave" height={14} width="80%" />
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box>
              <Avatar src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg" />
              <Typography>Ted</Typography>
              <Image
                src="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
                alt=""
              />
              <Typography variant="body2" color="text.secondary" component="p">
                {
                  "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure"
                }
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid style={{ marginTop: '20px' }}>
          <Accordion elevation={3}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography >Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion elevation={1}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion disabled>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>Disabled Accordion</Typography>
            </AccordionSummary>
          </Accordion>
        </Grid>


        <Box sx={{ display: 'flex', columnGap: '10px', marginTop: '10px' }}>
          <Paper sx={{ height: '100px', width: '100px' }} elevation={3} />
          <Paper sx={{ height: '100px', width: '100px' }} elevation={3} />
        </Box>


        {/* <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={8}>
              <Typography elevation={2} sx={{backgroundColor: '#fff'}}>xs=6 md=8</Typography>
            </Grid>
            <Grid item xs={6} md={4}>
              <Typography>xs=6 md=4</Typography>
            </Grid>
            <Grid item xs={6} md={4}>
              <Typography>xs=6 md=4</Typography>

            </Grid>
            <Grid item xs={6} md={8}>
              <Typography>xs=6 md=8</Typography>
            </Grid>
          </Grid>
        </Box> */}
















      </div>




    </>
  );
}

export default App;
