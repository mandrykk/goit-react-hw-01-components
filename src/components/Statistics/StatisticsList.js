import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem'

export default function StatisticsList({ title, items }) {
    return (
    <section class="statistics">
  <h2 class="title">{title}</h2>
            <ul class = "stat-list">{items.map((item) =>
                <li class = "item" key = {item.id}>
                    <StatisticsItem
                        label={item.label}
                        percent = {item.percentage}
                    ></StatisticsItem>
                </li>)}
  </ul>
        </section>
    )
}

StatisticsList.propTypes = {
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    }))
}