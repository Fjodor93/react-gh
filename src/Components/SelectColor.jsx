import '../Style/SelectColor.css';
import './Header';
import './Footer';

const ChangeColor = (event) =>{
    var color = getComputedStyle(document.getElementById(event.target.id)).getPropertyValue("background-color");
    document.getElementById("headercolor").style.backgroundColor = color
    document.getElementById("footercolor").style.backgroundColor = color}


function SelectColor(){
    return(
        <div className='colorcontainer'>
            <div className='innercolorcontainer' id='colorwhite' onClick={ChangeColor}></div>
            <div className='innercolorcontainer' id='coloroffwhite' onClick={ChangeColor}></div>
            <div className='innercolorcontainer' id='coloraquamarine' onClick={ChangeColor}></div>
            <div className='innercolorcontainer' id='coloremerald' onClick={ChangeColor}></div>
            <div className='innercolorcontainer' id='colorcreme' onClick={ChangeColor}></div>
        </div>
    )
}

export default SelectColor;
