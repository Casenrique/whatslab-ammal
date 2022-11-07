import phoneCall from "../../assets/phone-call.svg"
import videoCam from "../../assets/video-cam.svg"
import moreOptions from "../../assets/more-options.svg"
import { HeaderContainer, UserContainer, IconsContainer, IconImage, UserImage, HeaderButton } from "./Header.styled"


function Header(props) {
    const { senders, currSender, onChangeSender } = props
 
    return (
        <HeaderContainer>
            <UserContainer>
                <UserImage src="https://picsum.photos/200/200" alt="Profile" />
                <div>
                    <select value={currSender} onChange={onChangeSender} >
                        {senders.map((sender) => (
                            <option key={sender} value={sender}>
                                {sender}
                            </option>
                        ))}
                    </select>
                    <p>Online</p>
                </div>            
            </UserContainer>   

            <IconsContainer>
                <HeaderButton>
                    <IconImage src={moreOptions} alt="More options icon" />
                </HeaderButton>
                <HeaderButton>
                    <IconImage src={videoCam} alt="Video cam icon" />
                </HeaderButton>
                <HeaderButton>
                    <IconImage src={phoneCall} alt="Phone call icon" />
                </HeaderButton>
            </IconsContainer>
        </HeaderContainer>
    );
}

export default Header