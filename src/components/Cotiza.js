import React from 'react';
import {CardHeader} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMore from '@material-ui/icons/ExpandMore';


import FavoriteIcon from '@material-ui/icons/Favorite';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { AcUnitSharp ,Block,Accessible,AccountTree,Payment,AddIcCall} from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';
import { FaBeer } from 'react-icons/fa';
import MenuItem from '@material-ui/core/MenuItem';
import Illustrati from '../images/Illustrati.png';
import Illustration from '../images/Illustration.png';

import glcorrect from '../images/glcorrect.png';
import Base from '../images/Base.png';
import DateFnsUtils from "@date-io/date-fns";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { green } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import CardActionArea from '@material-ui/core/CardActionArea';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import CardActions from '@material-ui/core/CardActions';
import PanoramaFishEyeRoundedIcon from '@material-ui/icons/PanoramaFishEyeRounded';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
  import Paper from '@material-ui/core/Paper';
  

const currencies = [
    {
      value: '1',
      label: 'DNI',
    },
    {
      value: '2',
      label: 'CEXT',
    },
    {
      value: '3',
      label: 'PPT',
    },
 
  ];

  



  const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
    root: {
     height:'1250px',
     width:'1340px',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
       

      backgroundImage: `url(${Base}) `,
      width: '500px',
      float:'left',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      borderBottomRightRadius:190,
      height:500,
      padding:0
    },
  

    content2: {
       float:'right',
       width: '700px',
       
      },
   
    playIcon: {
      height: 38,
      width: 38,
    },
cardt:{

      transition: 'color .2s',
        color: 'blue',
        
        
      
},
    hletter1: {
        fontWeight:   1,  
         color:'white',
         marginTop:'70px',
         padding:'0px',
         marginLeft:  '-360px',
          fontStretch:  'normal',
          fontFamily:   'sans-serif',
          fontSize: '300%'
          
        
       },
       hletter2: {
        fontWeight: 600,  
         color:'white',
         marginTop:'-50px',
         padding:'0px',
         marginLeft:  '-450px',
          fontStretch:  'normal',
          fontFamily:   'sans-serif',
          fontSize: '300%'
          
            


        
       },

letterseguro:{

    fontSize: '200%',
marginTop:'-14px'

},
letterseguro2:{
    
    color:"blue"
    
},

letterseguro3:{

color:'CBC4C2',
marginTop:'-45px'

},


iconox:{
    marginTop:'3px',
    height : '15px',
    marginLeft:'75px'

},



       textletter:{

        color:'white',
        marginLeft:  '60px',

        textAlign:'left',
        alignContent: 'flex-start',

        lineHeight: '250%',

       },
       lettersegurocheck:{

        width:'238px' ,
      
       },
       lettersegurocheckB:{
        width:'238px' ,
        marginTop:'-20px'
       },
       butttonAling:{
marginTop:'160px',
marginLeft:'-118px'

       },


butontext:{

    marginTop:'34px',marginRight:'12px'
},
       
       paper: {
       
       
        padding:'0px',
        height: 80,
        width: 100,
      },
      
      paperconten:{
     
        padding:'0px',
        height: 140,
        width: 420

      }
      
      ,
       radiobutonn:{

        width: 19,height: 19, paddingTop: 0,paddingBottom: 0,

       }

  }));

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
 
