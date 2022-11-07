import { MainContainer } from "./Main.styled"

function Main(props) {
    return(
    <MainContainer>
        <div>
            <h1>{props.currSender}</h1>
        </div>
    </MainContainer>
    )
}

export default Main