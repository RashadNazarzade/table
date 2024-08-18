import { Box } from '@chakra-ui/react';

import Table from './table';
import Pagination from '../pagination';
import Toolbar from '../default-toolbar';
import { TTableProps } from '../../types/table';

export default function TableContainer(props: TTableProps) {
    return (
        <Box w="full" maxW="960px">
            <Toolbar toolbar={props.toolbar} Toolbar={props.Toolbar} />
            <Box
                py="2"
                w="full"
                overflowX="auto"
                overflowY="hidden"
                position="relative"
            >
                <Table />
            </Box>
            {props.enablePagination && <Pagination />}
        </Box>
    );
}
