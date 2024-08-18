import { Table } from '@/components';
import { ColumnDef } from '@tanstack/react-table';
import { useMemo } from 'react';

import { data } from './data';
import { Center, MenuItem } from '@chakra-ui/react';

import { TCellContext } from '@/components/vendor/table/types/table';

const MenuList = ({ cell }: TCellContext) => (
    <>
        <MenuItem>{cell.row.original.first_name}</MenuItem>
        <MenuItem>Hello</MenuItem>
        <MenuItem>lkasjdlsa</MenuItem>
        <MenuItem>sadasd</MenuItem>
    </>
);

export default function Home() {
    const columns = useMemo(
        () =>
            [
                {
                    accessorKey: 'first_name',
                    header: 'Nammeme',
                },
                {
                    accessorKey: 'last_name',
                    header: 'Surename',
                    // cell: () => <h1>Helloo</h1>,
                },
                {
                    accessorKey: 'email',
                    header: 'Email',
                    // cell: () => <h1>Helloo</h1>,
                },
                {
                    accessorKey: 'gender',
                    header: 'Gender',
                    // cell: () => <h1>Helloo</h1>,
                },
                {
                    accessorKey: 'ip_address',
                    header: 'Ip Adresss',
                },
               
            ] as ColumnDef<any>[],
        [],
    );

    return (
        <Center w="full">
            <Table
                data={data}
                columns={columns}
                enablePagination

                enableActions
                actionMenuItems={MenuList}
                // actionColumn={{
                //     // header: "Nennen",
                //     cell: ({ row }) => <span>{row.original.last_name}</span> 
                // }}


                toolbar={{
                    title: "Ödənişlər"
                }}

                enableExpanding
                getSubRows={(row) => row.sub}

                
                enableFilters
                onFilter={(props) =>{
                    console.log(props)
                }}
            />
        </Center>
    );
}
