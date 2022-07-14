import React from 'react';
import { useNavigate } from 'react-router-dom';
import s from './NotFound.module.scss';
import Button from '../../ui/Button';
import Error404 from '../../../assets/images/404.png';
import TeamRocket from '../../../assets/images/TeamRocket.png';
import { LinkEnum } from '../../../const/constVariable';

const NotFound = () => {
  const navigate = useNavigate();

  const handlerTransition = () => {
    navigate(LinkEnum.HOME);
  };
  return (
    <div className={s.root}>
      <div className={s.errorImg}>
        <img src={Error404} alt="404" />
      </div>
      <div className={s.teamRocketImg}>
        <img src={TeamRocket} alt="TeamRocket" />
      </div>
      <div className={s.text}>
        <div className={s.textWhite}>The rocket team</div>
        <div>has won this time.</div>
      </div>

      <Button color="yellow" onClick={handlerTransition}>
        Return
      </Button>
    </div>
  );
};

export default NotFound;
