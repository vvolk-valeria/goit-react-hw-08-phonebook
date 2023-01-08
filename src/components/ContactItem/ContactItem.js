import { Item, Btn, Name } from './ContactItem.styled';
import { deleteContact } from '../../redux/contacts/operations';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

export const ContactItem = ({ item }) => {
    const dispatch = useDispatch();
    
    const removeContact = () => {
        dispatch(deleteContact(item.id));
        toast.success(`Contact is deleted from your phonebook`);
    };

    return (
        <Item >
            <Name>{item.name}</Name>
            <span>{item.number}</span>
            <Btn type="button" onClick={removeContact}>
                Delete
            </Btn>
        </Item>
    )
};
