import axios from 'axios';

function GetItems(){
    // const axios = require('axios');
    var results = axiosTest();
    // console.log(results);
    
return(


    <>
    <div>{results}</div>
    </>
)
}
function createCard(list){
    
    for(var data of list){
        // console.log(data);
        return(
            <div className="app">
            <h2>
            Name={data.Make_Name},ID={data.Model_ID},Model={data.Model_Name}
            </h2>
            </div>
        )
    }
}
function axiosTest() {
    axios.get("http://localhost:3001/cars")
        .then(function (response) {
            // console.log(response.data);
            // I need this data here ^^
            var result = createCard(response.data);
            console.log(result);
            return result;
        })
        .catch(function (error) {
            console.log(error);
        });
}
export {GetItems}