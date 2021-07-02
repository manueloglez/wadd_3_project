const reservations = [
  {
    startTime: '2021-01-01T14:48:00.000Z',
    endTime: '2021-02-01T16:48:00.000Z',
    status: 'approved',
    teacher: {
      "id": 14,
      "full_name": "Marjorie McLaughlin",
      "created_at": "2021-07-02T00:04:43.121Z",
      "updated_at": "2021-07-02T00:04:43.121Z"
    },
    facility: {
      location: 'Cooper St. 3215, New WestMinster, BC',
      name: 'Library',
      features: [],
      availability: true
    }
  },
  {
    startTime: '2021-03-04T14:48:00.000Z',
    endTime: '2021-05-05T16:48:00.000Z',
    status: 'pending',
    teacher: {
      "id": 14,
      "full_name": "Marjorie McLaughlin",
      "created_at": "2021-07-02T00:04:43.121Z",
      "updated_at": "2021-07-02T00:04:43.121Z"
    },
    facility: {
      location: 'Cooper St. 3215, New WestMinster, BC',
      name: 'Library',
      features: [],
      availability: true
    }
  }
]

export default reservations