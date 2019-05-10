//Clearwater Labs 2019
import React, { Component } from 'react';
import Text from 'react-native';
import { QueryRender, graphql } from 'react-relay';
import Prisma from 'prisma';
const prisma = new Prisma({
  endpoint: 'http://localhost:4466/',
})
const users = await prisma.users()
const LaundryQuery = () => {
  <Text>${users}</Text>
};

export default LaundryQuery;

// const lQuery = (props) => {
//   return(
//     <QueryRender
//       environment = {environment}
//       query = {graphql`
//         query alllaundrymachines {
//           laundryRoom {
//             id
//             totalNumDryers
//             totalNumWashers
//             dryersAvailable
//           }
//         }
//       `}
//       render={renderQuery}
//       />
//   );
// }
// export default graphql(graphql`
//   query alllaundrymachines {
//     laundryRoom {
//       id
//       totalNumWashers
//       totalNumDryers
//       washersAvailable
//       dryersAvailable
//     }
//   }
// `)(LaundryRoom);
