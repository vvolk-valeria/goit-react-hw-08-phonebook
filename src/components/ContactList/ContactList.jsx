import { ContainerList, Item, Btn } from './ContactList.styled';
import { selectContacts, selectError } from '../../redux/contacts/selectors';
import { selectFilter } from '../../redux/filter/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { MessageError, MessageNoContacts } from '../Messages/Messages';
import toast from 'react-hot-toast';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const error = useSelector(selectError);

  const findContact = (array, query) => {
    const queryValue = query.toLowerCase();
    return array.filter(arr => arr.name.toLowerCase().includes(queryValue));
  };

  const items = findContact(contacts, filter);

  if (items.length === 0 && filter) {
    toast.error(`${filter} not found!`);
  }

  return (
    <ContainerList>
      {items.length === 0 && !error && <MessageNoContacts />}
      {items.map(item => {
        return (
          <Item key={item.id}>
            <p>{item.name}</p>
            <span>{item.phone}</span>
            <Btn type="button" onClick={() => dispatch(deleteContact(item.id))}>
              Delete
            </Btn>
            {console.log('item.id', item.id)}
          </Item>
        );
      })}
      {error && <MessageError />}
    </ContainerList>
  );
};
