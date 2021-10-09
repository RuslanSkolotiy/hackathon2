import React from "react"
import PropTypes from 'prop-types'

/**
 *
 * @param colorTopBadge - цвет блока в формате primary, secondary...
 * @param textTopBadge  - текст отображаемый в блоке
 * @param roundedPill   - скругление углов. Для более большого параметра передвть в параметре: pill
 * @returns {*}
 * @constructor
 */
const Badge = ({colorTopBadge, textTopBadge, roundedPill }) => {
    const pill = roundedPill === 'pill' ? 'rounded-pill' : ''
    const classBadge = `badge ${pill} bg-${colorTopBadge}`
    return (
      <span
          className={classBadge}
      >
            {textTopBadge}
      </span>
    )
}

Badge.defaultProps = {
    colorTopBadge: 'primary',
    textTopBadge: 'Text',
    roundedPill: '',
}

Badge.propTypes = {
    colorTopBadge: PropTypes.string,
    textTopBadge: PropTypes.string,
}

export default Badge

//badge-slider-module