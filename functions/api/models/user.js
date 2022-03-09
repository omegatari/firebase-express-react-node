class user {
  constructor(
    id,
    firstName,
    lastName,
    phoneNumber,
    email,
    password,
    salt,
    passwordHash
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.password = password;
    this.salt = salt;
    this.passwordHash = passwordHash;
  }
}

module.exports = user;
