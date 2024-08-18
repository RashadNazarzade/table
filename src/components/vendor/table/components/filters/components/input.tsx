import { Filter } from 'iconsax-react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

import { TColumn } from '../../../types/table';
import { useTable } from '../../../context/table';

type Props = {
    column: TColumn;
};

export default function FilterInput({ column }: Props) {
    const { table, options } = useTable();

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (options.onFilter) {
            return options.onFilter({
                table,
                column,
                event,
            });
        }

        column.setFilterValue(event.target.value);
    };

    return (
        <InputGroup>
            <InputLeftElement>
                <Filter size={18} variant="Bold" color="#DBE2EB" />
            </InputLeftElement>
            <Input placeholder="Axtar" onChange={handleFilterChange} />
        </InputGroup>
    );
}
