import './components/sass/main.scss'
import { Grid } from './components/grid/grid.js'
import { NavBar } from './components/navBar/navBar.js'
import { GridModel } from './model/grid/gridModel.js'
/* eslint-disable */
new NavBar('.navbar')
new Grid('.card', [{'title':'Title', 'date':'25/12/2018', 'description':'Description Content'}])
new GridModel()
/* eslint-enable */
