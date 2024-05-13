'use client';

import {useCallback, useState} from 'react';
import { Button, Box } from '@mui/material';
import debounce from 'debounce';

import { getCurrentTime } from "@/utils/getCurrentTime";
import DiceSlider from "@/components/DiceSlider/DiceSlider";
import GameWinNumber from "@/components/GameWinNumber/GameWinNumber";
import RangeType, { RangeTypes } from "@/components/RangeType/RangeType";
import Notification, { NotificationStatusType } from "@/components/Notification/Notification";
import GameResultsTable, { IGameResult } from "@/components/GameResultsTable/GameResultsTable";

const MAX_RANGE = 100;

interface INotification {
  status: NotificationStatusType;
  title: string;
  description?: string;
}

const GameLayout = () => {
  const [winNumber, setWinNumber] = useState(0);
  const [rangeValue, setRangeValue] = useState<number>(20);
  const [history, setHistory] = useState<IGameResult[]>([]);
  const [isOpenNotification, setIsOpenNotification] = useState(false);
  const [rangeType, setRangeType] = useState<RangeTypes>('under');
  const [notification, setNotification] = useState<INotification>({
    status: 'success',
    title: '',
  })
  
  const handleChangeRangeValue = (value: number) => {
    setRangeValue(value)
  }

  const handleChangeRangeType = (value: RangeTypes) => {
    setRangeType(value)
  }

  
  const playGame = useCallback(debounce(() => {
    const randomNumber = Math.floor(Math.random() * MAX_RANGE) + 1;
    const conditionMet = (rangeType === 'under' && randomNumber < rangeValue) ||
      (rangeType === 'over' && randomNumber > rangeValue);

    const time = getCurrentTime()

    const gameResult: IGameResult = {
      time,
      guess: `${rangeType} ${rangeValue}`,
      result: randomNumber,
      status: conditionMet ? 'success': 'fail',
    }
    
    const notification = conditionMet ?
      {
        status: 'success' as NotificationStatusType,
        title: 'You won',
        description:'',
      } 
      :
      {
        status: 'error' as NotificationStatusType,
        title: 'You lost',
        description:'Number was higher',
      }
      
    setWinNumber(randomNumber)
    setIsOpenNotification(true)
    setNotification(notification)
    setHistory(prev => [gameResult, ...prev] )
  }, 1000),[rangeType, rangeValue]);

  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        maxWidth: '600px',
      }}
    >
      <Notification 
        status={notification.status}
        isOpen={isOpenNotification}
        handleClose={() => setIsOpenNotification(false)}
      >
        <div>
          <div>
            {notification.title}
          </div>
          {!!notification.description && (
            <div>
              {notification.description}
            </div>
          )}
        </div>
      </Notification>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '320px',
          minWidth: '320px'
        }}
      >
        <GameWinNumber value={winNumber} />
        <RangeType type={rangeType} handleChange={handleChangeRangeType}/>
        <DiceSlider max={MAX_RANGE} marks={5} defaultValue={rangeValue} handleChange={handleChangeRangeValue} />
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={playGame}
          style={{ width:'100%', margin: '1rem 0'}}
        >
          Play
        </Button>
      </Box>
      <GameResultsTable results={history}/>
    </Box>
  );
};

export default GameLayout;
