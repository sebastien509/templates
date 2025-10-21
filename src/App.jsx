import Bento from "./templates/Bento"
import Minimalism from "./templates/Minimalistic"
import Glassmorphism from "./templates/Glassmorphism"

import TemplateTester from "./templates/TemplateTester"

export default function App() {
  return (
    <>

{/* Comment Out or remove the template you want to hide from VIEW */}
    {/* <Bento/>
    <Minimalism/>
    <Glassmorphism/> */}
    <TemplateTester/>
    </>
  )
}
