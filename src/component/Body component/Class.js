import { Component } from "react";
import { Nav } from "../Navbar component/Nav"

class Class extends Component {
    // const props = props
    // constructor(props) {
    //     super(props);
    // }
     state = { myNumber:30 }
    increase=()=>{
        let myHeader = "i Love You"
        console.log(this.state.myNumber);
        this.setState({myNumber:this.state.myNumber*2})
        alert(myHeader)
    }
    componentDidMount(){
        console.log("i have mounted");
    }
    componentDidUpdate(){
        console.log("i have updated");
    }
    componentWillUnmount(){
        console.log("i have Unmounted");
        alert("you are abut to leave me  my love")
    }
    componentDidCatch(){
        alert("There is error")
    }
    // myNumber = "In Class"
    render() {
        
        console.log(this.props.title);
        return (
            <>
            <Nav />
            <h1>Hello  World {this.state.myNumber}</h1>
            <button onClick={this.increase}>Increase</button>
            </>
        );
    }
}

export default Class;