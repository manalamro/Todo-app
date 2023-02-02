import CATEGORIES_OPTIONS from '../../constants/data';
import deleteIcon from '../../assets/delete.svg';
import checkIcon from '../../assets/check.svg';

/** 
 * @param {{
 * item: {
 *   id: number,
 *   title: string,
 *   isDone: boolean,
 *   category: string,
 *   urgent: string
 * }
 * }} props
 */
const Item = (props) => {
  const { item } = props;

  return (
    <li
      className={`item ${item.urgent ? 'urgent' : ''}`}>
      <div
        className="data"
        style={{ textDecoration: item.isDone ? 'line-through' : 'none' }}
      >
        <h2>{item.title}</h2>
        <span>
          {
            CATEGORIES_OPTIONS.filter(cat => cat.value === item.category)[0]?.lable
          }
        </span>
      </div>
      <div className="actions">
        <button onClick={() => props.onDelete(item.id)}>
          <img className="delete" src={deleteIcon} alt="delete" width={25} />
        </button>
        <button onClick={() => props.onFinish(item.id)} disabled={item.isDone}>
          <img className="check" src={checkIcon} alt="check" width={25} />
        </button>
      </div>
    </li>
  );
};

export default Item;