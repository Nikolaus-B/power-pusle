import { avatarAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(avatarAnatomy.keys);

const container = defineStyle({
  border: '1px solid #e6533c',

  bg: 'rgba(48, 48, 48, 0.3)',
  color: 'rgba(239, 237,232, 0.1)',
  objectFit: 'cover',
});

const base = defineStyle({
  w: '90px',
  h: '90px',
});

const sizes = {
  base: definePartsStyle({
    container: base,
  }),
};

export const avatarStyles = defineMultiStyleConfig({
  baseStyle: {
    container,
  },
  sizes,
});

// base: {
//   w: '90px',
//   h: '90px',
// },
// md: {
//   w: '150px',
//   h: '150px',
// },
// xl: {
//   w: '150px',
//   h: '150px',
// },
