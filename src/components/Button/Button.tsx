import React from 'react'
import tw from 'twin.macro'

import { ButtonProps } from './types'
import '@styles/index.css'

const Button: React.FC<ButtonProps> = ({
  label = '',
  size = 'medium',
  fullWidth = false,
  style = 'lightblue',
  borderColor,
  bgColor,
  textColor,
  onClick
}) => {
  return (
    <button
      className='group'
      style={
        style === 'custom'
          ? {
              borderColor: borderColor,
              background: bgColor,
              color: textColor
            }
          : {}
      }
      css={[
        tw`box-border border-0 border-solid border-white`,
        tw`focus:outline-none transition-all ease-in-out duration-100`,
        fullWidth && tw`w-full`,
        style === 'lightblue' &&
          tw`background[#0ac1fa] border-color[#0ac1fa] hover:border-color[#89fafb] border-width[6px]`,
        style === 'orange' &&
          tw`background[#fb8d39] border-color[#fb8d39] border-width[6px]`,
        style === 'yellow' && tw`background[#fce936]`,
        style === 'white' && tw`bg-transparent hover:background[#fcfcf9]`,
        style === 'black' &&
          tw`background[#ffffff80] border-color[#ffffff80] border-width[6px]`,
        style === 'blue' &&
          tw`background[#104da8] border-color[#104da8] border-width[6px]`,
        style === 'custom' && tw`border-width[6px]`
      ]}
      onClick={onClick}
    >
      <div
        css={[
          tw`box-border border-0 border-solid border-white`,
          tw`px-3 pt-2 pb-1`,
          style === 'lightblue' &&
            tw`background[#0086e7] group-hover:background[#0ab2fa] transform[perspective(280px) rotateX(6deg) rotateZ(-0.25deg)]`,
          style === 'orange' &&
            tw`background[#8b3a1d] transform[perspective(280px) rotateX(6deg) rotateZ(-0.25deg)]`,
          style === 'yellow' && tw`background[#fce936]`,
          style === 'black' &&
            tw`background[#00000080] transform[perspective(280px) rotateX(6deg) rotateZ(-0.25deg)]`,
          style === 'blue' &&
            tw`background[#143476] transform[perspective(280px) rotateX(6deg) rotateZ(-0.25deg)]`,
          style === 'custom' &&
            tw`transform[perspective(280px) rotateX(6deg) rotateZ(-0.25deg)]`
        ]}
      >
        <span
          css={[
            tw`box-border border-0 border-solid border-white`,
            tw`block text-2xl truncate uppercase font-burbankFont tracking-wide`,
            size === 'small' && tw`text-xl`,
            size === 'medium' && tw`text-2xl`,
            size === 'large' && tw`text-3xl`,
            style === 'lightblue' &&
              tw`color[#3ae3fa] group-hover:color[#f0fefe] transform[perspective(280px) rotateX(-6deg) rotateZ(0.25deg)]`,
            style === 'yellow' && tw`color[#14172c]`,
            style === 'orange' &&
              tw`color[#f39037] transform[perspective(280px) rotateX(-6deg) rotateZ(0.25deg)]`,
            style === 'white' && tw`color[#fcf4ff] group-hover:color[#0e2960]`,
            style === 'black' &&
              tw`color[#ffffff80] transform[perspective(280px) rotateX(-6deg) rotateZ(0.25deg)]`,
            style === 'blue' &&
              tw`color[#13ccfa] transform[perspective(280px) rotateX(-6deg) rotateZ(0.25deg)]`,
            style === 'lightblue' &&
              tw`transform[perspective(280px) rotateX(-6deg) rotateZ(0.25deg)]`
          ]}
        >
          {label === '' ? '...' : label}
        </span>
      </div>
    </button>
  )
}

export default Button
