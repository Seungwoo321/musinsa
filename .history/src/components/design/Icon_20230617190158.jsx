import React from 'react'
import { string, number } from 'prop-types'
const IconSet = {
    close: {
        viewBox: '0 0 14 14',
        markup: {
            _html: `
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.30224 7L3 3.69776L3.69776 3L7 6.30224L10.3022 3L11 3.69776L7.69776 7L11 10.3022L10.3022 11L7 7.69776L3.69776 11L3 10.3022L6.30224 7Z" fill="white"/>
            `
        }
    },
    Spinner: {
        viewBox: '0 0 18 18',
        markup: {
            _html: `
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 15.2C12.4242 15.2 15.2 12.4242 15.2 9H17.2C17.2 13.5287 13.5287 17.2 9 17.2V15.2Z" fill="url(#paint0_linear_26_708)"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.79999C8 1.2477 8.44772 0.799988 9 0.799988C13.5287 0.799988 17.2 4.47125 17.2 8.99999H15.2C15.2 5.57582 12.4242 2.79999 9 2.79999C8.44772 2.79999 8 2.35227 8 1.79999Z" fill="url(#paint1_linear_26_708)"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.0963 2.33387C6.38486 2.80478 6.23703 3.42044 5.76612 3.709C3.98492 4.80046 2.80017 6.76227 2.80017 8.9999C2.80017 12.4241 5.57601 15.1999 9.00017 15.1999V17.1999C4.47144 17.1999 0.800171 13.5286 0.800171 8.9999C0.800171 6.03778 2.37144 3.44352 4.72117 2.00369C5.19208 1.71513 5.80775 1.86296 6.0963 2.33387Z" fill="url(#paint2_linear_26_708)"/>
                <defs>
                <linearGradient id="paint0_linear_26_708" x1="9" y1="15.4" x2="15.4" y2="9" gradientUnits="userSpaceOnUse">
                <stop stop-opacity="0.5"/>
                <stop offset="1" stop-opacity="0.25"/>
                </linearGradient>
                <linearGradient id="paint1_linear_26_708" x1="15" y1="7.39999" x2="6.2" y2="3.39999" gradientUnits="userSpaceOnUse">
                <stop stop-opacity="0.25"/>
                <stop offset="1" stop-opacity="0"/>
                </linearGradient>
                <linearGradient id="paint2_linear_26_708" x1="9.00017" y1="15.4001" x2="7.00017" y2="1.8001" gradientUnits="userSpaceOnUse">
                <stop stop-opacity="0.5"/>
                <stop offset="1"/>
                </linearGradient>
                </defs>
            `
        }
    },
    refresh: {
        viewBox: '0 0 22 22',
        markup: {
            _html: `
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C14.012 3 16.6353 4.66458 18 7.12399V4.5H19V9H18.748H17.7101H16H14.5V8H17.3264C16.2029 5.63505 13.7924 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C14.866 18 18 14.866 18 11H19Z" fill="black"/>
                <mask id="mask0_3457_174" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="3" y="3" width="16" height="16">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C14.012 3 16.6353 4.66458 18 7.12399V4.5H19V9H18.748H17.7101H16H14.5V8H17.3264C16.2029 5.63505 13.7924 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C14.866 18 18 14.866 18 11H19Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_3457_174)">
                </g>
            `
        }
    },
    search: {
        viewBox: '0 0 22 22',
        markup: {
            _html: `
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 9.5C16 13.0899 13.0899 16 9.5 16C5.91015 16 3 13.0899 3 9.5C3 5.91015 5.91015 3 9.5 3C13.0899 3 16 5.91015 16 9.5ZM4 9.5C4 12.5376 6.46243 15 9.5 15C12.5376 15 15 12.5376 15 9.5C15 6.46243 12.5376 4 9.5 4C6.46243 4 4 6.46243 4 9.5ZM18.3464 19.0536L14.3464 15.0536L15.0536 14.3464L19.0536 18.3464L18.3464 19.0536Z" fill="#AAAAAA"/>        
            `
        }
    }
}

export default function Icon ({ name, size = 22 }) {
    if (!IconSet[name]) {
        return (
            <></>
            )
        }
        console.log(name)
    return (
        <svg
            width={size}
            height={size}
            viewBox={IconSet[name].viewBox}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            dangerouslySetInnerHTML={IconSet[name].markup}
        />
    )
}

Icon.proptype = {
    name: string,
    size: number
}
