'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
 
const FormSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  date: z.string(),
});
 
const CreateCustomer = FormSchema.omit({ id: true, date: true });
const UpdateInvoice = FormSchema.omit({ id: true, date: true });
 
export async function createCustomer(formData: FormData) {
  const { name, email } = CreateCustomer.parse({
    name: formData.get('name'),
    email: formData.get('email'),
  });
  const date = new Date().toISOString().split('T')[0];

  await sql`
    INSERT INTO customers (name, email, image_url)
    VALUES (${name}, ${email}, ${''})
  `;
  
  revalidatePath('/dashboard/patients');
}

export async function updateCustomer(id: string, formData: FormData) {
    const { name, email } = UpdateInvoice.parse({
      name: formData.get('name'),
      email: formData.get('email'),

    });
   
   
    await sql`
      UPDATE customers
      SET name = ${name}, email = ${email}, image_url = ${''}
      WHERE id = ${id}
    `;
   
    revalidatePath('/dashboard/patients');
    redirect('/dashboard/patients');
  }

  export async function deleteInvoice(id: string) {
    await sql`DELETE FROM customers WHERE id = ${id}`;
    revalidatePath('/dashboard/patients');
  }