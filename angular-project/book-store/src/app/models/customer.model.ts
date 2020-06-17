
export class Customer {
   id: string;
   contactTitle: string;
   contactName: string;
   companyName: string;
   address: Address;
}

export class Address {
    street: string;
    city: string;
    country: string;
    phone: string;
    region: string;
    postalCode: string;

}
