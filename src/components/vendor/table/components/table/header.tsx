import { Box } from '@chakra-ui/react';
import { flexRender } from '@tanstack/react-table';

import Th from './th';
import Tr from './tr';
import { useTable } from '../../context/table';
import { commonPinStyles } from '../../utils/style';

export default function TableHeader() {
    const { table } = useTable();

    return (
        <Box
            verticalAlign="middle"
            display="table-header-group"
            borderBottom="1px solid #F4F4F4"
        >
            {table.getHeaderGroups().map((headerGroup) => (
                <Tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                        <Th
                            p="5"
                            key={header.id}
                            /* @ts-ignore */
                            colSpan={header.colSpan}
                            w={`${header.getSize()}px`}
                            __css={{
                                ...commonPinStyles(header.column),
                            }}
                        >
                            {flexRender(
                                header.column.columnDef.header,
                                header.getContext(),
                            )}
                        </Th>
                    ))}
                </Tr>
            ))}
        </Box>
    );
}
