import * as React from 'react';
import SentimentVerySatisfiedIcon from 'material-ui-icons/SentimentVerySatisfied';
import SentimentSatisfiedIcon from 'material-ui-icons/SentimentSatisfied';
import SentimentNeutralIcon from 'material-ui-icons/SentimentNeutral';
import SentimentDissatisfiedIcon from 'material-ui-icons/SentimentDissatisfied';
import SentimentVeryDissatisfiedIcon from 'material-ui-icons/SentimentVeryDissatisfied';
import AddIcon from 'material-ui-icons/Add';
import {Mood} from '../data/interfaces';

export const SentimentIcons = {};
SentimentIcons[Mood.VerySatisfied] = <SentimentVerySatisfiedIcon className={'journal-mood-icon'}/>;
SentimentIcons[Mood.Satisfied] = <SentimentSatisfiedIcon className={'journal-mood-icon'}/>;
SentimentIcons[Mood.Neutral] = <SentimentNeutralIcon className={'journal-mood-icon'}/>;
SentimentIcons[Mood.Dissatisfied] = <SentimentDissatisfiedIcon className={'journal-mood-icon'}/>;
SentimentIcons[Mood.VeryDissatisfied] = <SentimentVeryDissatisfiedIcon className={'journal-mood-icon'}/>;
SentimentIcons[Mood.Add] = <AddIcon className={'journal-mood-icon'}/>;