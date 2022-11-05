import logo from '../../assets/logo.svg'
import i4GImg from '../../assets/I4G.svg'

const Footer = () => {
    return (
        <footer className='flex footer'>
          <img src={logo} alt="logo" />
          <p>HNG Internship 9 Frontend Task</p>
          <img src={i4GImg} alt="logo" />
        </footer>
    )
}

export default Footer