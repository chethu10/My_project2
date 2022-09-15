import { TitleScr } from "./TitleScr";


function Title(){
    const title= {
        title_name: "Connected Homes",
    }
    return(
        <TitleScr name={title.title_name}/>
    )
}
export default Title;