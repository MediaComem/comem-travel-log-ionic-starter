export class Trip {
  id?: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
}

export class RawTrip {
  id?: string;
  title: string;
  description: string;
}

export const rawTripToTrip = (raw: RawTrip): Trip => {
  const decodedData = JSON.parse(raw.description);
  return {
    id: raw.id,
    title: raw.title,
    description: decodedData.description,
    startDate: decodedData.startDate,
    endDate: decodedData.endDate,
  };
};

export const tripToRawTrip = (trip: Trip): RawTrip => {
  const encodedData = JSON.stringify({
    description: trip.description,
    endDate: trip.endDate,
    startDate: trip.startDate,
  });
  return {
    id: trip.id,
    title: trip.title,
    description: encodedData,
  };
};
