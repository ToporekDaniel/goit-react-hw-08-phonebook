import PropTypes from 'prop-types';

export const NameInput = ({ onChange }) => {
  return (
    <label>
      Name
      <input
        onChange={onChange}
        type="text"
        name="name"
        pattern="^[a-z A-Z а-я А-Я]+(([' -][a-z A-Z а-я А-Я ])?[a-z A-Z а-я А-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </label>
  );
};

export const TelInput = ({ onChange }) => {
  return (
    <label>
      Number
      <input
        onChange={onChange}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
    </label>
  );
};

export const EmailInput = ({ onChange }) => {
  return (
    <label>
      Email
      <input
        onChange={onChange}
        type="email"
        name="email"
        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
        title="Email must be a valid email address. For example, example@example.com"
        required
      />
    </label>
  );
};

export const PasswordInput = ({ onChange }) => {
  return (
    <label>
      Password
      <input
        onChange={onChange}
        type="password"
        name="password"
        pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
        title="Password must contain at least one uppercase and lowercase letter, one digit, and be at least 8 characters long."
        required
      />
    </label>
  );
};

NameInput.propTypes = {
  onChange: PropTypes.func,
};

TelInput.propTypes = {
  onChange: PropTypes.func,
};

EmailInput.propTypes = {
  onChange: PropTypes.func,
};

PasswordInput.propTypes = {
  onChange: PropTypes.func,
};
