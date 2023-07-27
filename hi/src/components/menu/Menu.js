import "../../styled/Menu.scss"

const Menu = ({menuOpen,setMenuOpen}) => {
  return (
    // "menu " 공백 있어야함!
    <div className={"menu " + (menuOpen && "active")}>
    <ul>
        <li onClick={()=> setMenuOpen(false)}>
            <a href='#intro'>Home</a>
        </li>
        <li onClick={()=> setMenuOpen(false)}>
            <a href='#port'>Portfolio</a>
        </li>
        <li onClick={()=> setMenuOpen(false)}>
            <a href='#works'>Works</a>
        </li>
        <li onClick={()=> setMenuOpen(false)}>
            <a href='#test'>Test</a>
        </li>
        <li onClick={()=> setMenuOpen(false)}>
            <a href='#contact'>contact</a>
        </li>
     
    </ul>
</div>
  )
}

export default Menu