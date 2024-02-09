import { NextPage } from 'next';
import Image from 'next/image'
import { fetchCustomers, fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/patients/table';
import { Query } from '@vercel/postgres';
import Search from '@/app/ui/search';
import { Suspense } from 'react';
import Form from '@/app/ui/patients/create-form';

// Tableau de patients (vous pouvez le remplir avec vos propres données)
const patients = [
  { id: 1, name: "John Doe", age: 35, condition: "Hypertension" },
  { id: 2, name: "Jane Smith", age: 45, condition: "Diabetes" },
  { id: 3, name: "Alice Johnson", age: 55, condition: "Arthritis" },
  { id: 4, name: "Alice Johnson", age: 55, condition: "Arthritis" },
  { id: 5, name: "Alice Johnson", age: 55, condition: "Arthritis" },
  { id: 6, name: "Alice Johnson", age: 55, condition: "Arthritis" },
  { id: 7, name: "Alice Johnson", age: 55, condition: "Arthritis" },
  { id: 8, name: "Alice Johnson", age: 55, condition: "Arthritis" },
  { id: 9, name: "Alice Johnson", age: 55, condition: "Arthritis" },
  { id: 10, name: "Alice Johnson", age: 55, condition: "Arthritis" },
  { id: 11, name: "Alice Johnson", age: 55, condition: "Arthritis" },
  { id: 12, name: "Alice Johnson", age: 55, condition: "Arthritis" },


];

const patientsPerPage = 5; 

export default async function Page({
    searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    const customers = await fetchCustomers();
    const searchs = await fetchFilteredCustomers(query);

    return (
      <CustomersTable customers={searchs} />
    );
};
