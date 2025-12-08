import Container from "../../ui/Container"
import HeaderMenu from "./HeaderMenu"
import Logo from "./Logo"

const Header = () => {
  return (
    <header className="bg-white py-5 border-b border-b-black">
        <Container className="flex items-center justify-between">
            {/*Logo*/}
            <Logo/>
            {/*NavButton*/}
            <HeaderMenu/>
            <div>
              Others
            </div>

        </Container>
    </header>
  )
}

export default Header