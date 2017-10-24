import * as React from 'react';
import SentimentVerySatisfiedIcon from 'material-ui/svg-icons/social/sentiment-very-satisfied';
import SentimentSatisfiedIcon from 'material-ui/svg-icons/social/sentiment-satisfied';
import SentimentNeutralIcon from 'material-ui/svg-icons/social/sentiment-neutral';
import SentimentDissatisfiedIcon from 'material-ui/svg-icons/social/sentiment-dissatisfied';
import SentimentVeryDissatisfiedIcon from 'material-ui/svg-icons/social/sentiment-very-dissatisfied';
import AddIcon from 'material-ui/svg-icons/content/add';
import {Mood} from '../data/mood';

export const SentimentIcons = {};
SentimentIcons[Mood.VerySatisfied] = <SentimentVerySatisfiedIcon className={'journal-mood-icon'}/>;
SentimentIcons[Mood.Satisfied] = <SentimentSatisfiedIcon className={'journal-mood-icon'}/>;
SentimentIcons[Mood.Neutral] = <SentimentNeutralIcon className={'journal-mood-icon'}/>;
SentimentIcons[Mood.Dissatisfied] = <SentimentDissatisfiedIcon className={'journal-mood-icon'}/>;
SentimentIcons[Mood.VeryDissatisfied] = <SentimentVeryDissatisfiedIcon className={'journal-mood-icon'}/>;
SentimentIcons[Mood.Add] = <AddIcon className={'journal-mood-icon'}/>;