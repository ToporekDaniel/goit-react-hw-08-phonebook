import { createSelector } from '@reduxjs/toolkit';

export const getFilter = state => state.filters.value;

export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const getUser = state => state.user;
// export const getUserToken = state => state.user.token;
