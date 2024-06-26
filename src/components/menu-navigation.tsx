import { HardHat, Home, UserRound, UsersRound, Wrench } from 'lucide-react'

import { NavLink } from './nav-link'

export function MenuNavigation() {
  return (
    <div className="bg-menu border-r">
      <nav className="flex flex-col ">
        <NavLink to="/">
          <HardHat className="h-6 w-6" />
          Request Epi
        </NavLink>
        <NavLink to="/">
          <Home className="h-4 w-4" />
          Início
        </NavLink>
        <NavLink to="/user">
          <UserRound className="h-4 w-4" />
          Usuários
        </NavLink>
        <NavLink to="/equipament">
          <Wrench className="h-4 w-4" />
          Equipamentos
        </NavLink>
        <NavLink to="/team">
          <UsersRound className="h-4 w-4" />
          Equipes
        </NavLink>
      </nav>
    </div>
  )
}
