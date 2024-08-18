import Tr from '../table/tr';
import Td from '../table/td';
import FilterInput from './components/input';
import { useTable } from '../../context/table';
import { commonPinStyles } from '../../utils/style';

const expectColumns = ['tb_expand', 'tb_actions'];

export default function Filters() {
    const { table } = useTable();

    const columns = table.getAllColumns();

    return (
        <Tr>
            {columns.map((column) => {
                if (expectColumns.includes(column.id)) return (
                    <Td
                        __css={{
                            ...commonPinStyles(column),
                        }}
                    />
                );

                return (
                    <Td p="2" __css={{
                        ...commonPinStyles(column)
                    }}>
                        <FilterInput column={column}  />
                    </Td>
                );
            })}
        </Tr>
    );
}
