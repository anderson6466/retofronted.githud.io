import React from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { AcUnitSharp ,Block,Accessible,AccountTree,Payment,AddIcCall} from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';
import { FaBeer } from 'react-icons/fa';
import MenuItem from '@material-ui/core/MenuItem';
import Illustrati from '../images/Illustrati.png';
import Base from '../images/Base.png';
import DateFnsUtils from "@date-io/date-fns";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { green } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";


import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
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
     height:'650px',
     width:1350,
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
       

      backgroundImage: `url(${Base}) `,
      width: '700px',
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
       width: '500px',
       
      },
   
    playIcon: {
      height: 38,
      width: 38,
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

    fontSize: '200%'


},
letterseguro2:{
    
    color:"blue"
    
},

letterseguro3:{

color:'CBC4C2',
marginTop:'-45px'

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
marginTop:'21px',
marginLeft:'-108px'

       }   

  }));


function Iniciocons (){

    const history = useHistory();

    const routeChange = () =>{ 
      let path = `/form`; 
      history.push(path);
    }



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



    return (
    
        <Card className={classes.root}>





        <div  >
          <CardContent className={classes.content}>
          
<h1       className={classes.hletter1}     > Seguro de  </h1>  <br/>
<h1    className={classes.hletter2}         > Salud  </h1> 
 
  <p    className={classes.textletter}   > 
  <Accessible  color='white'     /> Cómpralo de manera Fácil y rápida 
  <br/>
  <Payment  color='white'     /> Cotiza y compra tu Seguro 100%  digital
  <br/>
  <Block  color='white'     /> Hasta S/.12 millones de Cobertura Anual
  <br/>
  <AddIcCall  color='white'     /> Mas de 300 Clinicas en todo el Perú

  </p>

           
          
          
          
          </CardContent>
          <CardContent  className={classes.content2}>

<p   className={classes.letterseguro}  >
Optén tu   <label className={classes.letterseguro2}  >Seguro Ahora </label>  

</p><br/>
<p   className={classes.letterseguro3}  >
Ingresa los datos para comenzar
</p>


          <div>
        <TextField
          id="standard-select-currency"
          select
          label=" "
          value={currency}
          onChange={handleChange}
        
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField id="outlined-basic" label=" Nro de Documento"   />


        <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justifyContent="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Fecha de Nacimiento"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />

</Grid>
    </MuiPickersUtilsProvider>

    <TextField   Style ="width:238px" id="outlined-search" label="Celular" type="search" />
    <br/>
    <FormControlLabel   className={classes.lettersegurocheck} 
        control={<GreenCheckbox checked={state.checkedA} onChange={handleChangecheck} name="checkedA" />}
        label={<p  Style="font-size:12px;color:#8891F4"  > Acepto las Politicas de Proteccion</p> }
         />
      
      <img  Style="position:absolute; top:0; left:504px;"  src={Illustrati} />
 
<p   Style="font-size:12px;margin-top:-15px;margin-left:8px;color:#8891F4"  >de datos Personales y los Terminos y </p>
<p   Style="font-size:12px;margin-top:-15px;margin-left:18px;color:#8891F4"  > condiciones</p>
 

<FormControlLabel   className={classes.lettersegurocheckB} 
        control={<GreenCheckbox checked={state.checkedB} onChange={handleChangecheck} name="checkedB" />}
        label={<p  Style="font-size:12px;color:#8891F4"  > Acepto las Politicas de envio de</p> }
        
        
        
      />

<p   Style="font-size:12px;margin-top:-15px;margin-left:-35px;color:#8891F4"  >comunicaciones personales</p>

<Button   className={classes.butttonAling}   onClick={routeChange}   variant="contained" color="primary">
  Comencemos
</Button>

</div>



 
          
          </CardContent>
        </div>
      
      </Card>
    
    
    
    
    
    
    
    
    
    
    
    )





}
  
export default Iniciocons;