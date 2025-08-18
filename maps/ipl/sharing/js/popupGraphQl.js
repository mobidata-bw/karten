import { iplPath } from '../../../../src/utils/paths.js';


export async function graphQlStation(id) {

  return fetch(`https://${iplPath}.mobidata-bw.de/sharing/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: `
            query station {
              station(id: "${id}") {
                id
                name {
                  translation {
                    language
                    value
                  }
                }
                shortName {
                  translation {
                    language
                    value
                  }
                }
                lat
                lon
                region {
                  name
                }
                capacity
                vehicleTypesCapacity {
                  vehicleTypes {
                    id
                    formFactor
                    propulsionType
                    maxRangeMeters
                    name {
                      translation {
                        language
                        value
                      }
                    }
                    returnConstraint
                  }
                  count
                }
                address
                postCode
                rentalMethods
                isValetStation
                isChargingStation
                isVirtualStation
                numVehiclesAvailable
                vehicleTypesAvailable {
                  vehicleType {
                    id
                    formFactor
                    propulsionType
                    maxRangeMeters
                    name {
                      translation {
                        language
                        value
                      }
                    }
                    returnConstraint
                  }
                  count
                }
                numDocksAvailable
                isInstalled
                isRenting
                isReturning
                lastReported
              }
            }
          `,
      operationName: "station",
      path: "/graphql"
    })
  })
    .then(response => response.json())
    .then(data => {
      const blob = new Blob(
        [JSON.stringify(data, null, 2)],
        { type: 'application/json' }
      );
      const url = URL.createObjectURL(blob);
      return url;
    })
    .catch(error => console.error("Fehler:", error));

};


export async function graphQlVehicle(id) {

  return fetch(`https://${iplPath}.mobidata-bw.de/sharing/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: `
            query vehicle {             
              vehicle(id: "${id}") {
                id
                lat
                lon
                isReserved
                isDisabled
                vehicleType {
                  id
                  formFactor
                  propulsionType
                  maxRangeMeters
                  name {
                    translation {
                      language
                      value
                    }
                  }
                  returnConstraint
                }
                currentRangeMeters
                currentFuelPercent
              }
            }
            `,
      operationName: "vehicle",
      path: "/graphql"
    })
  })
    .then(response => response.json())
    .then(data => {
      const blob = new Blob(
        [JSON.stringify(data, null, 2)],
        { type: 'application/json' }
      );
      const url = URL.createObjectURL(blob);
      return url;
    })
    .catch(error => console.error("Fehler:", error));

};