import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, Link } from 'react-router-dom'

//Pages
import Home from './pages/home/Home'
import NoHome from './pages/noHome/NoHome'

class App extends React.Component {
    render(){
        return(
            <div>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/nohome'>No home</Link></li>
                    </ul>
                </nav>
                <main>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/nohome' component={NoHome} />
                    </Switch>
                </main>                
            </div>
        )
    }
}

export default App