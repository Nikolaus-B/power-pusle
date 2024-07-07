import { forwardRef } from 'react';

//----------------------------------------
import { Button, Input } from '@chakra-ui/react';
import { Icon } from 'components/Icon/Icon';

//-----------------------------------------

export const CustomInput = forwardRef(({ value, onClick }, ref) => {
  return (
    <Input
      as={Button}
      ref={ref}
      onClick={onClick}
      justifyContent="space-between"
      w="100%"
      h={['46px', '52px', '52px']}
      fontSize={[14, 16, 16]}
      lineHeight={['129%', '150%', '150%']}
      variant="outline"
      rightIcon={<Icon iconid="calendar" width="18" height="18" />}
    >
      {value}
    </Input>
  );
});
