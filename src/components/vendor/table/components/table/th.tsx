import { Box, BoxProps } from '@chakra-ui/react';

export default function Th(props: BoxProps) {
    return (
        <Box
            fontSize="16px"
            fontWeight="500"
            display="table-cell"
            lineHeight="22px"
            fontFamily="'Poppins', sans-serif"
            {...props}
        />
    );
}
