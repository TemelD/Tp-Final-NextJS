import { NextPage } from 'next';
import Image from 'next/image'
import { fetchCustomers, fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/patients/table';
import { Query } from '@vercel/postgres';
import Search from '@/app/ui/search';
import { Suspense } from 'react';
import Form from '@/app/ui/patients/create-form';

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
