'use client'

import {
    Dialog,
    DialogContent,
    DialogTrigger
} from "@/components/ui/dialog"
import { City, Country, State } from 'country-state-city'
import React from 'react'
import { Button } from '../ui/button'
import SearchableDialogWithPopover from "../reusable/SearchableDialogWithPopover"


type Props = {
    stateName: string
    countryName: string
    cityName: string
}

function LocateIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="2" x2="5" y1="12" y2="12" />
            <line x1="19" x2="22" y1="12" y2="12" />
            <line x1="12" x2="12" y1="2" y2="5" />
            <line x1="12" x2="12" y1="19" y2="22" />
            <circle cx="12" cy="12" r="7" />
        </svg>
    )
}

const CheckoutChangeDeliveryDialog = (props: Props) => {
    const [countryName, setCountryName] = React.useState(props.countryName)
    const [stateName, setStateName] = React.useState(props.stateName)
    const [cityName, setCityName] = React.useState(props.cityName)


    const allCountriesJSON = Country.getAllCountries()
    const countryCode = allCountriesJSON.find((country) => country.name.toLowerCase() === countryName)?.isoCode || ''
    const allStatesJSON = State.getStatesOfCountry(countryCode)
    const stateCode = allStatesJSON.find((country) => country.name.toLowerCase() === stateName)?.isoCode || ''
    const allCitiesJSON = City.getCitiesOfState(countryCode, stateCode)

    return (
        <div className="flex gap-3 items-center">
            <div className="flex items-center space-x-1">
                <LocateIcon className="text-gray-600 w-5 h-5" />
                <span className="text-sm capitalize">{`${stateName || '--'}, ${cityName || '--'}, ${countryName || '--'} `}</span>
            </div>
            <Dialog>
                <DialogTrigger>
                    <p className="text-blue-600 underline text-sm">change</p>
                </DialogTrigger>
                <DialogContent>
                    <SearchableDialogWithPopover
                        value={countryName}
                        options={allCountriesJSON.map(country => country.name.toLowerCase())}
                        setValueState={setCountryName}
                        label="Country"
                    />
                    <SearchableDialogWithPopover
                        value={stateName}
                        options={allStatesJSON.map(state => state.name.toLowerCase())}
                        setValueState={setStateName}
                        label="State"
                    />
                    <SearchableDialogWithPopover
                        value={cityName}
                        options={allCitiesJSON?.map(city => city.name.toLowerCase())}
                        setValueState={setCityName}
                        label="City"
                    />
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default CheckoutChangeDeliveryDialog