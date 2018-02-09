import './components/sass/main.scss'
import { Card } from './components/card/card.js'
import { NavBar } from './components/navBar/navBar.js'
/* eslint-disable */
new NavBar('.navbar')
//Usa Card para dinámicamente rellenar Grid dependiendo de la data
new Card('.card')
/* eslint-enable */
