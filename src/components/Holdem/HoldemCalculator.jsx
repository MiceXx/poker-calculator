import React from 'react';
import AllCards from './AllCards';
import SelectedCards from './SelectedCards';
import PokerTable from '../Table/PokerTable';


function HoldemCalculator() {
    return (
        <div>
            <PokerTable />
            <SelectedCards />
            <AllCards />
        </div>
    );
}

export default HoldemCalculator;