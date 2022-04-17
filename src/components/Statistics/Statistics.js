import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ title, statsData }) => {
    return <section className={s.statistics}>
        {title && <h2 className={s.title}>{title}</h2>}
        <ul className={s.statList}>
                    {statsData.map(element => <li key={element.id} className={s.statListItem} style={{
                    backgroundColor: getRandomHexColor(),
                    }}>
                        <span className={s.label}>{element.label}</span>
                        <span className={s.percentage}>{element.percentage}%</span>
                </li>)}
            </ul>
        </section>
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.propTypes = {
    title: PropTypes.string,
    statsData: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Statistics;