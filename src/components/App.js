import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';
import { FormControlLabel } from '@material-ui/core';
import { Link } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import OpenbankLogo from '../assets/logo_openbank.png';
import brain from '../assets/brain.svg';
import Slide from './Slide';
import drawerImage from "./background.jpg";
import '../index.css';


class App extends Component {
	
	 constructor() {
     super();

    this.state = {
      user: '',
      pass: ''
    }
  }
	
search() {
   window.location.reload(false); 
  }
  
  render() {
	 
	 return (
	           <div>
			   <img src={OpenbankLogo}   alt="Smiley face" style={{padding: 10}} />
			   <br/>
			   <Grid container  spacing={10} justify="center" style={{backgroundImage: 'url(' + drawerImage + ')'}} >
                            
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                   <Card style={{margin: 0}} >
								     <CardContent>
									 <Typography gutterBottom variant="headline" component="h4">
                                     {"Residential"}
                                     </Typography>
                                     </CardContent>   
								   <TextField style={{padding: 24}} id="filled-basic" placeholder="Username" variant="filled" 
								   onChange={event => this.setState({ user: event.target.value })}
								   /> 
                                   <TextField style={{padding: 24}}
                                    id="standard-password-input"
                                    placeholder="Password"
                                    type="password"
									variant="filled"
                                    autoComplete="current-password"
									onChange={event => this.setState({ pass: event.target.value })}
									/>
								   <FormControlLabel style={{padding: 24}} control={<Checkbox name="checkedC" />} label="Remember me" />
                         	      <CardActions>
                                  <Button style={{margin: 15}} size ="large" variant="contained" color="primary"
								  onClick={() => this.search()} >
                                   Login
                                  </Button>
                                  </CardActions>
								  <Link style={{padding: 24}} href="#" onClick={""}>
                                   Forgot Username ?
                                  </Link>
								  <br/>
								  <Link style={{padding: 24}} href="#" onClick={""}>
                                   Dont have an account or register?
                                  </Link>
                                 </Card>
								 {' '}
                                </Grid>
								  <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <h4>Quick Links </h4>
									   <Link  href="#" onClick={""}>
                                        Link1
                                       </Link>
									   <br/>
									   <Link  href="#" onClick={""}>
                                        Link2
                                       </Link>
								</Grid>
							                         
	                         </Grid> 
				             <br/>
				             <br/>
				            <Slide/>
				            <br/>
				            <br/>
				            <br/>
                <Grid container spacing={10} style={{padding: 24}}>
                            <Grid item xs={12} sm={6} lg={4} xl={3}>
                                  <img src={brain}   alt="Smiley face1" />  
                                   <h4>Product Information</h4>
                                   <p>This Section gives detailed Information about Product.Click on Proceed button for age limit information.</p>
                                   <br/>
								        <Button  size ="large" variant="contained" color="primary" >
									    
                                         Click1
                                       </Button>								   
                             </Grid>
							 <Grid item xs={12} sm={6} lg={4} xl={3}>
                                   <img src={brain}   alt="Smiley face1" />  
                                   <h4>Product Information</h4>
                                   <p>This Section gives detailed Information about Product.Click on Proceed button for age limit information.</p>
                                   <br/>
									    <Button  size ="large" variant="contained" color="primary" >
                                         Click2
                                       </Button>
                                    								   
                                </Grid>
								
								<Grid item xs={12} sm={6} lg={4} xl={3}>
                                  <img src={brain}   alt="Smiley face1" />  
                                   <h4>Product Information</h4>
                                   <p>This Section gives detailed Information about Product.Click on Proceed button for age limit information.</p>
                                   <br/>
									    <Button  size ="large" variant="contained" color="primary" >
                                         Click3
                                       </Button>								   
                                </Grid>
								
                          
	            </Grid> 				
			
			  </div>	  
    );
  
}
}

export default App;