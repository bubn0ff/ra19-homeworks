import React, {Component} from 'react';
import nanoid from 'nanoid';
import StepsInput from './StepsInput';
import StepsList from './StepsList';

export default class StepsForm extends Component {
  constructor() {
    super();
    this.state = {
      walks: [
        { date: '20.07.2019', km: 5.7, id: '123' },
        { date: '19.07.2019', km: 14.2, id: '456' },
        { date: '18.07.2019', km: 3.4, id: '789' }
      ],
    };
    this.onEnter = this.onEnter.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }


  onEnter(newWalk) {
    const id = nanoid(),
          walks = this.state.walks,
          newWalks = [...walks],
          dates = walks.map(walk => walk.date);

    // если добавляем значения, указывая уже существующую дату - новые значения суммируются с теми, что хранятся в таблице
    if (dates.includes(newWalk.date)) {
      newWalks.forEach(walk => {
        if (walk.date === newWalk.date) {
          walk.km = +walk.km + +newWalk.km;
        }
      })
    } else {
      newWalks.push({...newWalk, id});
    }

    newWalks.forEach(walk => {
      const km = +walk.km;

      if (Number.isInteger(km)) return;
      
      walk.km = km.toFixed(1);
    })

    this.setState({walks: newWalks});
  }

  onDelete(id) {
    const walks = this.state.walks,
          newWalks = walks.filter(walk => walk.id !== id);
    this.setState({walks: newWalks});
  }

  render() {
    return (
      <div>
        <StepsInput onEnter={this.onEnter} />
        <StepsList onDelete={this.onDelete} walks={sortArray(this.state.walks)} />
      </div>
    );
  }
}

// Сортировка списка данных по дате
function sortArray(array) {
  return [...array].sort((el1, el2) => compareDates(el1.date, el2.date));
}

// Сравнение дат
function compareDates(date1, date2) {
  const arr1 = date1.split('.');
  const arr2 = date2.split('.');

  if (arr1[0] !== arr2[0]) {
    return arr2[0] - arr1[0];
  }

  if (arr1[1] !== arr2[1]) {
    return arr2[1] - arr1[1];
  }

  if (arr1[2] !== arr2[2]) {
    return arr2[2] - arr1[2];
  }

  return 0;
}