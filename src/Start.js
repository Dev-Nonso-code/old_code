import './Start.css'
import Button from './Button.js'
import { Nav } from './component/Navbar component/Nav'
const Start = ()=>{

    const myStyle = {
        backgroundColor: "tomato",
        textaAlign: "center"
    }
    return(
        
    <>
    <Nav />
    <Button />
        <h1 style={{fontsize: "50px"}}> Thiss is new page</h1>
        <h1 style={myStyle}> Thiss is new page</h1>
        <button className='mybtn'>click me</button>
        {/* <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table> */}
        </>
    )
}

export default Start