import {sql} from '@vercel/postgres';
import {
    CustomersTableType,
    CustomerField,
    CustomerForm,
} from '../lib/definitions';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchCustomers() {

    try {
      const data = await sql<CustomerField>`
        SELECT
          id,
          name,
          email,
          image_url
        FROM customers
        ORDER BY name ASC
      `;
  
      const customers = data.rows;
      return customers;
    } catch (err) {
      console.error('Database Error:', err);
      throw new Error('Failed to fetch all customers.');
    }
  }

  export async function fetchCustomerById(id: string) {
    noStore();
    try {
      const data = await sql<CustomerForm>`
        SELECT
        customers.id,
        customers.name,
        customers.email,
        customers.image_url
      FROM customers
        WHERE customers.id = ${id};
      `;
  
      const customer = data.rows.map((customer) => ({
        ...customer,
      }));
  
      return customer[0];
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch customer.');
    }
  }

  export async function fetchFilteredCustomers(query: string) {
    try {
      const data = await sql<CustomersTableType>`
          SELECT
            customers.id,
            customers.name,
            customers.email,
            customers.image_url
          FROM customers
          WHERE
            customers.name ILIKE ${`%${query}%`} OR
          customers.email ILIKE ${`%${query}%`}
          GROUP BY customers.id, customers.name, customers.email, customers.image_url
          ORDER BY customers.name ASC
        `;
  
      const customers = data.rows.map((customer) => ({
        ...customer,
      }));
  
      return customers;
    } catch (err) {
      console.error('Database Error:', err);
      throw new Error('Failed to fetch customer table.');
    }
  }