import { Box, BoxProps } from '@chakra-ui/react';

export default function Td(props: BoxProps) {
    return (
        <Box
            display="table-cell"
            verticalAlign="middle"
            {...props}
        />
    );
}
