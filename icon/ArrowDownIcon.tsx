interface PropsType {
    isOpen?: boolean;
}

export default function ArrowDownIcon({ isOpen = true }: PropsType) {
    return (
        <>
            {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M17.9207 8.17969H11.6907H6.08072C5.12072 8.17969 4.64073 9.33969 5.32073 10.0197L10.5007 15.1997C11.3307 16.0297 12.6807 16.0297 13.5107 15.1997L15.4807 13.2297L18.6907 10.0197C19.3607 9.33969 18.8807 8.17969 17.9207 8.17969Z"
                        fill="black"
                    />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M6.07928 15.8203L12.3093 15.8203H17.9193C18.8793 15.8203 19.3593 14.6603 18.6793 13.9803L13.4993 8.80031C12.6693 7.97031 11.3193 7.97031 10.4893 8.80031L8.51928 10.7703L5.30927 13.9803C4.63927 14.6603 5.11928 15.8203 6.07928 15.8203Z"
                        fill="black"
                    />
                </svg>
            )}
        </>
    );
}
