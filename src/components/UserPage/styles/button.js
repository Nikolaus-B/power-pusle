import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const sizes = defineStyle({
  base: {
    minWidth: '32px',
    px: '40px',
    py: '12px',

    fontSize: '15px',
    lineHeight: '112%',
  },
  md: {
    minWidth: '32px',
    px: '50px',
    py: '16px',

    fontSize: '20px',
    lineHeight: '112%',
  },
  xl: {
    minWidth: '32px',
    px: '50px',
    py: '16px',

    fontSize: '20px',
    lineHeight: '112%',
  },
});

const variantSolid = defineStyle({
  border: '1px solid',
  borderRadius: '12px',
  borderColor: '#e6533c',

  color: 'rgba(239, 237, 232, 0.6)',
  fontWeight: 'medium',
  bgColor: '#e6533c',
  transitionProperty: 'common',
  transitionDuration: 'normal',

  _hover: {
    borderColor: '#ef8964',

    color: '#efede8',
    bgColor: '#ef8964',
  },
});

const variantOutline = defineStyle({
  w: '100%',
  p: '14px',

  color: '#efede8',
  bgColor: 'transparent',
  borderRadius: '12px',
  border: '1px solid',
  borderColor: 'rgba(239, 237, 232, 0.3)',
  fontSize: '16px',

  fontWeight: 'normal',
  lineHeight: '150%',
  textAlign: 'center',
  textTransform: 'uppercase',

  _hover: {
    color: '#efede8',
    bgColor: 'transparent',
    borderColor: '#e6533c',
  },
  _focus: {
    color: '#efede8',
    bgColor: 'transparent',
    borderColor: '#e6533c',
  },
});

const variantUnstyled = defineStyle({
  color: 'inherit',
  display: 'inline',
  lineHeight: 'inherit',
  fontWeight: 'normal',
  w: '32px',
  h: 'auto',
  m: '0',
});

const variants = {
  solid: variantSolid,
  unstyled: variantUnstyled,
  outline: variantOutline,
};

export const buttonStyles = defineStyleConfig({
  sizes,
  variants,
});
