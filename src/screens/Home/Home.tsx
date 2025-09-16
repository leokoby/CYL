import { HomeLogged } from "./HomeLogged"
import { HomeWithoutLogin } from "./HomeWithoutLogin"

export const Home = () => {
  const mockLogin = true 
  
  return (
    <>
    {mockLogin ? <HomeLogged /> : <HomeWithoutLogin />}
    </>
  )
}
