import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import image from './images/alibaba-logo.png';
import slider1 from './images/Capture.PNG';
import slider2 from './images/Capture2.PNG';
import slider3 from './images/Capture3.PNG';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MessageIcon from '@mui/icons-material/Message';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import SearchIcon from '@mui/icons-material/Search';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CardPic1 from './images/card1.jpg'
import CardPic2 from './images/card2.jpg'
import CardPic3 from './images/card3.jpg'
import ArticleIcon from '@mui/icons-material/Article';
import light1 from './images/light1.jpg'
import light2 from './images/light2.jpg'
import mobile1 from './images/mobile1.jpg'
import mobile2 from './images/mobile2.jpg'
import watch1 from './images/watch1.jpg'
import watch2 from './images/watch2.jpg'
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import earPhone1 from './images/earphone1.jpg'
import earPhone2 from './images/earphone2.jpg'
import bag1 from './images/bag1.jpg'
import bag2 from './images/bag2.jpg'
import laptop1 from './images/laptop1.jpg'
import laptop2 from './images/laptop2.jpg'
import light3 from './images/light3.jpg'
import TextField from '@mui/material/TextField';
import MultipleSelect from './Components'


function App() {
  return (

    <div >
      <Box  >
        <AppBar class="top-bar" position="static">
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            </IconButton>
          <Container>
          <Typography variant="h6" component="div">
              Digitals Booths now Live! Try a new immersive sourcing experience
            </Typography>
      
            </Container>
          </Toolbar>
        </AppBar>
      </Box>

      <Box  >

        <AppBar class="nav-bar" position="static">

          <Container maxWidth="lg">

            <Grid container spacing={1}>
              <Grid item xs={2}>
                <Item>   <img src={image} width="150px" height="70px" alt="" />
                </Item>
              </Grid>
              <Grid item xs={6} >
                <Item>

                  <Paper
                    component="form"
                    sx={{ p: '2px 4px', mt: "8px", display: 'flex', backgroundColor: "grey", alignItems: 'center', width: 600 }}
                  >
                    <IconButton sx={{ p: '10px' }} aria-label="menu">
                    </IconButton>
                    <Select className="select" labelId="label" id="Select" value="10">
                      <MenuItem value="10">Products</MenuItem>
                      <MenuItem value="20">Suplier</MenuItem>
                    </Select>

                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="What are you looking for..."
                      inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    <CameraAltIcon />
                    <Button  sx={{color:"#ff6d00"}} className="btn-input-search"  ><SearchIcon />Search</Button>

                  </Paper>

                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                  <div class="side-bar">

                    <button><AccountCircleIcon /> Sign in <br />  join free </button>
                    <button><MessageIcon /> <br />Messages</button>
                    <button><LocalAtmIcon /> <br />Order</button>
                    <button><ShoppingCartIcon /> <br />Cart</button>






                  </div>
                </Item>
              </Grid>
            </Grid>
          </Container>
        </AppBar>
      </Box>
      <Container className="main-container" maxWidth="lg">

        <Paper
          component="form"
          sx={{ p: '2px 4px', backgroundColor: "#f8f9fa", alignItems: 'center' }}

        >
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={slider1} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={slider2} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={slider3} class="d-block w-100" alt="..." />
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

          <div class="row">
            <Grid item xs={6} container>
              <Grid item xs={6}>
                <Card sx={{ backgroundColor: "#343a40", Width: "200px", borderRadius: 3 }} className="card-slider1" >
                  <CardContent >
                    <Typography variant="h5" className="heading-slider1" component="div">
                      Pro Buyer Exclusive

                    </Typography>
                    <Typography sx={{ mb: 1.5 }} className="heading-slider1">
                      Get payment terms and much more
                    </Typography>
                    <Button class="btn-slider1" size="small">UPGRADE</Button>

                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={6}>
                <Card className="card-slider2" sx={{ backgroundColor: "#fb5607", Width: "400px", borderRadius: 3 }}>
                  <CardContent>
                    <Typography variant="h5" className="heading-slider2" component="div">
                      Home and Garden 2021 Online <br />
                      Trade Show
                    </Typography>
                    <Button class="slider-btn2" size="small">View more</Button>

                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Grid container xs={6}>
              <Grid xs={4}>
                <Card sx={{ backgroundColor: "#edf6f9", Width: "200px", borderRadius: 3 }} className="card-slider3" >
                  <CardContent >
                    <Typography variant="h6" className="heading-slider3" component="div">
                      Home & <br />
                      Garden

                    </Typography>

                    <img src={CardPic1} className="card-image" width="100px" align="right" height="100px" />

                  </CardContent>
                </Card>


              </Grid>
              <Grid xs={4}>
                <Card sx={{ backgroundColor: "#edf6f9", Width: "200px", borderRadius: 3 }} className="card-slider3" >
                  <CardContent >
                    <Typography variant="h6" className="heading-slider3" component="div">
                      Digital <br />
                      Booths
                    </Typography>
                    <img src={CardPic2} className="card-image" width="100px" align="right" height="100px" />

                  </CardContent>
                </Card>

              </Grid>
              <Grid xs={4}>
                <Card sx={{ backgroundColor: "#edf6f9", Width: "200px", borderRadius: 3 }} className="card-slider3" >
                  <CardContent >
                    <Typography variant="h6" className="heading-slider3" component="div">
                      Top-  <br />
                      Ranking
                    </Typography>
                    <img src={CardPic3} className="card-image" width="100px" align="right" height="100px" />

                  </CardContent>
                </Card>

              </Grid>


            </Grid>



          </div>
        </Paper>


        <Paper>

        </Paper>
        <Grid xs={12} container className="div-card1">
          <Grid xs={4}>
            <Card className="New-arrivals" sx={{ backgroundColor: "white", Width: "400px", borderRadius: 3 }}>
              <CardContent>
                <h5><ArticleIcon />New Arrivals</h5>
                <Grid xs={12} xs={{ p: 5 }} container>
                  <Grid sx={{ p: 1 }}>
                    <img src={light1} className="card-image" width=" 150px" height="100px" />

                  </Grid>
                  <Grid sx={{ p: 1 }}>
                    <img src={light2} className="card-image" width="150px" height="100px" />

                  </Grid>


                </Grid>
                <Typography className="card-align">
                  <b>$5.47</b> <br />
                  Trending Now
                </Typography>

              </CardContent>
            </Card>
          </Grid>

          <Grid xs={4}>
            <Card className="New-arrivals" sx={{ backgroundColor: "white", Width: "400px", borderRadius: 3 }}>
              <CardContent>
                <h5><AutoGraphIcon />Top Ranked Products</h5>
                <Grid xs={12} xs={{ p: 5 }} container>
                  <Grid sx={{ p: 1 }}>
                    <img src={mobile1} className="card-image" width=" 150px" height="100px" />

                  </Grid>
                  <Grid sx={{ p: 1 }}>
                    <img src={mobile2} className="card-image" width="150px" height="100px" />

                  </Grid>


                </Grid>
                <Typography className="card-align">
                  <b>$6.67</b> <br />
                  Trending Now
                </Typography>

              </CardContent>
            </Card>
          </Grid>

          <Grid xs={4}>
            <Card className="New-arrivals" sx={{ backgroundColor: "white", Width: "400px", borderRadius: 3 }}>
              <CardContent>
                <h5><AutoFixHighIcon />Personal Protective equipment</h5>
                <Grid xs={12} xs={{ p: 5 }} container>
                  <Grid sx={{ p: 1 }}>
                    <img src={watch1} className="card-image" width=" 150px" height="100px" />

                  </Grid>
                  <Grid sx={{ p: 1 }}>
                    <img src={watch2} className="card-image" width="150px" height="100px" />

                  </Grid>


                </Grid>
                <Typography className="card-align">
                  <b>$5.47</b> <br />
                  Trending Now
                </Typography>

              </CardContent>
            </Card>

          </Grid>

        </Grid>

        <Grid xs={12} container className="div-card1">
          <Grid xs={4}>
            <Card className="New-arrivals" sx={{ backgroundColor: "white", Width: "400px", borderRadius: 3 }}>
              <CardContent>
                <h5><ArticleIcon />Dropshipping</h5>
                <Grid xs={12} xs={{ p: 5 }} container>
                  <Grid sx={{ p: 1 }}>
                    <img src={earPhone1} className="card-image" width=" 150px" height="100px" />

                  </Grid>
                  <Grid sx={{ p: 1 }}>
                    <img src={earPhone2} className="card-image" width="150px" height="100px" />

                  </Grid>


                </Grid>
                <Typography className="card-align">
                  <b>$6.97</b> <br />
                  Trending Now
                </Typography>

              </CardContent>
            </Card>
          </Grid>

          <Grid xs={4}>
            <Card className="New-arrivals" sx={{ backgroundColor: "white", Width: "400px", borderRadius: 3 }}>
              <CardContent>
                <h5><AutoGraphIcon />Global Original Sources</h5>
                <Grid xs={12} xs={{ p: 5 }} container>
                  <Grid sx={{ p: 1 }}>
                    <img src={bag1} className="card-image" width=" 150px" height="100px" />

                  </Grid>
                  <Grid sx={{ p: 1 }}>
                    <img src={bag2} className="card-image" width="150px" height="100px" />

                  </Grid>


                </Grid>
                <Typography className="card-align">
                  <b>$4.87</b> <br />
                  Trending Now
                </Typography>

              </CardContent>
            </Card>
          </Grid>

          <Grid xs={4}>
            <Card className="New-arrivals" sx={{ backgroundColor: "white", Width: "400px", borderRadius: 3 }}>
              <CardContent>
                <h5><AutoFixHighIcon />True Views</h5>
                <Grid xs={12} xs={{ p: 5 }} container>
                  <Grid sx={{ p: 1 }}>
                    <img src={laptop1} className="card-image" width=" 150px" height="100px" />

                  </Grid>
                  <Grid sx={{ p: 1 }}>
                    <img src={laptop2} className="card-image" width="150px" height="100px" />

                  </Grid>


                </Grid>
                <Typography className="card-align">
                  <b>$2.37</b> <br />
                  Trending Now
                </Typography>

              </CardContent>
            </Card>

          </Grid>

        </Grid>

        <Grid xs={12} className="div-row" container >

          <Grid sx={6} className="div-card2" sx={{ p:2,backgroundColor: "white", Width: "400px", borderRadius: 3 }}>
            <h3><b>Customized products</b></h3>
            <b>Partner with one of 60,000 experienced manufacturers with design & production capabilities and on-time delivery.</b>
            <br />
            <br />
            <Grid sx={6} >

              <Grid sx={12} className="div-card3" container >
                <Grid sx={6}>
                  <h5  >
                    Premium OEM Factories

                  </h5>
                </Grid>

                <Grid sx={12}  container >


                  <Grid sx={6} className="inner-card" container>

                    <Grid  className="inner-div-pic">
                      <img src={light3}  className="card-image" width="80px" height="80px" alt="" />
                    </Grid>

                    <Grid  className="inner-div-pic">

                      <img src={mobile1}  className="card-image" width="80px" height="80px" alt="" />
                    </Grid>

                    <Grid  className="inner-div-pic">

                      <img src={watch1} className="card-image" width="80px" height="80px" alt="" />
                    </Grid>

                    <Grid  className="inner-div-pic">
                      <img src={bag1} className="card-image" width="80px" height="80px" alt="" />
                    </Grid>

                    <Grid  className="inner-div-pic">

                      <img src={laptop1}  className="card-image" width="80px" height="80px" alt="" />
                    </Grid>

               
                  </Grid>


                </Grid>
              </Grid>


            </Grid>


          </Grid>


          <Grid sx={6} className="div-card2" sx={{p:2, backgroundColor: "white", Width: "400px", borderRadius: 3 }}>
            <h3><b>Ready to Ship Products</b></h3>
            <b>Partner with one of 60,000 experienced manufacturers with design & production capabilities and on-time delivery.</b>
            <br />
            <br />
            <Grid sx={6} >

              <Grid sx={12} className="div-card3" container >
                <Grid sx={6}>
                  <h5 className="heading2">
                    Top Ranking Suppliers

                  </h5>
                </Grid>

                <Grid sx={12} className="inner-card" container >


                
                  <Grid  className="inner-div-pic">

                    <img src={earPhone2} width="80px"  className="card-image" height="80px" alt="" />
                  </Grid>

                  <Grid  className="inner-div-pic">

                    <img src={bag2} width="80px"  className="card-image" height="80px" alt="" />
                  </Grid >

                  <Grid  className="inner-div-pic">
                    <img src={laptop2} width="80px"  className="card-image" height="80px" alt="" />
                  </Grid>

                  <Grid  className="inner-div-pic">

                    <img src={watch2} width="80px"  className="card-image" height="80px" alt="" />
                  </Grid>

                  <Grid  className="inner-div-pic">

                    <img src={laptop2} width="80px"  className="card-image" height="80px" alt="" />
                  </Grid>


                </Grid>
              </Grid>



            </Grid>


          </Grid>


        </Grid>



        <Grid>
          <h2>JUST FOR YOU </h2>
        </Grid>

        <Grid sx={12} className="just-for-you" container>
     
          <Grid sx={2} className="card-justforyou">
            
          <img src={mobile1} className="card-image" width="200px" height="200px" />
          <CardContent sx={{backgroundColor:"white"}}>
 
 <Typography variant="body2">
   Purchase Your Product.
   <br />
   {'"Your own wish"'}
 </Typography>
<Typography>
  <b>$05.00-$07.00</b>
  </Typography>
 
 <Typography sx={{ mb: 1.5 }} color="text.secondary">
   50.0 Pieces(Min.Order)
 </Typography>
</CardContent>
   </Grid>



          <Grid sx={2}  className="card-justforyou">
            
            <img src={earPhone1} className="card-image" width="200px" height="200px" />
            <CardContent sx={{backgroundColor:"white"}}>
 
 <Typography variant="body2">
   Purchase Your Product.
   <br />
   {'"Your own wish"'}
 </Typography>
<Typography>
  <b>$05.00-$07.00</b>
  </Typography>
 
 <Typography sx={{ mb: 1.5 }} color="text.secondary">
   50.0 Pieces(Min.Order)
 </Typography>
</CardContent>
       </Grid>
  




            <Grid sx={2}  className="card-justforyou">
            
            <img src={laptop2} className="card-image" width="200px" height="200px" />
            <CardContent sx={{backgroundColor:"white"}}>
 
 <Typography variant="body2">
   Purchase Your Product.
   <br />
   {'"Your own wish"'}
 </Typography>
<Typography>
  <b>$05.00-$07.00</b>
  </Typography>
 
 <Typography sx={{ mb: 1.5 }} color="text.secondary">
   50.0 Pieces(Min.Order)
 </Typography>
</CardContent>
           </Grid>
  




            <Grid sx={2}  className="card-justforyou">
            
            <img src={bag1} className="card-image" width="200px" height="200px" />
            <CardContent sx={{backgroundColor:"white"}}>
 
 <Typography variant="body2">
   Purchase Your Product.
   <br />
   {'"Your own wish"'}
 </Typography>
<Typography>
  <b>$05.00-$07.00</b>
  </Typography>
 
 <Typography sx={{ mb: 1.5 }} color="text.secondary">
   50.0 Pieces(Min.Order)
 </Typography>
</CardContent>
           </Grid>
  




            <Grid sx={2}  className="card-justforyou">
            
            <img src={watch1} className="card-image" width="200px" height="200px" />
            <CardContent sx={{backgroundColor:"white"}}>
 
 <Typography variant="body2">
   Purchase Your Product.
   <br />
   {'"Your own wish"'}
 </Typography>
<Typography>
  <b>$05.00-$07.00</b>
  </Typography>
 
 <Typography sx={{ mb: 1.5 }} color="text.secondary">
   50.0 Pieces(Min.Order)
 </Typography>
</CardContent>
          </Grid>
  
  

        </Grid>

        <Grid sx={12} className="just-for-you" container>
     
     <Grid sx={2} className="card-justforyou ">
       
     <img src={bag2} className="card-image" width="200px" height="200px" />
     <CardContent sx={{backgroundColor:"white"}}>
 
 <Typography variant="body2">
   Purchase Your Product.
   <br />
   {'"Your own wish"'}
 </Typography>
<Typography>
  <b>$05.00-$07.00</b>
  </Typography>
 
 <Typography sx={{ mb: 1.5 }} color="text.secondary">
   50.0 Pieces(Min.Order)
 </Typography>
</CardContent>
     </Grid>



     <Grid sx={2}  className="card-justforyou">
       
       <img src={earPhone2} className="card-image" width="200px" height="200px" />
       <CardContent sx={{backgroundColor:"white"}}>
 
 <Typography variant="body2">
   Purchase Your Product.
   <br />
   {'"Your own wish"'}
 </Typography>
<Typography>
  <b>$05.00-$07.00</b>
  </Typography>
 
 <Typography sx={{ mb: 1.5 }} color="text.secondary">
   50.0 Pieces(Min.Order)
 </Typography>
</CardContent>
  </Grid>





       <Grid sx={2}  className="card-justforyou">
       
       <img src={watch2} className="card-image" width="200px" height="200px" />
       <CardContent sx={{backgroundColor:"white"}}>
 
 <Typography variant="body2">
   Purchase Your Product.
   <br />
   {'"Your own wish"'}
 </Typography>
<Typography>
  <b>$05.00-$07.00</b>
  </Typography>
 
 <Typography sx={{ mb: 1.5 }} color="text.secondary">
   50.0 Pieces(Min.Order)
 </Typography>
</CardContent>
  </Grid>





       <Grid sx={2}  className="card-justforyou">
       
       <img src={CardPic2} className="card-image" width="200px" height="200px" />
       <CardContent sx={{backgroundColor:"white"}}>
 
 <Typography variant="body2">
   Purchase Your Product.
   <br />
   {'"Your own wish"'}
 </Typography>
<Typography>
  <b>$05.00-$07.00</b>
  </Typography>
 
 <Typography sx={{ mb: 1.5 }} color="text.secondary">
   50.0 Pieces(Min.Order)
 </Typography>
</CardContent>
    </Grid>





       <Grid sx={2}  className="card-justforyou">
       
       <img src={mobile2} className="card-image" width="200px" height="200px" />
       <CardContent sx={{backgroundColor:"white"}}>
 
 <Typography variant="body2">
   Purchase Your Product.
   <br />
   {'"Your own wish"'}
 </Typography>
<Typography>
  <b>$05.00-$07.00</b>
  </Typography>
 
 <Typography sx={{ mb: 1.5 }} color="text.secondary">
   50.0 Pieces(Min.Order)
 </Typography>
</CardContent>
     </Grid>



        </Grid>

        <Grid>
          <h2>REQUEST FOR QUOTATION </h2>
        </Grid>


      <Grid sx={12} container >

        <Grid className="background-img" sx={6}>
          <Grid className="background-img-div">
            <h3>Global Source Marketplace</h3>
            <br />
           <br />
           <h3> <span>18890000+</span>   <span> 21h</span></h3>
           <br />
           <br />
           
           <h3> <span>1770000+</span>   <span>5907</span></h3>
            
          </Grid>
        </Grid>


        <Grid sx={6}>
          <Grid className="background-beside">
                <h2 className="background-heading">One Request,Multiple Quotes </h2>
                 <br />
               <TextField sx={{width:425,pl:1}} label="fullWidth" id="fullWidth" />
             <Grid container>
             <MultipleSelect/>
             </Grid>
             <Button class="slider-btn3"  size="small">View more</Button>

          </Grid>
           
        </Grid>

      </Grid>

      </Container>

<Grid sx={12} className="main-footer">
  <Container>
    <Grid className="footer-input">
      <h6>Trade Alert - Delivering the latest product trends and industry news straight to your inbox.</h6>
      <TextField className="footer-input-text" sx={{width:425,pl:1,mt:"15px",color:"white"}} label="Your Email....." id="fullWidth" />
      <Button  sx={{mt:"10px",backgroundColor:"transparent",color:"white",border:"1px solid white" }}  className="btn-footer">Subcribe</Button>
     
    </Grid>

    <Grid className="row-columns" container>
       <Grid  className="footer-list">
         <ul>
         <h6>Customer Service</h6>
    
           <li>Help Center</li>
           <li>Contact Us</li>
           <li>Report Abuse</li>
           <li>Submite a Dispute</li>
           <li>Policies and Rules</li>
         </ul>
       </Grid>
       <Grid  className="footer-list">

       <ul>
       <h6>About Us</h6>
    
         <li>About Alibaba.com</li>
         <li>About Alibaba Group</li>
         <li>Sitemap</li>
       </ul>
       </Grid>
       <Grid className="footer-list">

       <ul>
       <h6>Source On Alibaba.com</h6>
    
         <li>Resources</li>
         <li>All Categories</li>
         <li>Request For Quotation</li>
         <li>Ready to Ship</li>
         <li>Buyer Partner</li>
       </ul>
       </Grid>
       <Grid className="footer-list">

       <ul>
       <h6>Sell on Alibaba.com</h6>
    
         <li>Supplier Membership</li>
         <li>Learning Center</li>
         <li>Partner Program</li>
       </ul>
       </Grid>
       <Grid className="footer-list">

       <ul>
       <h6>Trade Services</h6>
    
         <li>Trade Insurance</li>
         <li>Bussiness Identity</li>
         <li>Logistics Services</li>
         <li>Production monitoring & inspection <br /> Services</li>
         <li>Lettter of Credit</li>
         
       </ul>
       
       </Grid>
    </Grid>
    </Container>
</Grid>



    </div >


  );
}

export default App;
