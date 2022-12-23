import Autocomplete from "react-google-autocomplete";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { useRouter } from 'next/router'

import React, { useEffect, useState } from 'react';

export default function Location() {

    const router = useRouter();
    var supportsWheel = false;
    const DoSomething = (e) => {

        if (e.type == "wheel") supportsWheel = true;
        else if (supportsWheel) return;

        var delta = (e.deltaY || -e.wheelDelta || e.detail) >> 10 || 1;


        if (delta == -1) {
            // cnt += 1;

            setTimeout(() => {
                router.push('/')
            }, 500);

        }

    }

    useEffect(() => {
        document.addEventListener("wheel", DoSomething);
    }, []);

    return (
        <div>

            <GooglePlacesAutocomplete
                apiKey="AIzaSyAMmgRzydiRmddUId4gUV68a5092C6ofwY"
                apiOptions={{ region: 'ph' }}

            />
        </div>
    )
}