import './../style/header.scss'

const Header = () => {
   return <header className='home-header'>
      <Logo />
      <Nav />
   </header>
}

export default Header

const Logo = () => {
   return (
      <img className='home-kasa-logo' src={require("./../assets/logo_kasa.jpg")} alt="kasa" />
   )
}

const Nav = () => {
   return (
   <nav className='home-nav'>
      <ul className='home-header-ul'>
         <li className='home-header-li'><a href="#" className='home-header-a'>Accueil</a></li>
         <li className='home-header-li'><a href="#" className='home-header-a'>A Propos</a></li>
      </ul>
   </nav>
   )
}