import React from 'react'
import tw from 'twin.macro'

import { EventCardProps } from './types'
import liveIcon from '@assets/icons/live.png'
import lockIcon from '@assets/icons/lock.png'
import tournamentIcon from '@assets/icons/tournament.png'
import '@styles/index.css'

const EventCard: React.FC<EventCardProps> = ({
  live = false,
  lock = false,
  region = 'none',
  title = 'Title',
  line1 = 'Text',
  line2 = 'Text 2',
  schedule = '',
  posterFront = 'https://cdn2.unrealengine.com/13br-competitive-in-game-dreamhackopen-poster-front-2-750x1080-319776257.jpg',
  posterBack = 'https://cdn2.unrealengine.com/13br-competitive-in-game-dreamhackopen-poster-back-750x1080-319770605.jpg',
  description = '',
  dates = [
    {
      start: '2021-03-11T01:30:00+00:00',
      end: '2021-03-11T04:30:00+00:00'
    },
    {
      start: '2021-03-18T00:30:00+00:00',
      end: '2021-03-18T03:30:00+00:00'
    }
  ],
  format = 'Tournament',
  datesColor = '#000',
  onClick
}) => {
  return (
    <div
      className='group'
      css={[
        tw`box-border border-0 border-solid border-white`,
        tw`relative w-full cursor-pointer`
      ]}
      onClick={onClick}
    >
      {live && (
        <img
          css={[
            tw`block max-w-full h-auto align-middle box-border border-0 border-solid border-white`,
            tw`absolute h-24 -right-6 -top-4 z-10 transition-all ease-in-out duration-500 group-hover:opacity-0`
          ]}
          src={liveIcon}
          alt='Live Event'
        />
      )}
      <div
        css={[
          tw`box-border border-0 border-solid border-white`,
          tw`opacity-100 overflow-hidden transition-all ease-in-out duration-500 group-hover:opacity-0`
        ]}
      >
        {lock && (
          <img
            css={[
              tw`block max-w-full h-auto align-middle box-border border-0 border-solid border-white`,
              tw`absolute w-36 m-auto top-0 left-0 bottom-0 right-0 z-10`
            ]}
            src={lockIcon}
            alt='lock'
          />
        )}
        {region !== 'none' && (
          <span
            css={[
              tw`box-border border-0 border-solid border-white`,
              tw`absolute mx-2.5 text-white text-3xl font-burbankFont bottom-0 left-0`
            ]}
            tw=''
          >
            {region}
          </span>
        )}
        <div
          css={[
            tw`box-border border-0 border-solid border-white`,
            tw`absolute w-10/12 m-auto bottom-10 left-0 right-0`
          ]}
        >
          <span
            css={[
              tw`box-border border-0 border-solid border-white`,
              tw`block mt-4 text-5xl font-burbankFont text-white text-center uppercase`
            ]}
          >
            {line1}
          </span>
          <span
            css={[
              tw`box-border border-0 border-solid border-white`,
              tw`block text-6xl font-burbankFont text-white text-center uppercase`
            ]}
          >
            {line2}
          </span>
          <span
            css={[
              tw`box-border border-0 border-solid border-white`,
              tw`block text-2xl font-burbankFont text-white text-center uppercase`
            ]}
          >
            {schedule}
          </span>
        </div>
        <img
          css={[
            tw`block max-w-full h-auto align-middle box-border border-0 border-solid border-white`,
            tw`w-full`
          ]}
          src={posterFront}
          alt={line1 + ' ' + line2}
        />
      </div>
      <div
        style={{ backgroundImage: `url(${posterBack})` }}
        css={[
          tw`box-border border-0 border-solid border-white`,
          tw`absolute w-full h-full bg-gradient-to-t from-blue-500 to-blue-400 bg-contain bottom-0 opacity-0 z-10 overflow-hidden transition-all ease-in-out duration-500 group-hover:opacity-100`
        ]}
      >
        <div
          css={[
            tw`box-border border-0 border-solid border-white`,
            tw`ml-16 mt-8 mb-4`
          ]}
        >
          <span
            css={[
              tw`box-border border-0 border-solid border-white`,
              tw`block text-2xl font-burbankFont text-white italic uppercase`
            ]}
          >
            {line1}
          </span>
          <span
            css={[
              tw`box-border border-0 border-solid border-white`,
              tw`block text-3xl font-burbankFont text-white italic uppercase`
            ]}
          >
            {line2}
          </span>
          <span
            css={[
              tw`box-border border-0 border-solid border-white`,
              tw`font-burbankFont text-white font-bold italic uppercase`
            ]}
          >
            {title}
          </span>
        </div>
        <p
          css={[
            tw`box-border border-0 border-solid border-white`,
            tw`mx-3.5 font-size[0.75rem] line-height[1rem] font-sans text-white`
          ]}
        >
          {description}
        </p>
        {dates && (
          <>
            <span
              css={[
                tw`box-border border-0 border-solid border-white`,
                tw`block mt-3 text-2xl font-burbankFont text-white text-center uppercase`
              ]}
            >
              Event Dates
            </span>
            <div
              css={[
                tw`box-border border-0 border-solid border-white`,
                tw`text-center`
              ]}
            >
              {dates && dates.map((i: any, index) => {
                return (
                  <span
                    key={index}
                    style={
                      new Date(i.end) < new Date()
                        ? {
                          color: datesColor,
                          textDecoration: 'line-through #fff'
                        }
                        : {}
                    }
                    css={[
                      tw`box-border border-0 border-solid border-white`,
                      tw`block text-2xl font-burbankFont text-white`
                    ]}
                  >
                    {new Date(i.start).toLocaleDateString()}{' '}
                    {new Date(i.start)
                      .toLocaleTimeString([], {
                        hour12: true
                      })
                      .replace(/:\d{2}\s/, ' ')}{' '}
                    -{' '}
                    {new Date(i.end)
                      .toLocaleTimeString([], {
                        hour12: true
                      })
                      .replace(/:\d{2}\s/, ' ')}
                  </span>
                )
              })}
            </div>
          </>
        )}
        <div
          css={[
            tw`box-border border-0 border-solid border-white`,
            tw`flex absolute flex-col m-2.5 gap[3px] bottom-0.5 left-0 right-0`
          ]}
        >
          <span
            css={[
              tw`box-border border-0 border-solid border-white`,
              tw`font-burbankFont text-white font-size[1.5rem] line-height[1] text-center uppercase`
            ]}
          >
            {format}
          </span>
          <div
            css={[
              tw`box-border border-0 border-solid border-white`,
              tw`flex justify-between m-0`
            ]}
          >
            <span
              css={[
                tw`box-border border-0 border-solid border-white`,
                tw`text-white`
              ]}
            >
              ------------
            </span>
            <span
              css={[
                tw`box-border border-0 border-solid border-white`,
                tw`font-size[1.5rem] font-burbankFont text-white line-height[1] text-center uppercase`
              ]}
            >
              {schedule}
            </span>
            <span
              css={[
                tw`box-border border-0 border-solid border-white`,
                tw`text-white`
              ]}
            >
              ------------
            </span>
          </div>
          <img
            css={[
              tw`block max-w-full h-auto align-middle box-border border-0 border-solid border-white`,
              tw`w-10 h-10 m-auto`
            ]}
            src={tournamentIcon}
            alt='tournamentIcon'
          />
        </div>
      </div>
    </div>
  )
}

export default EventCard
