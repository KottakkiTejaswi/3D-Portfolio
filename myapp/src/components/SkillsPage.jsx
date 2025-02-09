import { Avatar, Box, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import StorageIcon from '@mui/icons-material/Storage';
import { usePage } from './PageContext';
function SkillsPage() {
  const { handlePageTurn } = usePage();
  
    const DemoPaper = styled(Paper)(({ theme }) => ({
        width: 100,
        height: 100,
        padding: theme.spacing(2),
        ...theme.typography.body2,
        textAlign: 'center',
        fontSize: "0.9rem",
       
          [theme.breakpoints.down("xs")]: {
            width: 40,
            height: 40,
            fontSize:'0.5rem'
          },
          [theme.breakpoints.down("sm")]: {
            width: 60,
            height: 60,
            fontSize: "0.5rem"
          },
          [theme.breakpoints.down("md")]: {
            width: 80,
            height: 80,
            fontSize: "0.9rem"
          },
        //   [theme.breakpoints.between(430, 932)]: {
        //     // Styles for this specific range
        //     width: 60,
        //     height: 60,
        //     fontSize: "0.5rem",
        //   },
         
      }));
    return (
      <>
        <Box
                sx={{
                  p: { xs: 2, sm:0 },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: { xs: 1, sm: 1, md: 2 },
                }} 
              >
         <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    color: "#555",
                    fontSize: { xs: "1.5rem", sm: "1.5rem", md: "2rem" },
                  }}
                >
                  Skills
        </Typography>

        <Box sx={{   width:'100%',  }}> 

          <Box sx={{display:'flex' , justifyContent:'flex-start', alignItems:'center', width:'100%',}}>
          {/* <box-icon name='laptop' ></box-icon>  */}
          <LaptopMacIcon sx={{fontSize: 24, color:'blue'}} />
               <Typography
               variant= 'subtitle1'
                >Front-End</Typography> 
            </Box>  
        
            <Stack direction="row" spacing={2}>
            <DemoPaper variant="elevation">
                <img 
                    src={require("../images/html.png")} 
                    alt="HTML" 
                    style={{ width: '70%', height: '70%', objectFit: 'contain'}} 
                    /> HTML

                </DemoPaper>

                <DemoPaper variant="elevation">
                <img 
                    src={require("../images/css.png")} 
                    alt="CSS" 
                    style={{ width: '70%', height: '70%', objectFit: 'contain'}} 
                    /> CSS
                </DemoPaper>

                <DemoPaper variant="elevation">
                <img 
                    src={require("../images/js.png")} 
                    alt="js" 
                    style={{ width: '70%', height: '70%', objectFit: 'contain'}} 
                    /> Javascript
                </DemoPaper>
                <DemoPaper variant="elevation">
                <img 
                    src={require("../images/ts.png")} 
                    alt="ts" 
                    style={{ width: '70%', height: '70%', objectFit: 'contain'}} 
                    /> Typescript
                </DemoPaper>
                
                

            </Stack>
<br></br>
            <Stack direction="row" spacing={2}>
            <DemoPaper variant="elevation">
                <img 
                    src={require("../images/react.png")} 
                    alt="react" 
                    style={{ width: '70%', height: '70%', objectFit: 'contain'}} 
                    /> React
                </DemoPaper>
                
                <DemoPaper variant="elevation">
                <img 
                    src={require("../images/mui.png")} 
                    alt="mui" 
                    style={{ width: '70%', height: '70%', objectFit: 'contain'}} 
                    /> MUI
                </DemoPaper>
                

            </Stack>

        </Box>
        
        <Box sx={{   width:'100%',  }}> 

                <Box sx={{display:'flex' , justifyContent:'flex-start', alignItems:'center', width:'100%', }}>
                {/* <box-icon name='laptop' ></box-icon>  */}
                <StorageIcon sx={{fontSize: 24, color:'blue'}} />
                    <Typography
                    variant= 'subtitle1'
                    >Back-End</Typography> 
                </Box>  

                <Stack direction="row" spacing={2}>
                    <DemoPaper variant="elevation">
                        <img 
                            src={require("../images/python.png")} 
                            alt="python" 
                            style={{ width: '70%', height: '70%', objectFit: 'contain'}} 
                        /> Python
                    </DemoPaper>    
                    <DemoPaper variant="elevation">
                    <img 
                            src={require("../images/java.png")} 
                            alt="java" 
                            style={{ width: '70%', height: '70%', objectFit: 'contain'}} 
                        /> Java
                    </DemoPaper>
                    <DemoPaper variant="elevation">
                    <img 
                            src={require("../images/springboot.png")} 
                            alt="spring boot" 
                            style={{ width: '70%', height: '70%', objectFit: 'contain'}} 
                        /> SpringBoot
                    </DemoPaper>
                    <DemoPaper variant="elevation">
                        <img 
                                src={require("../images/node.png")} 
                                alt="node" 
                                style={{ width: '70%', height: '70%', objectFit: 'contain'}} 
                            /> NodeJS
                    </DemoPaper>

                </Stack>
                <br></br>
                <Stack direction="row" spacing={2}>
                    <DemoPaper variant="elevation">
                    <img 
                                src={require("../images/postgresql.png")} 
                                alt="postgresql" 
                                style={{ width: '70%', height: '70%', objectFit: 'contain'}} 
                            /> PostgreSQL
                    </DemoPaper>
                    
                </Stack>

                </Box>
                        
                            </Box>
                        
      <span className='number-page'>2</span>
      <span 
        className="nextprev-btn back" 
        data-page="turn-1"
        onClick={() => handlePageTurn('prev')}
        sx={{ cursor: 'pointer' }} // Add MUI sx prop for styling
      >
        <box-icon name='chevron-left'></box-icon>
      </span>
                        
                        



        
        
      </>
    );
  }
  
  export default SkillsPage;
  