import './header.css'
import NavigationItem from "../NavigationItem";


const Header = () => {
    return ( 
    <div className ="common-header">
        <NavigationItem text='First element' isUpperCaseText={true}/>
       <NavigationItem text='Second element' isUpperCaseText={true}/>
       <NavigationItem text='Third element'isUpperCase={false}/>
       <NavigationItem text='Forth element' isUpperCase={false}/>
    </div>

    );
}
export default Header;