"use client";
import { User } from "lucide-react";
import { useShop } from "@/context/ShopContext";

const SignIn = () => {
  const { setLoginOpen } = useShop();

  return (
    <button
      onClick={() => setLoginOpen(true)}
      className="hover:text-darkColor transition-colors"
    >
      <User className="w-5 h-5 md:w-6 md:h-6" />
    </button>
  );
}
export default SignIn;