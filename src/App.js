import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, Link } from 'react-router-dom'
import { Jumbotron, Button } from 'reactstrap';

//Pages
import Home from './pages/home/Home'
import NoHome from './pages/noHome/NoHome'

class App extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <h1 className="display-3">Hello, world!</h1>
                    <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-2" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p className="lead">
                        <Button color="primary">Learn More</Button>
                    </p>
                </Jumbotron>
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