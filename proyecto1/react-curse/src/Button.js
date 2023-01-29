// props por defecto (prop-types y defaultprops)
import PropTypes from 'prop-types';

export function Button({text, name = ''}) {
    console.log(text);
    if(!text) {
        console.error('El texto es requerido');
    }
    // event handlers o manejador de eventos
    return <button onClick={function () {
        console.log('Hola desde boton')
    }}>
        {text} - {name}
    </button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}
Button.defaultProps = {
    name: "Some user"
}