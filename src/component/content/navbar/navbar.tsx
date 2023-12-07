import HomeIcon from '@mui/icons-material/Home';
import "./navbar.scss"
const Navbar = () =>{
    return (
<div className='navbar'>
    <div className='navbar__left'>
  <div className='navbar__left__icon'>
  <HomeIcon/>
  </div>
    <p> Saved insights</p>
    <p>Import data</p>
    <a href="/google.com">Notifications</a>

    </div>

</div>   
 )
}
export default Navbar