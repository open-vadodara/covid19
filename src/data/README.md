# Data Structure

## `cumulative.json`

Has only one object in an array containing cumulatives and deltas for the current date

```javascript
[{
    " .": "188",
    "State_Code": "GJ",
    "State": "Gujarat",
    "District_Key": "GJ_Vadodara",
    "District": "Vadodara",
    "Confirmed": 131761,
    "Active": 13894,
    "Recovered": 117041,
    "Deceased": 826,
    "Migrated_Other": 0,
    "Delta_Confirmed": 1413,
    "Delta_Active": -1485,
    "Delta_Recovered": 2894,
    "Delta_Deceased": 4,
    "District_Notes": null,
    "Last_Updated": null
}]
```

## `timeseries.json`

```json
[
    {
        "Date": "2020-04-26",
        "State": "Gujarat",
        "District": "Vadodara",
        "Confirmed": 234,
        "Recovered": 56,
        "Deceased": 12,
        "Other": 0,
        "Tested": null
    },
    {
        "Date": "2020-04-27",
        "State": "Gujarat",
        "District": "Vadodara",
        "Confirmed": 240,
        "Recovered": 56,
        "Deceased": 13,
        "Other": 0,
        "Tested": null
    },
    ...
]
```

## `vaccination.json`

```javascript
[
  {
      "updated_on": "01-01-2022",
      "total_vaccinations": 2276408,
      "total_sessions": 7876,
      "total_sites": 63,
      "dose_one": 1137530,
      "dose_two": 1138878,
      "dose_precautionary": 0.0,
      "male": 1220092,
      "female": 1055926,
      "others": 390,
      "covaxin": 197330,
      "covishield": 2079078,
      "sputnik": 0.0,
      "aefi": 75,
      "zycov": 0.0,
      "vac_18_45": 1264357.0,
      "vac_45_60": 638013.0,
      "above_60": 374038
  },
  ...
]
```

## `meta.json`

Contains the meta information about Vadodara