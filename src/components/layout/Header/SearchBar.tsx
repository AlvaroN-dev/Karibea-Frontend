"use client";
import { Search } from "lucide-react";
import { useShop } from "@/context/ShopContext";

const SearchBar = () => {
  const { setSearchOpen } = useShop();

  return (
    <button
      onClick={() => setSearchOpen(true)}
      className="hover:text-darkColor transition-colors"
    >
      <Search className="w-5 h-5 md:w-6 md:h-6" />
    </button>
  );
}
export default SearchBar;