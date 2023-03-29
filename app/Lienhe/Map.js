'use client'
import React from 'react';
const Map = () => {
    return (
        <div className="google-map-code" style={{ marginTop: 15, marginBottom: 25 }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5542.514535918623!2d106.66280855438406!3d10.799850986197383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175292fd8ed6517%3A0x84b4c9dc5ef31cb4!2zQ8O0bmcgdHkgQ-G7lSBwaOG6p24gTsSDbmcgbMaw4bujbmcgVFRDICjEkGnhu4duIE3hurd0IFRy4budaSBUVEMp!5e0!3m2!1svi!2s!4v1678199968360!5m2!1svi!2s"
                width="100%" height="650" frameborder="0" style={{ border: 0 }}
                allowfullscreen="" aria-hidden="false"
                tabindex="0"></iframe>
        </div>
    )
}

export default Map