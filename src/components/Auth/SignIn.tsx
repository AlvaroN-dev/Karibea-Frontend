import { Button } from "../shadcn/button"

type ButtonProps = {text? : string,className? : string}
const SignIn = ({text,className} : ButtonProps) => {
  return (
    <div className={className}>
        <Button className="hover:cursor-pointer">{text}</Button>
    </div>
  )
}

export default SignIn