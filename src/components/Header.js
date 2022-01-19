const Header = () => {
   return <>
      <Logo />
      <Nav />
   </>
}

export default Header

const Logo = () => {
   return (
      <img src="./../src/assets/logo_kasa.jpg" alt="kasa"></img>
   )
}

const Nav = () => {
   return (
   <nav>
      <ul>
         <li><a href="#">Accueil</a></li>
         <li><a href="#">A propos</a></li>
      </ul>
   </nav>
   )
}