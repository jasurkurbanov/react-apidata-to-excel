import React from 'react'
import './App.css';
import axios from 'axios'

import {ExportToExcel} from './ExportToExcel'
function App() {
  const [data, setData] = React.useState([])
  const fileName = "mysamplefile"; // here enter filename for your excel file

  React.useEffect(() => {
    const fetchData = () =>{
     axios.get('https://jsonplaceholder.typicode.com/posts').then(r => setData(r.data) )
    }
    fetchData()
  }, [])
 
  return (
    <div className="App">
      <ExportToExcel apiData={data} fileName={fileName} />
    </div>
  );
}


export default App;
