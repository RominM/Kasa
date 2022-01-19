import './../style/main.scss'
const data = require('./../data/data.json')

const Main = () => {
   return (
      <main className='home-main'>
         <ul className="home-main-ul">
            {data.map(DATA => (
               <li className='home-main-li' key={DATA.id} className='li-location'>{DATA.title}</li>
            ))}
         </ul>
      </main>
   ) 
}

export default Main