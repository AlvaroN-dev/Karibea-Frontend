import Container from "../../ui/Container"
import HeaderMenu from "./HeaderMenu"
import SearchBar from "./SearchBar"
import Logo from "./Logo"
import CartIcon from "./CartIcon"
import FavoriteButton from "./FavoriteButton"
import SignIn from "../../Auth/SignIn"

const Header = () => {
  return (
    <header className="bg-white py-5 border-b border-b-black">
        <Container className="flex items-center justify-between">
            {/*Logo*/}
            <Logo/>
            {/*NavButton*/}
            <HeaderMenu/>
            <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
              <SearchBar/>
              <FavoriteButton/>
              <CartIcon/>
              <SignIn text="Login" className="text-sm font-semibold hover:text-darkColor  hoverEffect"/>
            </div>

        </Container>
    </header>
  )
}

export default Header