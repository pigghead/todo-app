// Testing client side .env file

export const TestComponent = () => {
    return (
        <div>
            URL: {process.env.REACT_APP_URL}
        </div>
    )
}