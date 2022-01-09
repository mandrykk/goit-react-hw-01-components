import PropTypes from 'prop-types';

export default function StatisticsItem ({label, percentage}) {
    return (
        <>
            <span class ="label">{label}</span>
            <span class ="percentage">{percentage}%</span>
        </>
    );
}

StatisticsItem.propType = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}