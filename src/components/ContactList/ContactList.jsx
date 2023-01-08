import { ContainerList } from './ContactList.styled';
import { selectContacts, selectError } from '../../redux/contacts/selectors';
import { selectFilter } from '../../redux/filter/selectors';
import { useSelector } from 'react-redux';
import { MessageError, MessageNoContacts } from '../Messages/Messages';
import toast from 'react-hot-toast';
import { ContactItem } from '../ContactItem/ContactItem';

export const ContactList = () => {
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
        return <ContactItem key={item.id} item={item} />;
      })}
      {error && <MessageError />}
    </ContainerList>
  );
};
