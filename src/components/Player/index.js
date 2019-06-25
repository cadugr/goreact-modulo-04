import React from 'react';
import Slider from 'rc-slider';
import { Container, Current, Volume } from './styles';
import VolumeIcon from '../../assets/images/volume.svg';

const Player = () => (
  <Container>
    <Current>
      <img
        src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiTiLSYnILjAhWOJrkGHZDSDB8QjRx6BAgBEAU&url=https%3A%2F%2Fwww.nme.com%2Fblogs%2Fnme-blogs%2Fstars-of-album-covers-as-they-look-today-761548&psig=AOvVaw0wfSbXAof5C2ne1CtInnlh&ust=1561468689046868"
        alt=""
      />
      <div>
        <span>Times like These</span>
        <small>Foo Fighters</small>
      </div>
    </Current>
    <Volume>
      <img src={VolumeIcon} alt="Volume" />
      <div>
        <Slider
          railStyle={{ background: '#404040', borderRadius: 10 }}
          trackStyle={{ background: '#FFF' }}
          handleStyle={{ display: 'none' }}
          value={100}
        />
      </div>
    </Volume>
  </Container>
);

export default Player;
