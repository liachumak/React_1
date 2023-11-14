const NavigationItem = (props) => {
    console.log(props)
    let text = props.text;
    let textToRender;

    if(props.isUpperCaseText){
        textToRender = text.toUpperCase()
    }
    else{
        textToRender = text
    }
    return(
        <div>{ textToRender }</div>
    )
}
export default NavigationItem;