import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import { Container, Title } from './Pages.styled';
import { selectIsLoading, selectError } from '../redux/contacts/selectors';
import { fetchContacts } from '../redux/contacts/operations';
import { Loader } from '../components/Loader/Loader';
import toast from 'react-hot-toast';

const PhonebookPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />

      <Title>Contacts</Title>
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactList />
      {error &&
        toast.error(
          `Oops, something went wrong! Reload the page or try again later!`
        )}
      </Container>
    </>
  );
};

export default PhonebookPage;