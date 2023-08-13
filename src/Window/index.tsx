import {
    BrowserRouter as Router,
    Route,
    Routes,
} from 'react-router-dom';
import Home from '../Home';
import Settings from '../Settings';

export default function Window() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/settings' element={<Settings />} />
            </Routes>
        </Router>
    )
}