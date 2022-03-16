import React from 'react'
import {
  StoreCard,
  LockerCard,
  BattlepassCard,
  AchievementCard,
  FishCard,
  EventCard,
  CharacterCard,
  PresetCard,
  GameCard
} from 'fortnite-components'

const App = () => {
  return (
    <div className='all'>
      <div style={{ width: '270px', height: '150px' }}>
        <GameCard />
      </div>
      <div style={{ width: '270px', height: '150px' }}>
        <GameCard epic />
      </div>
      <div style={{ width: '270px', height: '150px' }}>
        <GameCard />
      </div>
      <div style={{ width: '270px', height: '150px' }}>
        <GameCard teams='Squads' />
      </div>
      <div style={{ width: '271px', height: '470px' }}>
        <StoreCard
          name='Safari'
          type='outfit'
          rarity='custom'
          price={1200}
          customBackground={[
            { background: 'linear-gradient(rgb(1, 1, 1), rgb(88, 54, 10))' },
            { background: 'linear-gradient(rgb(9, 0, 8), rgb(255, 9, 77))' }
          ]}
          customSpotlight={[
            {
              backgroundImage:
                'radial-gradient(circle at 35.8758% 62.278%, rgb(35, 23, 6) 0%, transparent 100%)',
              filter: 'brightness(9.6973)'
            },
            {
              backgroundImage:
                'radial-gradient(circle at 52.128% 19.7794%, rgb(255, 0, 68) 0%, transparent 100%)',
              filter: 'brightness(10)'
            }
          ]}
          images={[
            'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_748_F_Hitman/MI_CID_748_F_Hitman.png',
            'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_899_F_Poison/MI_CID_899_F_Poison_02.png'
          ]}
        />
      </div>
      <div style={{ width: '250px', height: '285px' }}>
        <StoreCard
          name='Aspen'
          type='outfit'
          rarity='uncommon'
          price={800}
          images={[
            'https://media.fortniteapi.io/images/eecf2181d510e4144792399c371bdd2b/transparent.png'
          ]}
        />
      </div>
      <div style={{ width: '271px', height: '250px' }}>
        <StoreCard
          name='Chill Count'
          type='outfit'
          rarity='uncommon'
          price={800}
          images={[
            'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_673_F_ArcticCamo_Slate/MI_CID_673_F_ArcticCamo_Slate.png'
          ]}
        />
      </div>
      <div style={{ width: '16rem' }}>
        <AchievementCard
          name='POCKET CHANGE'
          description='Collected all the coins from a Purple XP Coin during Season 6.'
        />
      </div>
      <div style={{ width: '16rem' }}>
        <AchievementCard
          name='PRIMAL DISCOVERY'
          description='Landed at the new map in Season 6.'
          topColor='rgb(124 58 237)'
          imageColor='rgb(124 58 237)'
          image='https://media.fortniteapi.io/images/feats/s15_T_Ui_Explore_Celebratory.png'
        />
      </div>
      <div style={{ width: '16rem' }}>
        <AchievementCard />
      </div>
      <div style={{ width: '11rem', height: '15rem' }}>
        <BattlepassCard owned />
      </div>
      <div style={{ width: '11rem', height: '15rem' }}>
        <BattlepassCard free />
      </div>
      <div style={{ width: '8rem', height: '212px' }}>
        <BattlepassCard />
      </div>
      <div style={{ width: '200px', height: '250px' }}>
        <LockerCard tag conflict />
      </div>
      <div style={{ width: '200px', height: '250px' }}>
        <LockerCard random />
      </div>
      <div style={{ width: '150px', height: '200px' }}>
        <LockerCard none />
      </div>
      <div style={{ width: '200px', height: '250px' }}>
        <CharacterCard image='https://media.fortniteapi.io/images/84c5ef5629d294f1c0b6a50b8f2b26e9/transparent.png' />
      </div>
      <div style={{ width: '200px', height: '250px' }}>
        <CharacterCard alert featured />
      </div>
      <div style={{ width: '200px', height: '250px' }}>
        <CharacterCard none />
      </div>
      <div style={{ width: '200px', height: '250px' }}>
        <FishCard
          stars={3}
          number={125}
          alert
          featured
          image='https://media.fortniteapi.io/images/s16_T-T-Icon-BR-StinkFish-orange-L.png'
        />
      </div>
      <div style={{ width: '200px', height: '250px' }}>
        <FishCard
          unknown
          image='https://media.fortniteapi.io/images/s16_T_Ui_Fish_FlameyFish_Black_L.png'
        />
      </div>
      <div style={{ width: '200px', height: '250px' }}>
        <FishCard
          none
          image='https://media.fortniteapi.io/images/s16_T_Ui_Fish_ShieldFish_Green_L.png'
        />
      </div>
      <div style={{ width: '312px' }}>
        <EventCard
          title='DreamHack Online Open Featuring Fortnite'
          line1='DreamHack Online Open'
          line2='Finals'
          region='NAE'
          schedule='January 31st'
          posterFront='https://cdn2.unrealengine.com/13br-competitive-in-game-dreamhackopen-poster-front-2-750x1080-319776257.jpg'
          posterBack='https://cdn2.unrealengine.com/13br-competitive-in-game-dreamhackopen-poster-back-750x1080-319770605.jpg'
          description='This community focused tournament features a $250,000 prize pool up for grabs. Best of luck!'
          format='Duos Tournament'
        />
      </div>
      <div style={{ width: '312px' }}>
        <EventCard
          line1='Fncs'
          line2='Week 4'
          schedule='April 10th - 12th'
          posterFront='https://cdn2.unrealengine.com/Fortnite/fortnite-game/tournamentinformation/12BR_Competitive_In-Game_FNCS_Week4_Poster_Front-750x1080-c5ae877fbb33dfe3365ac45cf3d6837a25330689.jpg'
          posterBack='https://cdn2.unrealengine.com/Fortnite/fortnite-game/tournamentinformation/12BR_Competitive_In-Game_FNCS_Poster_Back_ALL-750x1080-1ed3adf9261d51f716889ccbadd77463015dc009.jpg'
          description='Compete in the Fortnite Champion Series: Chapter 2 - Season 2 for a share of the $5,000,000 total prize pool.'
          format='Fncs'
          datesColor='#B2A01A'
        />
      </div>
      <div style={{ width: '312px' }}>
        <EventCard
          line1='Trios'
          line2='Cash Cup'
          schedule='Every Monday'
          posterFront='https://cdn2.unrealengine.com/16br-comp-in-game-trioscashcup-poster-front-750x1080-46be00f23547.jpg'
          posterBack='https://cdn2.unrealengine.com/15br-comp-in-game-contendercup-poster-back-750x1080-68e13f266f52.jpg'
          description='Compete among the best in Fortnite for prizes!'
          format='Trios Tournament'
        />
      </div>
      <div style={{ width: '256px' }}>
        <PresetCard />
      </div>
      <div style={{ width: '256px' }}>
        <PresetCard add />
      </div>
      <div style={{ width: '256px' }}>
        <PresetCard none />
      </div>
    </div>
  )
}

export default App
