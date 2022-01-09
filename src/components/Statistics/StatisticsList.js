import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';
import style from './Statistics.module.css'

const colors = ["rgb(79 197 246)", "rgb(164 60 242)", "rgb(229 76 104)", "rgb(32 184 197)", "rgb(0 188 213)", "rgb(255 181 49)"];
function getRandomColor() {
      return colors [Math.floor(Math.random() * colors.length)]
}

export default function StatisticsList({ title, items }) {
    return (
    <section className = {style.statistics}>
  {title && <h2 className = {style.title}>{title}</h2>}
            <ul className = {style.statList}>{items.map((item) =>
                <li
                    className={style.statListItem}
                    key={item.id}
                    style = {{backgroundColor: getRandomColor()}}>
                    <StatisticsItem
                        label = {item.label}
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