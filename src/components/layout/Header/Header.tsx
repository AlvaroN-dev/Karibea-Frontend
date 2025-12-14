import Container from "../../ui/Container"
import HeaderMenu from "./HeaderMenu"
import SearchBar from "./SearchBar"
import Logo from "./Logo"
import CartIcon from "./CartIcon"
import FavoriteButton from "./FavoriteButton"
import SignIn from "../../Auth/SignIn"
import MobileMenu from "./MobileMenu"

const Header = () => {
  return (
    <header className="bg-white py-5 border">
        <Container className="flex items-center justify-between text-lightColor">
            {/*Logo*/}
            <div className="w-auto md:w-1/3 flex items-center gap-2.5 justify-start md:gap-0">
            <MobileMenu />
            <Logo/>
            </div>
            {/*NavButton*/}
            <HeaderMenu/>
            <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
              <SearchBar/>
              <FavoriteButton/>
              <SignIn />
              <CartIcon/>
            </div>

        </Container>
    </header>
  )
}

export default Header