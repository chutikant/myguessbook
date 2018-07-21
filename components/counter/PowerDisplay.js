import React from 'react'
import PropTypes from 'prop-types'

//functional components have on state!
function PowerDisplay({ power, base }) {
    return (
        <h1>
            n^{power}: {Math.pow(base, power)}
        </h1>
    )
}

PowerDisplay.propTypes = {
    base: PropTypes.number.isRequired,
    power: PropTypes.number.isRequired
}
export default PowerDisplay