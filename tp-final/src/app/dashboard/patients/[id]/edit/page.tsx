import Form from '@/app/ui/patients/edit-form';
import Breadcrumbs from '@/app/ui/patients/breadcrumbs';
import { fetchCustomerById, fetchCustomers } from '@/app/lib/data';
 
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [customer, customers] = await Promise.all([
        fetchCustomerById(id),
        fetchCustomers(),
      ]);
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Patients', href: '/dashboard/patients' },
          {
            label: 'Edit Patient',
            href: `/dashboard/patients/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form customer={customer} customers={customers} />
    </main>
  );
}