function Cotiza (){

    const [show, setShow] = React.useState(true);
    const [show2, setShow2] = React.useState(true);
    const [show3, setShow3] = React.useState(true);
    const [show4, setShow4] = React.useState(true);
    const clickcaja = (event) => {

        setXvalue(6);
      if(show==true){
        setXvalue(0);
        setShow(false);
        setShow3(true);
       
        setShow2(true);
        setShow4(true)
      } else {

        setShow(true);
        setShow3(true);
       
        setShow2(true);
        setShow4(true);

      } 
      
      };

      const clickcaja2 = (event, newValue) => {
debugger
        setXvalue(newValue);
        if(show2==true){
            setXvalue(1);
          setShow2(false);
          setShow(true);
          setShow3(true);
         
       
          setShow4(true)

  
        } else {
  
          setShow2(true);

          setShow3(true);
          setShow(true);
         
          setShow4(true);
  
        } 
        
        };

        const clickcaja3 = (event) => {
            setXvalue(6);
          
            if(show3==true){
                setXvalue(2);
              setShow3(false);
              setShow(true);
              setShow2(true);
             
           
              setShow4(true)
            } else {
      
              setShow3(true);
              setShow(true);
              setShow2(true);
              setShow4(true);

      
            } 
            
            };

            const clickcaja4 = (event) => {
                setXvalue(6);
                debugger
                if(show4==true){
                    setXvalue(3);
                  setShow4(false);
                  setShow3(true);
                  setShow(true);
                  setShow2(true);
                
                } else {
          
                  setShow4(true);
                  setShow3(true);
                  setShow(true);
                  setShow2(true);
                 
                } 
                
                };








    const [Rvalue, setRvalue] = React.useState('');
    const history = useHistory();



    const [Xvalue, setXvalue] = React.useState(0);

    const handleChangeselect = (event, newValue) => {
        setXvalue(newValue);
      };
    const routeChange = () =>{ 
      let path = `/paginafinal`; 
      history.push(path);
    }

    const radiobuttonchange = (event) => {
        setRvalue(event.target.value);
      };

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
     
      });
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleChangecheck = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
    
    const handleDateChange = (date) => {
        setSelectedDate(date);
      };
    const [currency, setCurrency] = React.useState('1');
    const classes = useStyles();
    const theme = useTheme();
    const handleChange = (event) => {
        setCurrency(event.target.value);
      };

      const [expanded, setExpanded] = React.useState(false);

      const handleChangeacord = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
      };

    return (
    
        <Card className={classes.root}>





        <div  >
          <CardContent className={classes.content}>
          
 

          <img  Style="position:absolute; top:0; left:304px;"  src={Illustrati} />
          
          
          
          </CardContent>
          <CardContent  className={classes.content2}>

          
         
          <div  Style="margin-left:-280px;margin-top:7px;" ><CheckCircleOutlineRoundedIcon Style="margin-left:-480px;" color="primary"/> <p Style="margin-left:120px;margin-top:-28px;"> Paso 2 de 7</p> </div>  




<p   className={classes.letterseguro}  >
Elige  <label className={classes.letterseguro2}  >tu Proteccion </label>  

</p><br/>




<Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
       
     
      
            <Grid       item>

            <CardActionArea onClick={clickcaja}     value={0}     >

              <Paper       className={classes.paper} color="secondary" variant="outlined">

               
              {   !show  &&    <img  className={classes.iconox}    src={glcorrect} />  }
       {   show &&      <PanoramaFishEyeRoundedIcon  className={classes.iconox}    /> }
              
               
              

  <p Style="width:15px;font-size: 13px;margin-left:15px; fontFamily:sans-serif;margin-top:-15px;"  >Basico</p>   <br/>

<p Style="width:15px;font-size: 11px;margin-left:4px;margin-top:-25px; fontFamily:sans-serif;"  >S/ </p> 
<p Style="width:15px;font-size: 20px;margin-left:20px;margin-top:-20px; fontFamily:sans-serif;"  > 160</p> 
<br/>
<p Style="width:15px;font-size: 11px;margin-left:20px;margin-top:-25px; fontFamily:sans-serif;"  > Mensual</p> 



            </Paper>

            </CardActionArea>
            </Grid>



            <Grid  item>


            <CardActionArea  onClick={clickcaja2}   value={1}     >
            <Paper className={classes.paper} color="secondary" variant="outlined">

               
{   !show2  &&    <img  className={classes.iconox}    src={glcorrect} />  }
{   show2 &&      <PanoramaFishEyeRoundedIcon  className={classes.iconox}    /> }

 




<p Style="width:15px;font-size: 13px;margin-left:15px; fontFamily:sans-serif;margin-top:-15px;"  >Avanzado</p>   <br/>

<p Style="width:15px;font-size: 11px;margin-left:4px;margin-top:-25px; fontFamily:sans-serif;"  >S/ </p> 
<p Style="width:15px;font-size: 20px;margin-left:20px;margin-top:-20px; fontFamily:sans-serif;"  > 200</p> 
<br/>
<p Style="width:15px;font-size: 11px;margin-left:20px;margin-top:-25px; fontFamily:sans-serif;"  > Mensual</p> 

</Paper>
           </CardActionArea>    
            </Grid>
            <Grid    item>
            <CardActionArea onClick={clickcaja3} value={2}   >
            <Paper className={classes.paper} color="secondary" variant="outlined">

               
{   !show3  &&    <img  className={classes.iconox}    src={glcorrect} />  }
{   show3 &&      <PanoramaFishEyeRoundedIcon  className={classes.iconox}    /> }

 





<p Style="width:15px;font-size: 13px;margin-left:15px; fontFamily:sans-serif;margin-top:-15px;"  >Premiun</p>   <br/>

<p Style="width:15px;font-size: 11px;margin-left:4px;margin-top:-25px; fontFamily:sans-serif;"  >S/ </p> 
<p Style="width:15px;font-size: 20px;margin-left:20px;margin-top:-20px; fontFamily:sans-serif;"  > 250</p> 
<br/>
<p Style="width:15px;font-size: 11px;margin-left:20px;margin-top:-25px; fontFamily:sans-serif;"  > Mensual</p> 

</Paper>
             </CardActionArea>  
            </Grid>
            <Grid   item>

            <CardActionArea     onClick={clickcaja4} value={3}  >
            <Paper className={classes.paper} color="secondary" variant="outlined">

               
{   !show4  &&    <img  className={classes.iconox}    src={glcorrect} />  }
{   show4 &&      <PanoramaFishEyeRoundedIcon  className={classes.iconox}    /> }

 



<p Style="width:15px;font-size: 13px;margin-left:15px; fontFamily:sans-serif;margin-top:-15px;"  >Full</p>   <br/>

<p Style="width:15px;font-size: 11px;margin-left:4px;margin-top:-25px; fontFamily:sans-serif;"  >S/ </p> 
<p Style="width:15px;font-size: 20px;margin-left:20px;margin-top:-20px; fontFamily:sans-serif;"  > 500</p> 
<br/>
<p Style="width:15px;font-size: 11px;margin-left:20px;margin-top:-25px; fontFamily:sans-serif;"  > Mensual</p> 

</Paper>
              </CardActionArea> 
            </Grid>
        
        </Grid>
      </Grid>

      <TabPanel value={Xvalue} index={0}  Style="width:500px;margin:auto;"  >
      <Card variant="outlined"    >
      
      <CardHeader  Style="background:#E1E9DF;color:#8A9AC2;font-size:9px;padding:5px; " sx={{ fontSize: 14 }}  title={ <Typography gutterBottom variant="h6" component="h6"> Cuentas con estos Beneficios      </Typography>}>
      
     
      
        </CardHeader>
      
      <CardContent>


      <Paper className={classes.paperconten} color="secondary" variant="outlined">




<p Style="width:200px;font-size: 13px;margin-left:-30px; fontFamily:sans-serif;margin-top:10px;"  >Cobertura máxima</p>   <br/>

<p Style="width:15px;font-size: 25px;margin-left:15px;margin-top:-25px; fontFamily:sans-serif;"  >S/1MM </p> 


<Chip  Style="background:green;color:white;padding:0px;width:109px;font-size: 10px;margin-left:-285px;margin-top:-20px; fontFamily:sans-serif;"  label="PLAN Basico" color="success" />


<Divider  Style="margin-left:250px;margin-top:-126px;"  orientation="vertical" />
 
<img  Style="position:absolute; top:350px; left:1080px;width:100px;"  src={Illustration} />

</Paper>


  
 <FavoriteIcon  style={{ "color":'#788DF0',    "marginTop": "20px",height:'15px', padding: "0px", "marginLeft": "-400px" }}  size='15px'  />
 <p  style={{"marginTop": "-27px", "marginLeft": "-320px"  }}   >Lima</p> 
 <p  style={{marginTop: "-35px", fontSize:'10px',marginLeft: "-179px"  }}   >(Zona de cobertura)</p>



 <FavoriteIcon  style={{ "color":'#788DF0',    "marginTop": "10px",height:'15px', padding: "0px", "marginLeft": "-400px" }}  size='15px'  />
 <p  style={{"marginTop": "-27px", "marginLeft": "-280px"  }}   >+30 clínicas</p> 
 <p  style={{marginTop: "-35px", fontSize:'10px',marginLeft: "-99px"  }}   >(En red afiliada)</p>

 <FavoriteIcon  style={{ "color":'#D2D3D8',    "marginTop": "10px",height:'15px', padding: "0px", "marginLeft": "-400px" }}  size='15px'  />
 <p  style={{ textDecorationLine:'line-through',     "marginTop": "-27px", "marginLeft": "-220px"  }}   >Medico a domicilio</p> 
  
 <FavoriteIcon  style={{ "color":'#D2D3D8',    "marginTop": "10px",height:'15px', padding: "0px", "marginLeft": "-400px" }}  size='15px'  />
 <p  style={{ textDecorationLine:'line-through',     "marginTop": "-27px", "marginLeft": "-200px"  }}   >Chequeos preventivos</p> 
  
 <FavoriteIcon  style={{ "color":'#D2D3D8',    "marginTop": "10px",height:'15px', padding: "0px", "marginLeft": "-400px" }}  size='15px'  />
 <p  style={{ textDecorationLine:'line-through',     "marginTop": "-27px", "marginLeft": "-200px"  }}   >Reembolso Nacional</p> 
  
 <FavoriteIcon  style={{ "color":'#D2D3D8',    "marginTop": "10px",height:'15px', padding: "0px", "marginLeft": "-400px" }}  size='15px'  />
 <p  style={{ textDecorationLine:'line-through',     "marginTop": "-27px", "marginLeft": "-170px"  }}   >Reembolso Internacional</p> 
   
     
     
      </CardContent>
      </Card>
      </TabPanel>
      <TabPanel value={Xvalue} index={1}   Style="width:500px;margin:auto;"            >
      <Card variant="outlined"    >
      
      <CardHeader  Style="background:#E1E9DF;color:#8A9AC2;font-size:9px;padding:5px; " sx={{ fontSize: 14 }}  title={ <Typography gutterBottom variant="h6" component="h6"> Cuentas con estos Beneficios      </Typography>}>
      
     
      
        </CardHeader>
      
      <CardContent>


      <Paper className={classes.paperconten} color="secondary" variant="outlined">




<p Style="width:200px;font-size: 13px;margin-left:-30px; fontFamily:sans-serif;margin-top:10px;"  >Cobertura máxima</p>   <br/>

<p Style="width:15px;font-size: 25px;margin-left:15px;margin-top:-25px; fontFamily:sans-serif;"  >S/5MM </p> 


<Chip  Style="background:green;color:white;padding:0px;width:109px;font-size: 10px;margin-left:-285px;margin-top:-20px; fontFamily:sans-serif;"  label="PLAN AVANZADO" color="success" />


<Divider  Style="margin-left:250px;margin-top:-126px;"  orientation="vertical" />
 
<img  Style="position:absolute; top:350px; left:1080px;width:100px;"  src={Illustration} />

</Paper>

<FavoriteIcon  style={{ "color":'#788DF0',    "marginTop": "20px",height:'15px', padding: "0px", "marginLeft": "-400px" }}  size='15px'  />
 <p  style={{"marginTop": "-27px", "marginLeft": "-320px"  }}   >Lima</p> 
 <p  style={{marginTop: "-35px", fontSize:'10px',marginLeft: "-179px"  }}   >(Zona de cobertura)</p>



 <FavoriteIcon  style={{ "color":'#788DF0',    "marginTop": "10px",height:'15px', padding: "0px", "marginLeft": "-400px" }}  size='15px'  />
 <p  style={{"marginTop": "-27px", "marginLeft": "-280px"  }}   >+30 clínicas</p> 
 <p  style={{marginTop: "-35px", fontSize:'10px',marginLeft: "-99px"  }}   >(En red afiliada)</p>

 <FavoriteIcon  style={{ "color":'#788DF0',    "marginTop": "10px",height:'15px', padding: "0px", "marginLeft": "-400px" }}  size='15px'  />
 <p  style={{       "marginTop": "-27px", "marginLeft": "-220px"  }}   >Medico a domicilio</p> 
  
 <FavoriteIcon  style={{ "color":'#788DF0',    "marginTop": "10px",height:'15px', padding: "0px", "marginLeft": "-400px" }}  size='15px'  />
 <p  style={{      "marginTop": "-27px", "marginLeft": "-200px"  }}   >Chequeos preventivos</p> 
  
 <FavoriteIcon  style={{ "color":'#D2D3D8',    "marginTop": "10px",height:'15px', padding: "0px", "marginLeft": "-400px" }}  size='15px'  />
 <p  style={{ textDecorationLine:'line-through',     "marginTop": "-27px", "marginLeft": "-200px"  }}   >Reembolso Nacional</p> 
  
 <FavoriteIcon  style={{ "color":'#D2D3D8',    "marginTop": "10px",height:'15px', padding: "0px", "marginLeft": "-400px" }}  size='15px'  />
 <p  style={{ textDecorationLine:'line-through',     "marginTop": "-27px", "marginLeft": "-170px"  }}   >Reembolso Internacional</p> 
   
     
     
      </CardContent>
      </Card>
      </TabPanel>
      <TabPanel value={Xvalue} index={2}   Style="width:500px;margin:auto;"       >
        Sin Datos
      </TabPanel>
      <TabPanel value={Xvalue} index={3}  Style="width:500px;margin:auto;"       >
       Sin Datos
      </TabPanel>

          <div>

          
          <Box sx={{padding:'2px',marginLeft:'120px' ,textAlign:'left',   width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
<label    > Revisa Nuestros</label>
<br/>
<label  style={{ marginTop:'45px',"color":'#788DF0'}}   > Servicios y exclusiones</label>


<br/>

<br/>
 
      <Accordion    Style="width:455px;"   expanded={expanded === 'panel1'} onChange={handleChangeacord('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          
          <Typography sx={{ color: 'text.secondary' }}>Servicios Brindados </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            La franquicia brinda un servicio 100% en seguro para toda tu familia.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion    Style="width:455px;"    expanded={expanded === 'panel2'} onChange={handleChangeacord('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          Exclusiones
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           No cubre asistencia post-Operatoria
          </Typography>
        </AccordionDetails>
      </Accordion>
      

</Box>  
 
 
<Box     Style="   text-align:left;width: 460px;margin:auto"        >

<Button    className={classes.butontext}       variant="contained"     Style="background:white;color:#1879CA;"         >
  Enviar Cotizacion por correo
</Button>

<Button  className={classes.butontext}      onClick={routeChange}   variant="contained"     Style="background:#8A9AC2;"         >
  COMPRAR PLAN
</Button>
 </Box>  
</div>



 
          
          </CardContent>
        </div>
      
      </Card>
    
    
    
    
    
    
    
    
    
    
    
    )





}
  
export default Cotiza;