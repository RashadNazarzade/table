import { Box } from '@chakra-ui/react';
import { flexRender } from '@tanstack/react-table';

import Tr from './tr';
import Td from './td';
import Filters from '../filters';
import { useTable } from '../../context/table';
import { commonPinStyles, expandedRow } from '../../utils/style';

export default function TableBody() {
    const { table } = useTable();

    return (
        <Box display="table-row-group" verticalAlign="middle">
            {table.options.enableFilters && <Filters />}
            {table.getRowModel().rows.map((row) => (
                <Tr
                    p="3"
                    key={row.id}
                    _last={{
                        pb: '3',
                        border: 'none',
                    }}
                    __css={{
                        ...expandedRow(row),
                    }}
                >
                    {row.getVisibleCells().map((cell) => (
                        <Td
                            p="3"
                            key={cell.id}
                            w={`${cell.column.getSize()}px`}
                            __css={{
                                ...commonPinStyles(cell.column),
                            }}
                        >
                            {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext(),
                            )}
                        </Td>
                    ))}
                </Tr>
            ))}
        </Box>
    );
}
