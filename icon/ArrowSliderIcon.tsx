interface PropsType {
 side:'next'|'prev',
}

export default function ArrowSliderIcon({ side}: PropsType) {
    return (
        <>
            {side === 'prev' && (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M15.8203 17.9197L15.8203 11.6897L15.8203 6.07975C15.8203 5.11975 14.6603 4.63975 13.9803 5.31975L8.80031 10.4997C7.97031 11.3297 7.97031 12.6797 8.80031 13.5097L10.7703 15.4797L13.9803 18.6897C14.6603 19.3597 15.8203 18.8797 15.8203 17.9197Z"
                        fill="black"/>
                </svg>
            )}
            {side === 'next' && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.17969 6.08025L8.17969 12.3103L8.17969 17.9203C8.17969 18.8803 9.33969 19.3603 10.0197 18.6803L15.1997 13.5003C16.0297 12.6703 16.0297 11.3203 15.1997 10.4903L13.2297 8.52025L10.0197 5.31025C9.33969 4.64025 8.17969 5.12025 8.17969 6.08025Z"
                        fill="black"/>
                </svg>

            )}
        </>
    );
}
