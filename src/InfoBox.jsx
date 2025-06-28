import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import"./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
export  default function InfoBox({info}){
  const HOT_URL = "https://images.unsplash.com/photo-1687095951902-31ec078b1a68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwd2VhdGhlciUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D";
  const COLD_URL = "https://media.istockphoto.com/id/930879822/photo/winter-morning-scene-rural-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=zie3zDKi021vcwYKajEcNzhKk1sT_W2RQU_0hHxFWw0=";
  const RAIN_URL = "https://images.unsplash.com/photo-1434118489318-42a0e62c6235?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFpbiUyMHdlYXRoZXIlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D";
  

   
    return(
    <div className="InfoBox">
        <div className="cardContainer">
        {/* <h1>WeatherInfo - {info.weather}</h1> */}
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}

        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
             info.humidity > 80
              ? <ThunderstormIcon/>
               : info.temp > 15
                ? <SunnyIcon/>
                   : <AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" color = "text.secondary" component={"span"}>
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}&deg;</p>
            <p>Min Temp = {info.tempMin}&deg;C</p>
            <p>Max Temp = {info.tempMax}&deg;C</p>
            <p>The Weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
    );

}