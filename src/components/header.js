import React,{Component} from "react";

class Header extends Component{
 
    render(){
        let styles={
            header:{
                background:'#03a9f4'
            },
            logo:{
                color:'#fff',
                fontFamily:'Anton',
                textAlign:'center'
            }
        }
        return (
            <header style={styles.header}>
                <div style={styles.logo}>Logo</div>
                <input/>
            </header>
        )
    }
}
export default Header;