import React, { FC } from 'react'
import tw from 'twin.macro'

import clock from '@assets/icons/clock.png'
import { PunchCardProps } from './types'
import '@styles/index.css'

const PunchCard: FC<PunchCardProps> = ({
  title,
  subtitle,
  time,
  color,
  bgTop,
  bgBottom,
  quests,
  image = 'https://media.fortniteapi.io/images/82805d371b0c5d8e61b410efc8c81bbd/transparent.png',
  onClick
}) => {
  return (
    <div
      className='group'
      css={[
        tw`box-border border-0 border-solid border-white`,
        tw`relative w-full h-full background[#042f67e6] hover:background[#0e54b7e6] rounded-xl overflow-hidden transition-all duration-300 ease-in-out`
      ]}
      onClick={onClick}
    >
      <div
        style={{ background: `linear-gradient(${bgTop}, ${bgBottom})` }}
        css={[
          tw`box-border border-0 border-solid border-white`,
          tw`flex relative overflow-hidden padding-bottom[0.65rem]`
        ]}
      >
        <img
          css={[
            tw`block max-w-full h-auto align-middle box-border border-0 border-solid border-white`,
            tw`h-24`
          ]}
          src={image}
          alt={title}
        />
        <div
          css={[
            tw`box-border border-0 border-solid border-white`,
            tw`flex justify-between items-center w-full font-burbankFont uppercase text-white px-2`
          ]}
        >
          <div>
            <div
              css={[
                tw`box-border border-0 border-solid border-white`,
                tw`text-4xl leading-none`
              ]}
            >
              {title}
            </div>
            <div
              style={{ color }}
              css={[
                tw`box-border border-0 border-solid border-white`,
                tw`text-2xl leading-none`
              ]}
            >
              {subtitle}
            </div>
          </div>
          <div
            css={[
              tw`box-border border-0 border-solid border-white`,
              tw`flex self-end mb-1.5 absolute right-2`
            ]}
          >
            <img
              css={[
                tw`block max-w-full h-auto align-middle box-border border-0 border-solid border-white`,
                tw`height[1.2rem] filter[brightness(19)]`
              ]}
              src={clock}
              alt='Clock'
            />
            <span
              css={[
                tw`box-border border-0 border-solid border-white`,
                tw`whitespace-nowrap`
              ]}
            >
              {time}
            </span>
          </div>
        </div>
        <div
          style={{ background: color }}
          css={[
            tw`box-border border-0 border-solid border-white`,
            tw`absolute bottom-0 w-full h-4 transform[skewY(-0.8deg) translateY(3px)] group-hover:bg-white! transition-all duration-300 ease-in-out`
          ]}
        />
      </div>
      <div
        css={[
          tw`box-border border-0 border-solid border-white`,
          tw`flex flex-col gap-2 p-4 height[78%] overflow-y-auto`
        ]}
      >
        {quests && quests.map((i, index) => (
          <div
            key={index}
            css={[
              tw`box-border border-0 border-solid border-white`,
              tw`flex gap-4`
            ]}
          >
            <div
              css={[
                tw`box-border border-0 border-solid border-white`,
                tw`w-full`
              ]}
            >
              <div
                css={[
                  tw`box-border border-0 border-solid border-white`,
                  tw`font-burbankFont color[#c1eafd] truncate`
                ]}
              >
                {i.text}
              </div>
              <div
                css={[
                  tw`box-border border-0 border-solid border-white`,
                  tw`flex items-center gap-4`
                ]}
              >
                <div
                  css={[
                    tw`box-border border-0 border-solid border-white`,
                    tw`w-full h-1.5 rounded-xl background[#00000080]`
                  ]}
                />
                <div
                  css={[
                    tw`box-border border-0 border-solid border-white`,
                    tw`whitespace-nowrap color[#c1eafd] font-burbankFont`
                  ]}
                >
                  <span
                    css={[
                      tw`box-border border-0 border-solid border-white`,
                      tw`text-white`
                    ]}
                  >
                    0
                  </span>{' '}
                  / {i.max}
                </div>
              </div>
            </div>
            <div
              css={[
                tw`box-border border-0 border-solid border-white`,
                tw`background[#021131] rounded-full`
              ]}
            >
              <img
                css={[
                  tw`block max-w-full h-auto align-middle box-border border-0 border-solid border-white`,
                  tw`h-14 max-w-none`
                ]}
                src={i.image}
                alt={i.text}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PunchCard
