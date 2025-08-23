interface Contact {
  name: string;
  phone: string;
  isPrimary: boolean;
}

const bandungContacts: Contact[] = [
  { name: "Heri", phone: "0813 22 000 798", isPrimary: true },
  { name: "Heri", phone: "0813 22 000 798", isPrimary: false },
  { name: "Atto", phone: "0888 0202 2291", isPrimary: false },
  { name: "Bayu", phone: "0897 1079 090", isPrimary: false },
];

const lampungContacts: Contact[] = [
  { name: "Admin", phone: "0813 22 11 9899", isPrimary: false },
  { name: "Admin", phone: "0813 22 11 9899", isPrimary: false },
];

export { bandungContacts, lampungContacts };
