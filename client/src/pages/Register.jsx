import React from 'react';
import {Container, FormGroup, FormControlLabel, Box, Button, Checkbox} from '@mui/material';
import HeaderRight from '../components/Header'

export default function Register(){

    return (
   <>
   <HeaderRight/>
         <Container maxWidth="sm"
            style={{ backgroundColor: '#cdcecf',
            height: '100vh',
            display: 'flex',
            justifyContent:'center', 
            alignItems: 'center', 
            flexDirection: 'column'}}>
        
         

        <FormGroup className='form' 
        style={{display:'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              backgroundColor:'white',
              width:'16rem',
              height:'25rem',
              borderRadius:"0.5rem",
             marginTop:'5rem'}}>

            <Box>
               <p>Sóc:</p>
               <FormGroup style={{display:"flex", flexDirection:'row'}}>
                <FormControlLabel control={<Checkbox style={{color:'#E2A0FF',fontFamily:'Consolas'}}/>} label="Artista" />
                <FormControlLabel control={<Checkbox style={{color:'#E2A0FF'}} />} label="Sala" />
               </FormGroup>

            </Box>
              
            <Box style={{lineHeight:"1px"}}>
              <p>Nom i cognoms:</p>
              <input type="text"
                style={{
                    width: "13rem",
                    height: "1em",
                    fontSize: "1rem",
                    borderRadius: "10px",
                    border:"1px solid grey"
                    
                }} />
            </Box> 
              
            <Box style={{lineHeight:"1px"}}>
              <p>Nom del grup/sala:</p>
              <input type="text"
              style={{
                    color: "#2e5137",
                    width: "13rem",
                    height: "1em",
                    fontSize: "1rem",
                    borderRadius: "10px",
                    border:"1px solid grey"
                }} />
            </Box> 
              
            <Box style={{lineHeight:"1px"}}>
              <p>Correu electrònic:</p>
              <input type="text"
              style={{
                    color: "#2e5137",
                    width: "13rem",
                    height: "1em",
                    fontSize: "1rem",
                    borderRadius: "10px",
                    border:"1px solid grey"
                    
                }} />
            </Box> 
            
            <Box style={{lineHeight:"1px"}}>
              <p>Contrasenya:</p>
              <input type="text"
              style={{
                    width: "13rem",
                    height: "1em",
                    fontSize: "1rem",
                    borderRadius: "10px",
                    border: "1px solid grey"
                    
                }} />
              </Box> 
          </FormGroup>

              
               
                
    
                <Button
                  style={{
                      backgroundColor: "#E2A0FF",
                      width: "9rem",
                      height: "2rem",
                      borderRadius: "40px",
                      color: "black",
                      textTransform: "capitalize",
                      fontSize: "1rem",
                      fontWeight: "200",
                      border: "2.5px solid black",
                      margin: "1.3em"
                    }}
                    >
                  Enviar
                </Button>

            
    

         
    
        </Container>
        </>
      
      
      

    )
}
