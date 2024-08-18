import { ArrowDown2 } from 'iconsax-react';
import {
    Text,
    Flex,
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from '@chakra-ui/react';

import { useTable } from '../../../context/table';

export default function Info() {
    const { table } = useTable();

    const itemsCount = table.getRowCount().toLocaleString();
    const currentPagSize = table.getState().pagination.pageSize;

    const onChangePagSize = (pagSize: number) => () =>
        table.setPageSize(pagSize);

    return (
        <Flex fontSize="14px" justifyItems="center" alignItems="center">
            <Text>Items per page</Text>
            <Menu>
                <MenuButton
                    as={Button}
                    _hover={{}}
                    _active={{}}
                    variant="ghost"
                    fontSize="14px"
                    rightIcon={<ArrowDown2 size={14} />}
                >
                    {currentPagSize}
                </MenuButton>
                <MenuList>
                    {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                        <MenuItem
                            key={pageSize}
                            value={pageSize}
                            fontSize="14px"
                            onClick={onChangePagSize(pageSize)}
                        >
                            {pageSize}
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>

            <Text>of {itemsCount}</Text>
        </Flex>
    );
}
