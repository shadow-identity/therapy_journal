import * as React from 'react';
import SentimentVerySatisfiedIcon from 'material-ui/svg-icons/social/sentiment-very-satisfied';
import SentimentSatisfiedIcon from 'material-ui/svg-icons/social/sentiment-satisfied';
import SentimentNeutralIcon from 'material-ui/svg-icons/social/sentiment-neutral';
import SentimentDissatisfiedIcon from 'material-ui/svg-icons/social/sentiment-dissatisfied';
import SentimentVeryDissatisfiedIcon from 'material-ui/svg-icons/social/sentiment-very-dissatisfied';
import {Mood} from '../interfaces';

export const SentimentIcons = {};
SentimentIcons[Mood.VerySatisfied] = <SentimentVerySatisfiedIcon/>;
SentimentIcons[Mood.Satisfied] = <SentimentSatisfiedIcon/>;
SentimentIcons[Mood.Neutral] = <SentimentNeutralIcon/>;
SentimentIcons[Mood.Dissatisfied] = <SentimentDissatisfiedIcon/>;
SentimentIcons[Mood.VeryDissatisfied] = <SentimentVeryDissatisfiedIcon/>;