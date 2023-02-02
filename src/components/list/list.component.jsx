import './list.css';
import Item from './item.component';

const List = (props) => {
  return (
    <div className='items-list'>
      <ul>
        {
          props.items.map(item => (
            <Item
              key={item.id} item={item}
              onDelete={props.onDelete}
              onFinish={props.onFinish}
            />
          ))
        }
      </ul>
    </div>
  )
};

export default List;