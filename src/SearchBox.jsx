// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import "./SearchBox.css";
// import { useState } from 'react';

// export default function SearchBox({ updateInfo }){
//     let [city, setCity] = useState("");
//     let [error, setError] = useState("false");

//     const API_URL = "https://api.openweathermap.org/data/2.5/weather";
//     const API_KEY = "4a5b440fe1b46d55b57279aa8e878fb7";

//     let getWeatherInfo = async() =>{
//      try{
//        let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
//        let jsonResponse = await response.json();
//        let result = {
//         city: city,
//         temp: jsonResponse.main.temp,
//         tempMin: jsonResponse.main.temp_min,
//         tempMax: jsonResponse.main.temp_max,
//         humidity: jsonResponse.main.humidity,
//         feelsLike: jsonResponse.main.feels_like,
//         Weather: jsonResponse.weather[0].description,
//        };
//        console.log(result);
//        return result;
//     }
//     catch(error){
//        throw error;
//     }
//     };
    
//     let handleChange = (event)=>{
//         setCity(event.target.value);
//     };

//     let handleSubmit =async (event)=>{
//         try{
//             event.preventDefault();
//             console.log(city);
//             setCity("");
//           let newinfo= await getWeatherInfo();
//            updateInfo(newinfo);
    
//         }catch(error){
//             setError("true");
//         }
       
//     };

//     return(
//     <div className="SearchBox">
//         {/* <h3>Search For The Weather</h3> */}
//         <form onSubmit={handleSubmit}>
//         <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
//         <br></br><br></br>
//         <Button variant="contained" type="submit">Search</Button>
//        {error && <p style ={{color:"red"}}>No such place exits! in our API</p>}
//         </form>

//     </div>
//     );

// }






































































// // by chatgpt

// // import TextField from '@mui/material/TextField';
// // import Button from '@mui/material/Button';
// // import "./SearchBox.css";
// // import { useState } from 'react';

// // export default function SearchBox(){
// //     let [city, setCity] = useState("");
// //     const API_URL = "https://api.openweathermap.org/data/2.5/weather";
// //     const API_KEY = "4a5b440fe1b46d55b57279aa8e878fb7"; // Your API key

// //     let getWeatherInfo = async () => {
// //        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`); // Correct API URL formatting
// //        let jsonResponse = await response.json();
// //        console.log(jsonResponse); // Log the weather data
// //     };
    
// //     let handleChange = (event) => {
// //         setCity(event.target.value);
// //     };

// //     let handleSubmit = (event) => {
// //         event.preventDefault();
// //         console.log(city); // Log the city name entered
// //         setCity(""); // Clear the input after submission
// //         getWeatherInfo();
// //     };

// //     return (
// //         <div className="SearchBox">
// //             <h3>Search For The Weather</h3>
// //             <form onSubmit={handleSubmit}>
// //                 <TextField 
// //                     id="city" 
// //                     label="City Name" 
// //                     variant="outlined" 
// //                     required 
// //                     value={city} 
// //                     onChange={handleChange}
// //                 />
// //                 <br /><br />
// //                 <Button variant="contained" type="submit">Search</Button>
// //             </form>
// //         </div>
// //     );
// // }

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "4a5b440fe1b46d55b57279aa8e878fb7";

    const getWeatherInfo = async () => {
        try {
            const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            const jsonResponse = await response.json();

            if (jsonResponse.cod !== 200) {
                throw new Error(jsonResponse.message);
            }

            return {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                Weather: jsonResponse.weather[0].description,
            };
        } catch (err) {
            throw err;
        }
    };

    const handleChange = (event) => {
        setCity(event.target.value);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setError(false);
        } catch (err) {
            setError(true);
        }
        setCity("");
    };

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
                <br /><br />
                <Button variant="contained" type="submit">Search</Button>
                {error && <p style={{ color: "red" }}>No such place exists in our API!</p>}
                
            </form>
        </div>
    );
}
