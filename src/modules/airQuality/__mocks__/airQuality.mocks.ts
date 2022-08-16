export const mockAirQuality = {
    "id": "4d44a3f8-0d25-4335-a06a-34b291403de7",
    "createdAt": "2022-08-14T01:45:29.546Z",
    "createdBy": "AIR_QUALITY_SERVICE",
    "isArchived": false,
    "updatedAt": "2022-08-14T01:45:29.546Z",
    "updatedBy": "AIR_QUALITY_SERVICE",
    "city": "Paris",
    "country": "France",
    "location": {
        "type": "Point",
        "coordinates": [
            2.351666,
            48.859425
        ]
    },
    "pollution": {
        "ts": "2022-08-13T20:00:00.000Z",
        "aqicn": 28,
        "aqius": 38,
        "maincn": "o3",
        "mainus": "p2"
    },
    "state": "Ile-de-France",
    "weather": {
        "hu": 43,
        "ic": "01n",
        "pr": 1007,
        "tp": 22,
        "ts": "2022-08-14T02:00:00.000Z",
        "wd": 90,
        "ws": 2.57
    }
};

export const mockedAirQualityRepository = {
	findOne: jest.fn(() => [mockAirQuality]),
	find: jest.fn(() => mockAirQuality),
	save: jest.fn(() => mockAirQuality),
};

