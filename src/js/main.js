
import '../scss/app.scss';
import calc from './components/calc';


calc('hot 42');

function f (x, y = 7, z = 42) {
    return x + y + z
}
