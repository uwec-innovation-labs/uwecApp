//Clearwater Labs 2019
import React, { Component } from 'react';
import Text from 'react-native';
import { QueryRender, graphql } from 'react-relay';

const LaundryQuery = ({ loading, laundryRoom }) => {
  if (loading) {
    return <Text>Loading</Text>;
  }else if (laundryRoom){
    return (
      <select name="laundryRoom">
        {data.laundryRooms.map(laundryRoom => (
          <option key={laundryRoom.id} value={laundryRoom.totalNumWashers}>
            {laundryRoom.totalNumWashers}
          </option>
        ))}
      </select>
    );
  }
}

export default graphql(gql`
  query alllaundrymachines {
    laundryRoom {
      id
      totalNumWashers
      totalNumDryers
      washersAvailable
      dryersAvailable
    }
  }
`)(LaundryRoom);
