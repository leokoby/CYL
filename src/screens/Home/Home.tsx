import { HomeLogged } from "./HomeLogged"
import { HomeWithoutLogin } from "./HomeWithoutLogin"

export const Home = () => {
  const mockLogin = true // need be a global state
  
  return (
    <>
    {mockLogin ? <HomeLogged /> : <HomeWithoutLogin />}
    </>
  )
}
