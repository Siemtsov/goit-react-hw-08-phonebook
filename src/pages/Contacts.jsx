import { Box, Flex, Heading, Spinner } from '@chakra-ui/react';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import ContactsForm from 'components/ContactsForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLogIn } from 'ReduxToolkit/auth/selectors';
import { fetchContacts } from 'ReduxToolkit/contacts/operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'ReduxToolkit/contacts/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoad = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  const isLogIn = useSelector(selectIsLogIn);

  useEffect(() => {
    if (isLogIn) dispatch(fetchContacts());
  }, [dispatch, isLogIn]);

  return (
    <Box as="div" padding={6}>
      <Heading>Phonebook</Heading>
      <ContactsForm />

      {isLoad && !error ? (
        <Flex textAlign="center" justifyContent="center" w={500}>
          <Spinner
            thickness="4px"
            speed="0.8s"
            emptyColor="gray.200"
            color="teal.400"
            size="xl"
          />
        </Flex>
      ) : (
        contacts &&
        contacts.length !== 0 && (
          <>
            <Heading>Contacts</Heading>
            <Filter />
            <ContactsList />
          </>
        )
      )}
    </Box>
  );
};
export default Contacts;
