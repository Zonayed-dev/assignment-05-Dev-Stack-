import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export default function App() {

const [technologies, setTechnologies] = useState([]);
const [loading, setLoading] = useState(true);


useEffect(() => {
  fetch('./technologies.json')
    .then(res => res.json())
    .then((data) => {
      setTechnologies(data);
      setLoading(false);
    })
    .catch((error) => console.error("Failed to load data", error));
},
  []);

 return (
    <div>
    </div>
 );
}