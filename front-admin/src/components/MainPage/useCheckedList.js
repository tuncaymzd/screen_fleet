import { useState } from 'react';
import _ from 'lodash';

export default () => {
  const [checkedList, setCheckedList] = useState([]);

  const handleToggle = composition => () => {
    const currentIndex = _.indexOf(checkedList, composition.id);
    const newChecked = _.clone(checkedList);

    if (currentIndex === -1) {
      newChecked.push(composition.id);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setCheckedList(newChecked);
  };

  return { checkedList, setCheckedList, handleToggle };
};
