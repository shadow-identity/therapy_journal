import {Enum} from 'enumify';

export class Mood extends Enum { }

Mood.initEnum(['VerySatisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'VeryDissatisfied', 'Add']);
