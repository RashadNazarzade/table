import { TTableProps } from './types/table';
import TableProvider, { useTable } from './context/table';

import CoreTable from './components/table';

function Table(props: TTableProps) {
    const tableContext = useTable();

    if (!tableContext) throw new Error('Table context is not defined');

    return <CoreTable {...props} />;
}

export const TableWithoutContext = Table;
export default function TableContainer(props: TTableProps) {
    return (
        <TableProvider {...props}>
            <Table {...props}/>
        </TableProvider>
    );
}
