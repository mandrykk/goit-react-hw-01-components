import PropTypes from 'prop-types';
import style from './Statistics.module.css'

export default function StatisticsItem ({label, percentage}) {
    return (
        <>
            <span className = {style.label}>{label}</span>
            <span className = {style.percentage}>{percentage}%</span>
        </>
    );
}

StatisticsItem.propType = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}