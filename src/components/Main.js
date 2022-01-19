import './../style/li-location.css'
const data = require('./../data/data.json')

const Main = () => {
   return (
      <main>
         <ul>
            {data.map(DATA => (
               <li key={DATA.id} className='li-location'>{DATA.title}</li>
            ))}
         </ul>
      </main>
   ) 
}

export default Main